const {test}=require('node:test'),assert=require('node:assert/strict');
const {RecordStore}=require('../tools/pendulum-workbench/storage.js');
function fixture(raw=null){const map=new Map(raw===null?[]:[['lab',raw]]);let tail=Promise.resolve(),full=false;const storage={get length(){return map.size;},key:i=>Array.from(map.keys())[i]??null,getItem:k=>map.get(k)??null,setItem:(k,v)=>{if(full)throw Error('quota');map.set(k,v);}};const locks={request:(name,fn)=>{const next=tail.then(fn);tail=next.catch(()=>{});return next;}};const empty=()=>({records:[],notes:{}});const validate=p=>{assert(Array.isArray(p.records));assert(p.notes&&typeof p.notes==='object');const ids=new Set();for(const r of p.records){assert(Number.isInteger(r.id)&&r.id>0&&!ids.has(r.id));ids.add(r.id);assert(Number.isFinite(r.value));}return p;};return {map,storage,locks,validate,empty,quota:()=>full=true,make:()=>new RecordStore({key:'lab',storage,locks,validate,empty})};}
test('one damaged record is quarantined; ordinary writes preserve the exact raw original',async()=>{const raw=JSON.stringify({records:[{id:1,value:5},{id:2,value:'bad'}],notes:{claim:'keep'}}),f=fixture(raw),s=f.make(),d=s.load();assert.equal(d.records.length,1);assert.equal(s.blocked,'corrupt');assert([...f.map.values()].includes(raw));d.notes.claim='new';assert.equal(await s.write(d),false);assert.equal(f.map.get('lab'),raw);assert.equal(await s.write(d,{recover:true}),true);assert.equal(JSON.parse(f.map.get('lab')).records.length,1);assert([...f.map.entries()].some(([k,v])=>k!=='lab'&&v===raw));});
test('malformed JSON remains intact and cannot be recovered as an empty project',async()=>{const f=fixture('{broken'),s=f.make(),d=s.load();assert.equal(s.recovered,false);assert.equal(await s.write(d),false);assert.equal(f.map.get('lab'),'{broken');});
test('simultaneous stale writers serialize; only the first succeeds',async()=>{const f=fixture(),a=f.make(),b=f.make(),da=a.load(),db=b.load();da.records.push({id:1,value:10});db.notes.claim='stale';assert.deepEqual(await Promise.all([a.write(da),b.write(db)]),[true,false]);assert.equal(b.blocked,'conflict');assert.equal(JSON.parse(f.map.get('lab')).records.length,1);assert.equal(db.notes.claim,'stale');});
test('queued same-tab edits all persist; snapshots cannot mutate while waiting',async()=>{const f=fixture(),s=f.make(),d=s.load();d.notes.claim='one';const a=s.write(d);d.notes.claim='two';const b=s.write(d);d.notes.claim='unsaved';assert.deepEqual(await Promise.all([a,b]),[true,true]);assert.equal(JSON.parse(f.map.get('lab')).notes.claim,'two');assert.equal(s.dirty,false);});
test('quota failure keeps original and marks the in-memory draft unsaved',async()=>{const raw=JSON.stringify({records:[{id:1,value:2}],notes:{}}),f=fixture(raw),s=f.make(),d=s.load();f.quota();d.records.push({id:2,value:3});assert.equal(await s.write(d),false);assert.equal(f.map.get('lab'),raw);assert.equal(d.records.length,2);assert.equal(s.dirty,true);assert.equal(s.blocked,'unavailable');});
test('recovery cannot overwrite unless its raw archive can be stored',async()=>{const raw='{"records":[{"id":1,"value":"bad"}],"notes":{}}',f=fixture(raw),s=f.make(),d=s.load();for(const key of [...f.map.keys()])if(key.startsWith('lab-corrupt-'))f.map.delete(key);f.quota();assert.equal(await s.write(d,{recover:true}),false);assert.equal(f.map.get('lab'),raw);});
test('storage event blocks a stale tab even before its next save',async()=>{const f=fixture(),a=f.make(),b=f.make();const da=a.load(),db=b.load();da.notes.claim='new';await a.write(da);b.observe();assert.equal(b.blocked,'conflict');assert.equal(await b.write(db),false);assert.equal(JSON.parse(f.map.get('lab')).notes.claim,'new');});
test('without Web Locks the store refuses unsafe writes',async()=>{const f=fixture(),s=new RecordStore({key:'lab',storage:f.storage,validate:f.validate,empty:f.empty});const d=s.load();assert.equal(await s.write(d),false);assert.equal(f.map.size,0);});

test('refreshing a corrupt project repeatedly keeps exactly one original archive',()=>{
 const raw='{"records":[{"id":1,"value":"bad"}],"notes":{}}',f=fixture(raw);
 for(let i=0;i<4;i++){const store=f.make();store.load();assert.equal(store.blocked,'corrupt');}
 assert.equal(f.map.size,2);assert.equal([...f.map.keys()].filter(k=>k.startsWith('lab-corrupt-')).length,1);
 assert.equal(f.map.get('lab'),raw);
});
test('legacy identical archives are reused without writes even when storage is full',()=>{
 const raw='{broken',f=fixture(raw);f.map.set('lab-corrupt-legacy',raw);f.quota();const store=f.make();store.load();
 assert.equal(store.archiveRaw(),'lab-corrupt-legacy');assert.equal(f.map.size,2);assert.equal(f.map.get('lab'),raw);
});
test('different corrupt bytes get a separate archive; archives from other projects do not count',()=>{
 const f=fixture('{first');f.map.set('other-lab-corrupt-old','{first');f.make().load();f.map.set('lab','{second');f.make().load();
 const copies=[...f.map].filter(([k])=>k.startsWith('lab-corrupt-')).map(([,v])=>v);
 assert.deepEqual(copies.sort(),['{first','{second']);assert.equal(f.map.get('other-lab-corrupt-old'),'{first');
});
test('explicit recovery reuses the original archive instead of duplicating it',async()=>{
 const f=fixture('{"records":[{"id":1,"value":"bad"}],"notes":{}}'),store=f.make(),data=store.load();
 const archived=[...f.map].filter(([k])=>k.startsWith('lab-corrupt-'));
 assert.equal(await store.write(data,{recover:true}),true);
 assert.deepEqual([...f.map].filter(([k])=>k.startsWith('lab-corrupt-')),archived);
 assert.equal(JSON.parse(f.map.get('lab')).records.length,0);
});
