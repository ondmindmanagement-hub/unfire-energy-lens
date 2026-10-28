# Unfire Energy Lens — Global Energy Hackathon 2026
### An explainable affordability planner with explicit human approval boundaries

**Track:** Digital Solutions, Apps & AI/ML Tools  
**Focus:** Energy affordability, household and community-service resilience  
**Participation:** Remote, written/asynchronous and prerecorded presentations only; no calls, live pitches, on-site attendance, fees or deposits  
**Status:** Functional, standalone static prototype, **not** integrated with commercial utilities or other Unfire applications

## The challenge
People who face high energy bills or uncertain electricity supply need understandable options, not opaque promises of AI-driven savings. Many energy tools show a total cost without explaining the tariff assumptions, the constraints on shifting demand, or the difference between advice and a consequential action. In critical services such as community clinics, misguided energy recommendations could create safety risks.

## The solution
Unfire Energy Lens is a browser-based **illustrative** calculator that lets users:
1. Set monthly consumption, peak-hour share, peak/off-peak tariff assumptions, demand-shift assumptions and outage-hours context.
2. Immediately compare baseline cost with a hypothetical shift scenario and inspect the exact assumptions.
3. Switch between household and clinic examples. The clinic workflow explicitly avoids recommending changes to critical medical loads.
4. Test a deterministic action policy: inspection and local drafts may proceed; a provider switch requires human authorization; automatic payment attempts are blocked.

This is a **real interactive demo** of calculation, explanations and policy classification. It is not a live energy-data product, a production AI agent, a cloud integration, or a validated savings program.

## Demonstrated result — example, not a real-world performance claim
For **synthetic** household inputs of 420 kWh/month, 60% peak share, $0.28/kWh peak, $0.14/kWh off-peak and a hypothetical 20% shift of peak-hour demand, the model displays a **$94.08 baseline**, a **$87.02 scenario**, and a **$7.06 modeled difference** (~7.5%). This arithmetic is reproducible. It does not prove any household can actually achieve that shift or that these are real local tariffs.

## Why human oversight
The policy boundary is deterministic and separate from any future AI recommendations. For a hypothetical recommendation to change utility providers, the demonstration returns **HUMAN APPROVAL REQUIRED**. For automatic payment enablement, it returns **DENY**. No email, transaction, enrollment, API request or provider action is made.

## How it was built
- HTML/CSS + native browser JavaScript ES modules; no framework, database, tracking or paid API.
- Pure calculation and policy functions with **10 local test assertions** plus browser checks on desktop and 375px mobile width.
- Clean-room prototype using the design principle of Unfire's BOLT initiative. **No code or runtime integration with the BOLT macOS application is claimed.**
- Future potential connection to the separately developed **Power Energy Prices** app is **proposed**, not implemented.

## Impact and adoption hypothesis
Potential users are households, community-energy advisors and small community facilities that must evaluate affordability with clear assumptions. The first pilot should prioritize user comprehension, not claimed savings. Suggested evaluation measures are scenario comprehension, ability to identify unverified tariffs, false-confidence rate, decisions blocked correctly and accessibility feedback. None is yet measured on real users.

## Implementation path: 6–18 months (proposed)
1. **0–3 months:** validate source data rights, accessibility, tariff geography and privacy; usability studies with synthetic scenarios.
2. **3–6 months:** integrate one permitted, timestamped local tariff dataset; add fees and uncertainty; validate calculations independently.
3. **6–12 months:** opt-in field pilot with an energy-advice nonprofit; restrict or exclude all medical-critical loads.
4. **12–18 months:** evaluate a separately consented BOLT action-approval connector where legally and technically feasible; seek utility partnerships without inventing existing affiliations.

## 85-second demo storyboard (prerecorded, English captions)
- **0–10 s — Problem:** energy costs are hard to compare; unsupervised changes are risky.
- **10–28 s — Working input controls:** show household consumption, tariffs, peak share and demand-shift sliders.
- **28–42 s — Explainable results:** display synthetic $94.08 vs $87.02 and the limitations notice.
- **42–54 s — Community clinic:** change the preset and highlight safe-load restrictions.
- **54–70 s — Human control:** select provider switch → HUMAN APPROVAL REQUIRED; automatic payment → DENY.
- **70–85 s — Scope:** no live data, no untested integration, no financial guarantee. Link to source and roadmap.

## Testing and access
**Demo:** https://ondmindmanagement-hub.github.io/unfire-energy-lens/  
**Code:** https://github.com/ondmindmanagement-hub/unfire-energy-lens  
**Tests:** `node test.mjs` — no third-party packages  
**Contact:** hello@unfire.technology (written communication only)

*Prepared for asynchronous evaluation. Submission acceptance, eligibility for judging and any prize remain unconfirmed until the organizer verifies them. This document does not agree to live judging, attendance or calls.*
