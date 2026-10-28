import {calculate,govern} from './app.js';
const $=id=>document.getElementById(id);
const presets={house:{usage:420,peakShare:60,peakRate:.28,offpeakRate:.14,shift:20,outage:6},clinic:{usage:3800,peakShare:55,peakRate:.29,offpeakRate:.16,shift:8,outage:24}};
let mode='house';
const fmt=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n);
function refresh(){
 try{
 const ids=['usage','peakShare','peakRate','offpeakRate','shift','outage'];
 const vals=Object.fromEntries(ids.map(k=>[k,Number($(k).value)]));const r=calculate(vals);
 $('usageOut').textContent=vals.usage.toLocaleString('en-US')+' kWh';
 $('peakOut').textContent=vals.peakShare+'%';$('shiftOut').textContent=vals.shift+'%';$('outageOut').textContent=vals.outage+' h';
 $('baseline').textContent=fmt(r.baseline);$('proposed').textContent=fmt(r.proposed);$('saving').textContent=(r.savings<0?'−':'')+fmt(Math.abs(r.savings));$('pct').textContent=Math.abs(r.savingsPct).toFixed(1)+'% '+(r.savingsPct<0?'higher':'lower');
 const barmax=Math.max(r.baseline,r.proposed,0.01);$('baseBar').style.width=(r.baseline/barmax*100).toFixed(1)+'%';$('scenarioBar').style.width=(r.proposed/barmax*100).toFixed(1)+'%';
 $('baseBarLabel').textContent=(r.baseline/barmax*100).toFixed(1)+'%';$('scenarioBarLabel').textContent=(r.proposed/barmax*100).toFixed(1)+'%';
 const caution=mode==='clinic'?'Clinic: only non-critical, deferrable loads should ever be considered. No medical device loads are included in an approved shifting plan.':'Household: the scenario assumes a person can voluntarily reschedule eligible loads.';
 $('explanation').textContent=r.movedKwh.toFixed(1)+' kWh are hypothetically moved out of peak hours, with total usage unchanged. '+(r.savings<0?'The scenario increases costs under these selected rates. ':'The resulting cost difference is not a guaranteed saving. ')+caution;
 $('resilience').textContent=r.outageHours+' outage hours/month are an illustrative planning input. Price shifting does not restore supply or guarantee backup power.';
 $('draft').hidden=true;
 }catch(e){$('explanation').textContent='Invalid inputs. '+e.message}
}
function setMode(m){mode=m;Object.entries(presets[m]).forEach(([k,v])=>{$(k).value=v});['house','clinic'].forEach(k=>{$(k).classList.toggle('active',k===m);$(k).setAttribute('aria-pressed',String(k===m))});refresh();}
for(const id of ['usage','peakShare','peakRate','offpeakRate','shift','outage'])$(id).addEventListener('input',refresh);
for(const id of ['house','clinic'])$(id).addEventListener('click',()=>setMode(id));
$('reset').addEventListener('click',()=>setMode(mode));
document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',()=>{
 const action=el.dataset.action;const result=govern(action);
 $('decision').textContent=result.decision;$('decision').dataset.state=result.decision;
 $('decisionReason').textContent=result.reason;$('draft').hidden=action!=='draft';
 if(action==='draft'){$('draft').textContent='LOCAL DRAFT ONLY — For review: The editable example suggests a monthly scenario bill of '+$('proposed').textContent+' versus '+$('baseline').textContent+'. Verify actual local tariffs, household constraints and safe shifting before acting. No message has been sent.'}
}));
setMode('house');
