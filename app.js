export function calculate({usage,peakShare,peakRate,offpeakRate,shift,outage}){
 const values=[usage,peakShare,peakRate,offpeakRate,shift,outage].map(Number);
 if(values.some(v=>!Number.isFinite(v)||v<0))throw Error('Inputs must be nonnegative and finite.');
 if(usage>100000||peakShare>100||shift>100||outage>744||peakRate>10||offpeakRate>10)throw Error('Input exceeds the supported illustrative range.');
 const peak=usage*peakShare/100;
 const offpeak=usage-peak;
 const moved=peak*shift/100;
 const baseline=peak*peakRate+offpeak*offpeakRate;
 const proposed=(peak-moved)*peakRate+(offpeak+moved)*offpeakRate;
 return {baseline,proposed,savings:baseline-proposed,monthlyKwh:usage,movedKwh:moved,outageHours:outage, savingsPct:baseline?100*(baseline-proposed)/baseline:0};
}
export function govern(action){
 switch(action){
  case 'inspect': return {decision:'ALLOW',reason:'Read-only scenario review. No account access or side effects.'};
  case 'draft': return {decision:'ALLOW',reason:'A local, editable recommendation is permitted. Nothing is sent.'};
  case 'enroll': return {decision:'HUMAN APPROVAL REQUIRED',reason:'Any utility enrollment or contractual change requires verified human consent and a separate provider process.'};
  case 'autopay': return {decision:'DENY',reason:'Automatic payment authorization is outside this demo policy.'};
  default: return {decision:'DENY',reason:'Unknown action is outside the allowlist.'};
 }
}
