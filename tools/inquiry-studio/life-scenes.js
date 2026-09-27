(function(root){
'use strict';
const M=root.LifeModels;
const tx=(x,y,t,size=12,color='#40583b')=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" font-family="system-ui,sans-serif">${t}</text>`;
const line=(x,y,X,Y,color='#6f8464',width=2)=>`<line x1="${x}" y1="${y}" x2="${X}" y2="${Y}" stroke="${color}" stroke-width="${width}"/>`;
const panel=(x,y,w,label,value,unit)=>`<rect x="${x}" y="${y}" width="${w}" height="76" rx="8" fill="#324b40" stroke="#768c79"/><rect x="${x+9}" y="${y+24}" width="${w-18}" height="43" rx="3" fill="#dce5c9"/>${tx(x+12,y+16,label,9,'#dfe5cc')}${tx(x+18,y+52,value,22)}${tx(x+w-38,y+53,unit,10)}`;
const clock=t=>tx(360,115,`模擬經過 ${t} min`,13);
function draw(lab,c,r,{running,elapsed=0,minutes=0}={}){
let svg='',value='',label='',hint='';
if(lab==='thermos'){
 const d=8+c.thickness*1.2,temp=r.temperature;
 svg=clock(minutes)+`<ellipse cx="532" cy="490" rx="103" ry="12" fill="#665543" opacity=".15"/><path d="M440 278Q532 250 624 278L611 463Q532 496 453 463z" fill="url(#ceramicFinish)" stroke="#8c7655" stroke-width="2"/><path d="M${440+d} 283Q532 264 ${624-d} 283L${611-d/2} 452Q532 472 ${453+d/2} 452z" fill="#f4f0df"/><path d="M${448+d} 331Q532 312 ${616-d} 331L${603-d/2} 443Q532 462 ${461+d/2} 443z" fill="#b48c55" opacity=".65"/><ellipse cx="532" cy="329" rx="${83-d}" ry="13" fill="#d2b98e"/><path d="M625 308q75-6 56 74q-10 35-60 21" fill="none" stroke="#d4c7ab" stroke-width="17"/>`;
 if(c.lid)svg+=`<ellipse cx="532" cy="279" rx="95" ry="18" fill="#405d4a"/><path d="M440 279v10q90 30 184 0v-10" fill="#6e866d"/>`;
 svg+=`<path d="M523 215V401" stroke="#788a79" stroke-width="6"/><path d="M523 215q-55-10-72 23" fill="none" stroke="#445748" stroke-width="2"/>${panel(362,145,175,'WATER / 水溫',temp.toFixed(1),'°C')}${tx(420,520,`${c.water} g · 隔熱 ${c.thickness} mm · ${c.lid?'蓋上':'開蓋'}`,12)}`;
 label='水溫探針';value=temp.toFixed(1)+' °C';hint=`第 ${minutes} 分鐘。把這一刻的探針數字記入筆記。`;
}
if(lab==='cooler'){
 const fraction=r.remaining/c.ice,size=68*Math.cbrt(fraction),d=8+c.thickness*.45;
 svg=clock(minutes)+`<path d="M379 303l60-36h250l-60 36z" fill="#e4e2d2"/><path d="M379 303h250v181H379z" fill="url(#coolerFinish)" stroke="#506f5a"/><path d="M629 303l60-36v181l-60 36z" fill="#5b7b68"/><rect x="${379+d}" y="${303+d}" width="${250-2*d}" height="${181-2*d}" fill="#e4e8da"/><rect x="${387+d}" y="420" width="${234-2*d}" height="${56-d}" fill="#8cbfbd" opacity=".5"/>`;
 for(const dx of [-42,37]){svg+=`<rect x="${504+dx-size/2}" y="${444-size}" width="${size}" height="${size}" rx="6" fill="url(#iceFinish)" fill-opacity=".8" stroke="#8eb9b4"/>`;}
 if(c.lid)svg+=`<path d="M372 300h261l65-35H432z" fill="#d5ded0" stroke="#80967d"/>`;else svg+=`<path d="M401 275l-20-47h268l26 47z" fill="#d5ded0" stroke="#80967d"/>`;
 svg+=panel(367,145,172,'ICE / 剩冰量',r.remaining.toFixed(1),'g')+panel(551,145,155,'冰水溫度',r.temperature.toFixed(1),'°C')+tx(393,518,`初始 ${c.ice} g · 環境 ${c.ambient} °C`,12);
 label='剩冰量感測器';value=r.remaining.toFixed(1)+' g';hint=`第 ${minutes} 分鐘；冰水 ${r.temperature.toFixed(1)} °C。感測器為示意，實物秤冰會干擾系統。`;
}
if(lab==='oven'){
 const diameter=45+c.diameter*8;
 svg=clock(minutes)+`<rect x="363" y="250" width="335" height="250" rx="12" fill="url(#metal)" stroke="#4e6255" stroke-width="2"/><rect x="380" y="278" width="301" height="198" rx="7" fill="#253e35"/><rect x="389" y="287" width="283" height="179" rx="5" fill="#c79158" opacity=".3"/><path d="M398 315h265M398 439h265" stroke="#d9ae78" stroke-width="3"/><path d="M400 409h260m-240-4v12m35-12v12m35-12v12m35-12v12m35-12v12m35-12v12" stroke="#aebbac"/><ellipse cx="530" cy="390" rx="${diameter/1.5}" ry="${diameter/3.2}" transform="rotate(-12 530 390)" fill="url(#potatoFinish)" stroke="#daa575" stroke-width="2"/><path d="M487 373l10 7m23-18l8 9m16 19l10 7m-25 4l-9 9" stroke="#815b3e" stroke-width="2"/><path d="M602 290v69l-73 30" fill="none" stroke="#cad1c0" stroke-width="3"/><circle cx="529" cy="389" r="4" fill="#e6c895"/><path d="M427 268h208" stroke="#344d3d" stroke-width="9" stroke-linecap="round"/>${panel(365,140,160,'CORE / 中心探針',r.core.toFixed(1),'°C')}${panel(541,140,160,'模型外層溫度',r.surface.toFixed(1),'°C')}${tx(397,523,`爐溫 ${c.oven} °C · 等效直徑 ${c.diameter} cm`,12)}`;
 label='地瓜中心探針';value=r.core.toFixed(1)+' °C';hint='這是升溫模擬。熟度、甜度與口感需另外定義指標並實測。';
}
if(lab==='lighting'){
 const sx=434,sy=466-c.height*2,px=434+c.offset*2;
 svg=`<path d="M350 470h380l-22 40H335z" fill="url(#wood)"/><rect x="463" y="457" width="175" height="32" rx="3" fill="url(#paperFinish)"/>`;
 if(running)svg+=`<path d="M${sx} ${sy}L346 470H714z" fill="#fff1ae" opacity=".35"/><ellipse cx="${sx}" cy="470" rx="${c.height*1.15}" ry="16" fill="#ffefac" opacity=".5"/>`;
 svg+=`<path d="M377 466V${sy+50}L${sx} ${sy}" fill="none" stroke="#546f59" stroke-width="8"/><path d="M${sx-30} ${sy+3}q30-55 60 0z" fill="url(#paint)"/><ellipse cx="${sx}" cy="${sy+4}" rx="30" ry="6" fill="#e5dcae"/><circle cx="${sx}" cy="${sy+8}" r="6" fill="${running?'#fff4b6':'#c9c6ac'}"/><path d="M347 467h60" stroke="#455f4b" stroke-width="8" stroke-linecap="round"/><ellipse cx="${px}" cy="469" rx="15" ry="5" fill="#365140"/><circle cx="${px}" cy="465" r="9" fill="#dae2ce"/>${line(sx,sy+13,px,456,'#b0a46b',1)}${panel(514,137,183,'ILLUMINANCE / 照度',running?r.illuminance.toFixed(0):'—','lx')}${tx(516,242,`背景 ${c.ambient} lx`,12)}${tx(377,523,`燈高 ${c.height} cm · 水平距離 ${c.offset} cm`,12)}`;
 label='桌面照度計';value=running?r.illuminance.toFixed(0)+' lx':'尚未開燈';hint='讀取白色探針位置的照度；桌面光暈不代表真實配光。';
}
if(lab==='circuit'){
 const lamps=c.bulbs,lit=running?Math.min(.8,r.power/1.8):0;
 svg=`<rect x="352" y="131" width="358" height="322" rx="10" fill="#e1e4d5" stroke="#a9b69c"/>`;
 if(c.wiring){svg+=`<path d="M385 238V175H674M385 278V305M385 330V362H674" fill="none" stroke="#65794e" stroke-width="3"/><rect x="364" y="238" width="42" height="40" rx="5" fill="#61775d"/>${tx(370,263,r.emf.toFixed(1)+'V',11,'#f1ead6')}<circle cx="385" cy="305" r="3" fill="#6b805f"/><circle cx="385" cy="330" r="3" fill="#6b805f"/>${line(385,305,running?385:402,330,'#b5915a',3)}<circle cx="385" cy="205" r="10" fill="#f2efdc" stroke="#6a815f"/>${tx(381,209,'A',10)}`;}
 else svg+=`<path d="M403 362H385V175H674V362H564M533 362H485" fill="none" stroke="#65794e" stroke-width="3"/><rect x="403" y="344" width="82" height="34" rx="6" fill="#61775d"/>${tx(411,365,c.cells+' × 1.5 V',11,'#f1ead6')}<circle cx="533" cy="362" r="4" fill="#6b805f"/><circle cx="564" cy="362" r="4" fill="#6b805f"/>${line(533,362,564,running?362:343,'#b5915a',4)}<circle cx="385" cy="265" r="10" fill="#f2efdc" stroke="#6a815f"/>${tx(381,269,'A',10)}`;
 for(let i=0;i<lamps;i++){const x=lamps===1?531:425+i*205/(lamps-1),y=c.wiring?265:175;if(c.wiring)svg+=line(x,175,x,362,'#967557',2);svg+=`<circle cx="${x}" cy="${y}" r="${20+lit*12}" fill="#f7d775" opacity="${lit}"/><circle cx="${x}" cy="${y}" r="18" fill="${running?'#f7e2a3':'#eee9d7'}" stroke="#6e7c63"/><path d="M${x-10} ${y+5}l7-11 7 11 7-11" fill="none" stroke="#987b3e" stroke-width="1.5"/>`;}
 svg+=`${tx(382,418,running?`${c.wiring?'並聯':'串聯'} · 每顆燈 ${r.bulbVoltage.toFixed(2)} V / ${r.power.toFixed(3)} W`:'開關未閉合 · 等待量測',11)}${panel(380,465,219,'AMMETER / 總電流',running?r.current.toFixed(3):'0.000','A')}`;
 label='串入總回路的安培計';value=running?r.current.toFixed(3)+' A':'開關未閉合';hint=`模型每顆燈 ${r.power.toFixed(3)} W；總電流與單顆燈的電流需分清楚。`;
}
if(lab==='parachute'){
 const at=M.parachuteAt(c,elapsed),fraction=running?at.fallen/c.height:0,y=155+fraction*264,R=35+c.diameter*.55;
 svg=`<rect x="355" y="121" width="350" height="407" rx="8" fill="url(#fieldFinish)"/><path d="M355 493h350v35H355z" fill="#8ea385"/>`;
 for(let i=0;i<=4;i++)svg+=line(369,229+i*66,381,229+i*66)+tx(384,233+i*66,(c.height*(1-i/4)).toFixed(1)+' m',10);
 svg+=`<path d="M${541-R} ${y}Q541 ${y-R} ${541+R} ${y}Q${541+R/2} ${y-16} 541 ${y}Q${541-R/2} ${y-16} ${541-R} ${y}" fill="url(#canopyFinish)" stroke="#9d7954" stroke-width="2"/><path d="M${541-R} ${y}l${R} 51l${R} -51M541 ${y}v51" fill="none" stroke="#536b59"/><rect x="526" y="${y+51}" width="30" height="23" rx="3" fill="#b99164" stroke="#806343"/>${tx(448,109,'傘已完全張開 · 垂直下降',11)}${tx(418,520,`${c.diameter} cm 傘面 · 總質量 ${c.mass} g`,11)}`;
 label='下降計時';value=(running?Math.min(elapsed,r.time):0).toFixed(3)+' s';hint=elapsed>=r.time?'已落地。保存下降時間，也思考實物張傘失敗怎麼記。':'傘從釋放時完全張開；等待落地後讀取計時器。';
}
if(lab==='glider'){
 const path=r.path,maxX=Math.max(3,...path.map(p=>p.x)),minX=Math.min(0,...path.map(p=>p.x)),maxY=Math.max(2,...path.map(p=>p.y)),scale=Math.min(337/(maxX-minX),265/maxY),px=x=>368+(x-minX)*scale,py=y=>457-y*scale;
 const t=running?Math.min(elapsed,r.time):0;let j=path.findIndex(p=>p.t>=t);if(j<0)j=path.length-1;const before=path[Math.max(0,j-1)],after=path[j],f=after.t===before.t?0:(t-before.t)/(after.t-before.t),point={x:before.x+(after.x-before.x)*f,y:before.y+(after.y-before.y)*f},angle=-Math.atan2(after.y-before.y,after.x-before.x)*180/Math.PI;
 svg=`<rect x="346" y="123" width="368" height="350" rx="8" fill="url(#fieldFinish)"/><path d="M346 457h368v16H346z" fill="#91a785"/>`;
 for(let i=0;i<=4;i++){const x=minX+(maxX-minX)*i/4;svg+=line(px(x),457,px(x),465)+tx(px(x)-7,482,x.toFixed(1),9);}
 svg+=tx(612,503,'水平距離 / m',10)+tx(363,150,'軌跡依公尺等比例繪製',10);
 const trace=path.filter(p=>p.t<=t);svg+=`<path d="${trace.map((p,i)=>(i?'L':'M')+px(p.x).toFixed(2)+' '+py(p.y).toFixed(2)).join(' ')}" fill="none" stroke="#5b7d68" stroke-width="1.5" stroke-dasharray="3 3"/><g transform="translate(${px(point.x)} ${py(point.y)}) rotate(${angle})"><path d="M-23-11L25 0L-23 14L-12 1z" fill="url(#paperFinish)" stroke="#748774"/><path d="M-12 1L25 0" stroke="#879987"/></g>${tx(364,526,`${c.area} cm² · ${c.mass} g · ${c.speed} m/s`,11)}`;
 label='落點與飛行計時';value=elapsed>=r.time?r.range.toFixed(1)+' m':Math.min(elapsed,r.time).toFixed(2)+' s';hint=elapsed>=r.time?'已落地，讀取水平落點。真實紙飛機仍需多次投擲驗證。':'顯示已經飛過的軌跡。此模型不解算折法和失速。';
}
if(lab==='grip'){
 const angle=c.angle,pivotY=480-26*Math.cos(angle*Math.PI/180)-286*Math.sin(angle*Math.PI/180),slide=running&&r.moving?Math.min(120,elapsed*65):0;
 svg=`<path d="M378 490H699V505H378z" fill="#c0b28f" opacity=".35"/><g transform="translate(394 ${pivotY}) rotate(${angle})"><path d="M-26 26H286v17H-26z" fill="#baa681" stroke="#8f7957"/><g transform="translate(${slide} 0)"><path d="M-11 16L-5-27Q21-43 41-17L75-1Q94-2 103 14L100 21H-11z" fill="url(#paint)" stroke="#36533e" stroke-width="2"/><path d="M-12 21H102v9H-12z" fill="#e9e3ce" stroke="#73866b"/><path d="M32-13l15 9m-7-13l16 9m-3-9l15 10" stroke="#dce0cc" stroke-width="2"/><rect x="4" y="-48" width="29" height="22" rx="4" fill="url(#metal)"/></g></g><path d="M365 490h320" stroke="#6e8264" stroke-dasharray="3 4"/>${tx(399,525,`測試角度 ${angle}° · 總質量 ${c.mass} g`,12)}${panel(535,132,165,'此設定下的觀察',running?(r.moving?'滑動':'不滑動'):'等待放鞋','')}`;
 label='觀察鞋底是否滑動';value=running?(r.moving?'滑動':'不滑動'):'待測';hint='保存每次試驗的角度與結果，再用相鄰試次夾出臨界範圍。';
}
return {svg,value,label,hint};
}
root.LifeScenes={draw};
})(window);
