const test = require('node:test');
const assert = require('node:assert/strict');
const M = require('../tools/pendulum-workbench/model.js');
function period(length, degrees) {
  let state = {angle:degrees*Math.PI/180, omega:0}, time=0, crossings=[];
  while (time<20 && crossings.length<2) {
    const previous=state.angle;
    state=M.step(state,length,.001);
    time+=.001;
    if (previous>0 && state.angle<=0) crossings.push(time);
  }
  return crossings[1]-crossings[0];
}
test('small-angle period and length scaling agree with independent theory',()=>{
  assert.ok(Math.abs(period(.6,5)-2*Math.PI*Math.sqrt(.6/9.81))<.002);
  assert.ok(Math.abs(period(1.2,5)/period(.6,5)-Math.sqrt(2))<.002);
});
test('finite amplitude increases period, and energy is conserved',()=>{
  assert.ok(period(.6,45)>period(.6,5)*1.035);
  let s={angle:Math.PI/4,omega:0};
  const energy=x=>.5*.6**2*x.omega**2+M.G*.6*(1-Math.cos(x.angle));
  const initial=energy(s);
  for(let i=0;i<240*60;i++)s=M.step(s,.6,1/240);
  assert.ok(Math.abs(energy(s)-initial)/initial<1e-7);
});
test('regression handles known line, constant x, and constant y',()=>{
  const fit=M.fit([{x:1,y:3},{x:2,y:5},{x:3,y:7}]);
  assert.equal(fit.slope,2);assert.equal(fit.intercept,1);assert.equal(fit.r2,1);
  assert.equal(M.fit([{x:1,y:2},{x:1,y:3},{x:1,y:4}]),null);
  assert.equal(M.fit([{x:1,y:2},{x:2,y:2},{x:3,y:2}]).r2,null);
});
test('CSV protects text formulas, preserves numeric angles and quotes',()=>{
  assert.equal(M.csvCell('=1+1'),'"\'=1+1"');
  assert.equal(M.csvCell(-45),'"-45"');
  assert.equal(M.csvCell('a,"b"'),'"a,""b"""');
});
