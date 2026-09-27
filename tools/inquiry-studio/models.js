(function(root){
'use strict';
const g=9.81;
// A nonlinear elastic element in series with a Kelvin element.
// Illustrative parameters, not fitted to a real rubber band.
function rubberElastic(force, count=1){let lo=0,hi=1;for(let i=0;i<60;i++){const x=(lo+hi)/2;if(count*(40*x+1200*x**3)<force)lo=x;else hi=x;}return (lo+hi)/2;}
function rubberStep(q,force,count,dt){const target=force/(count*250);return target+(q-target)*Math.exp(-dt/5);}
function rubberLength(q,mass,count){return 12+100*(rubberElastic(mass/1000*g,count)+q);}
function stringFrequency(lengthCm,massGrams,muGramsPerMeter){return Math.sqrt((massGrams/1000*g)/(muGramsPerMeter/1000))/(2*lengthCm/100);}
function spectrum(frequency,n=4096,sampleRate=8192){
 const re=new Float64Array(n),im=new Float64Array(n);
 for(let i=0;i<n;i++){const phase=2*Math.PI*frequency*i/sampleRate;re[i]=(Math.sin(phase)+.3*Math.sin(2*phase)+.12*Math.sin(3*phase))*(.5-.5*Math.cos(2*Math.PI*i/(n-1)));}
 for(let i=1,j=0;i<n;i++){let bit=n>>1;for(;j&bit;bit>>=1)j^=bit;j^=bit;if(i<j){const t=re[i];re[i]=re[j];re[j]=t;}}
 for(let len=2;len<=n;len<<=1){const a=-2*Math.PI/len;for(let i=0;i<n;i+=len){for(let j=0;j<len/2;j++){const c=Math.cos(a*j),s=Math.sin(a*j),k=i+j,h=k+len/2;const tr=re[h]*c-im[h]*s,ti=re[h]*s+im[h]*c;re[h]=re[k]-tr;im[h]=im[k]-ti;re[k]+=tr;im[k]+=ti;}}}
 const out=Array.from({length:n/2},(_,i)=>({frequency:i*sampleRate/n,amplitude:Math.hypot(re[i],im[i])*4/n}));return out;
}
function roller(c){const body=.04,r=.02,m=c.weight/1000,R=c.radius/100;const M=body+m,I=.5*body*r*r+m*R*R;const a=g*Math.sin(c.slope*Math.PI/180)/(1+I/(M*r*r));const distance=c.distance/100;return {mass:M,inertia:I,acceleration:a,time:Math.sqrt(2*distance/a),speed:Math.sqrt(2*a*distance),axleRadius:r};}
function polygonBelow(poly){const out=[];for(let i=0;i<poly.length;i++){const a=poly[i],b=poly[(i+1)%poly.length],inside=a.y<=0,next=b.y<=0;if(inside)out.push(a);if(inside!==next){const t=-a.y/(b.y-a.y);out.push({x:a.x+t*(b.x-a.x),y:0});}}return out;}
function centroid(poly){let A=0,X=0,Y=0;for(let i=0;i<poly.length;i++){const p=poly[i],q=poly[(i+1)%poly.length],cross=p.x*q.y-q.x*p.y;A+=cross;X+=(p.x+q.x)*cross;Y+=(p.y+q.y)*cross;}if(Math.abs(A)<1e-12)return {area:0,x:0,y:0};return {area:Math.abs(A/2),x:X/(3*A),y:Y/(3*A)};}
function boat(c){
 const H=c.height,L=30-2*H,B=24-2*H,mass=8+c.load,rho=c.density,volume=mass/rho,capacity=rho*L*B*H;
 const base={length:L,width:B,height:H,mass,capacity:capacity-8,draft:volume/(L*B),heel:0,freeboard:H-volume/(L*B)};
 if(mass>=capacity)return {...base,status:'進水',reason:'所需排水體積已達船緣。'};
 const cgx=c.load/mass*(c.offset/100)*(B/2-.5),cgy=(8*H/2+c.load*.5)/mass;
 function at(phi){const cs=Math.cos(phi),sn=Math.sin(phi);const corners=[[-B/2,0],[B/2,0],[B/2,H],[-B/2,H]].map(([x,y])=>({x:x*cs-y*sn,y:x*sn+y*cs}));let low=-100,high=100;for(let i=0;i<48;i++){const z=(low+high)/2;const center=centroid(polygonBelow(corners.map(p=>({x:p.x,y:p.y+z}))));if(center.area*L>volume)low=z;else high=z;}const z=(low+high)/2,center=centroid(polygonBelow(corners.map(p=>({x:p.x,y:p.y+z}))));return {error:center.x-(cgx*cs-cgy*sn),freeboard:Math.min(corners[2].y,corners[3].y)+z,z};}
 let previous=at(-Math.PI/4),lastPhi=-Math.PI/4,solutions=[];
 for(let i=1;i<=180;i++){const phi=-Math.PI/4+i*Math.PI/360,current=at(phi);if(previous.error>=0&&current.error<=0){let low=lastPhi,high=phi;for(let j=0;j<35;j++){const middle=(low+high)/2;if(at(middle).error>0)low=middle;else high=middle;}const angle=(low+high)/2;solutions.push({angle,...at(angle)});}previous=current;lastPhi=phi;}
 if(!solutions.length)return {...base,status:'超出範圍',reason:'±45° 內找不到穩定的靜力平衡；本模型不預測翻覆過程。'};
 const best=solutions.sort((a,b)=>Math.abs(a.angle)-Math.abs(b.angle))[0];
 return {...base,draft:-best.z,heel:best.angle*180/Math.PI,freeboard:best.freeboard,status:best.freeboard<=0?'進水':'漂浮',reason:best.freeboard<=0?'傾斜後有船緣低於水面。':'在此模型內達到靜力平衡。'};
}
const api={g,rubberElastic,rubberStep,rubberLength,stringFrequency,spectrum,roller,boat,centroid,polygonBelow};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.StudioModels=api;
})(typeof window!=='undefined'?window:globalThis);
