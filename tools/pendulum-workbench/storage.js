/* Shared local record store. A stale tab never overwrites another tab's snapshot. */
(function(root){
'use strict';
class RecordStore {
 constructor({key,storage,locks,validate,empty,onStatus=()=>{}}){Object.assign(this,{key,storage,locks,validate,empty,onStatus});this.queue=Promise.resolve();this.blocked='';this.pending=0;this.dirty=false;this.raw=null;this.recovered=false;}
 status(message){this.message=message;this.onStatus(message,this.blocked);}
 block(kind,message){this.blocked=kind;this.status(message);return false;}
 load(){
  let value=this.empty();
  try{this.raw=this.storage.getItem(this.key);if(this.raw!==null)value=this.validate(JSON.parse(this.raw));}
  catch(error){
   if(this.raw!==null){
    try{const parsed=JSON.parse(this.raw);if(!Array.isArray(parsed.records))throw Error('records');value=this.validate({...parsed,records:[]});const records=[],ids=new Set();for(const record of parsed.records||[]){try{this.validate({...parsed,records:[record]});if(ids.has(record.id))continue;ids.add(record.id);records.push(record);}catch{}}value={...value,records};this.recovered=true;}catch{}
    try{this.archiveRaw();}catch{}
    this.block('corrupt','舊檔含異常資料，已暫停儲存。可讀紀錄僅供檢視；請先下載原始檔，再套用可讀紀錄。');
   }else this.block('unavailable','無法讀取裝置儲存空間。請下載本頁副本，勿關閉本頁。');
  }
  if(!this.blocked&&!this.locks?.request)this.block('unsupported','此瀏覽器無法保護多分頁儲存，已暫停寫入；請使用支援 Web Locks 的瀏覽器。');
  return value;
 }
 archiveRaw(){const key=this.key+'-corrupt-'+Date.now()+'-'+Math.random().toString(36).slice(2);this.storage.setItem(key,this.raw);if(this.storage.getItem(key)!==this.raw)throw Error('原始檔備份失敗');return key;}
 observe(){try{if(this.storage.getItem(this.key)!==this.raw)this.block('conflict','另一個分頁已更新紀錄。已停止覆寫；先下載本頁副本，再重新載入最新紀錄。');}catch{this.block('unavailable','無法讀取儲存空間；請下載本頁副本。');}}
 write(value,{recover=false}={}){
  let snapshot;try{snapshot=JSON.stringify(this.validate(JSON.parse(JSON.stringify(value))));}catch{this.block('invalid','本頁資料未通過檢查，未覆寫舊檔；請下載本頁副本。');return Promise.resolve(false);}
  this.dirty=true;this.pending++;
  const task=async()=>{
   if(this.blocked&&!(recover&&this.blocked==='corrupt'))return false;
   if(!this.locks?.request)return this.block('unsupported','無法安全儲存；請下載本頁副本。');
   try{return await this.locks.request(this.key,()=>{
    if(this.blocked&&!(recover&&this.blocked==='corrupt'))return false;
    if(this.storage.getItem(this.key)!==this.raw)return this.block('conflict','另一個分頁已更新紀錄。已停止覆寫；先下載本頁副本，再重新載入最新紀錄。');
    if(recover)this.archiveRaw(); // Recovery cannot replace the original unless an exact archive succeeds.
    const next=JSON.stringify({...JSON.parse(snapshot),_revision:Date.now()+'-'+Math.random().toString(36).slice(2)});
    this.storage.setItem(this.key,next);this.raw=next;this.blocked='';return true;
   });}catch{return this.block('unavailable','裝置空間不足或拒絕儲存。新內容只在本頁，請下載本頁副本；舊檔未被覆寫。');}
  };
  const result=this.queue.then(task);this.queue=result.catch(()=>false);
  return result.finally(()=>{this.pending--;if(!this.pending&&!this.blocked){this.dirty=false;this.status('已儲存於這部裝置');}});
 }
}
function mount(store,getData,download){
 const box=document.createElement('aside');box.className='storage-warning';box.hidden=true;box.setAttribute('aria-label','紀錄保存狀態');
 const message=document.createElement('p');message.setAttribute('role','alert');box.append(message);
 function button(label,fn){const b=document.createElement('button');b.textContent=label;b.addEventListener('click',fn);box.append(b);return b;}
 button('下載本頁副本',()=>download('未合併-本頁紀錄.json',JSON.stringify(getData(),null,2),'application/json'));
 const original=button('下載原始檔',()=>download('原始紀錄-請保留.json',store.raw,'application/json'));
 const recover=button('保留原始檔並套用可讀紀錄',async()=>{if(await store.write(getData(),{recover:true}))location.reload();});
 let reloadConfirmed=false;const reload=button('重新載入最新紀錄',()=>{if(store.dirty&&!reloadConfirmed){reloadConfirmed=true;reload.textContent='已下載副本，確認重新載入';message.textContent='重新載入會離開本頁尚未儲存的修改。請先下載本頁副本，再按確認。';return;}store.dirty=false;location.reload();});
 document.body.append(box);
 store.onStatus=(text,blocked)=>{document.getElementById('saveStatus').textContent=text;box.hidden=!blocked;message.textContent=text;original.hidden=store.raw===null;recover.hidden=blocked!=='corrupt'||!store.recovered;};
 if(store.message)store.onStatus(store.message,store.blocked);
 addEventListener('storage',event=>{if(event.storageArea===localStorage&&(event.key===store.key||event.key===null))store.observe();});
 addEventListener('beforeunload',event=>{if(store.dirty||store.pending){event.preventDefault();event.returnValue='';}});
}
const api={RecordStore,mount};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.InquiryStorage=api;
})(typeof window!=='undefined'?window:globalThis);
