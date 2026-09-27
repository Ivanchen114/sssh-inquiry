/* Deterministic ideal pendulum model. No random measurement noise. */
(function (root) {
  'use strict';
  const G = 9.81;
  function step(s, length, dt) {
    const f = (a, w) => [w, -G / length * Math.sin(a)];
    const a = f(s.angle, s.omega);
    const b = f(s.angle + a[0]*dt/2, s.omega + a[1]*dt/2);
    const c = f(s.angle + b[0]*dt/2, s.omega + b[1]*dt/2);
    const d = f(s.angle + c[0]*dt, s.omega + c[1]*dt);
    return {angle:s.angle + dt/6*(a[0]+2*b[0]+2*c[0]+d[0]), omega:s.omega + dt/6*(a[1]+2*b[1]+2*c[1]+d[1])};
  }
  function fit(points) {
    if(points.length < 3) return null;
    const mx=points.reduce((s,p)=>s+p.x,0)/points.length;
    const my=points.reduce((s,p)=>s+p.y,0)/points.length;
    const xx=points.reduce((s,p)=>s+(p.x-mx)**2,0);
    if(xx<1e-12) return null;
    const slope=points.reduce((s,p)=>s+(p.x-mx)*(p.y-my),0)/xx;
    const intercept=my-slope*mx;
    const residuals=points.map(p=>p.y-slope*p.x-intercept);
    const sse=residuals.reduce((s,r)=>s+r*r,0);
    const sst=points.reduce((s,p)=>s+(p.y-my)**2,0);
    return {slope,intercept,r2:sst<1e-12?null:1-sse/sst,residuals};
  }
  function csvCell(v) {
    let s=String(v??'');
    if(typeof v==='string'&&/^[=+@\-\t\r]/.test(s)) s="'"+s;
    return '"'+s.replace(/"/g,'""')+'"';
  }
  const api={G,step,fit,csvCell};
  if(typeof module!=='undefined'&&module.exports) module.exports=api;
  else root.PendulumModel=api;
})(typeof window!=='undefined'?window:globalThis);
