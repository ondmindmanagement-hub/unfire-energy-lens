# Unfire Energy Lens

**Independent interactive research prototype for the Global Energy Hackathon 2026 — Digital Solutions / Apps & AI.**

Unfire Energy Lens demonstrates an energy-affordability planning workflow for an illustrative household and a community-service clinic. It compares baseline costs with a hypothetical peak-to-off-peak rescheduling scenario and includes a fail-closed, *local* policy classifier concept related to BOLT.

## Run
Open `index.html` through a static HTTP server (ES modules require HTTP), or visit GitHub Pages once enabled:
```bash
python3 -m http.server 8080
# open http://localhost:8080
```
Node.js 20+ tests: `node test.mjs`.

## What actually works
- Adjustable synthetic monthly usage, peak demand, peak/off-peak tariff examples, shift percentage and hypothetical outage hours.
- Instant deterministic cost calculations and explanations using no live API.
- Household / community-clinic scenario presets; clinic explicitly excludes shifting safety-critical loads.
- Local policy decisions: read-only inspect and draft = allow; provider-switch request = human approval required; automatic payment = deny.
- Responsive English-language accessible interface; no cookies, telemetry, sign-in, bills, personal data transmission or cloud cost.

## Limits — important
- **Synthetic inputs only**. Rates, costs and savings are illustrative, not current market data, official utility tariffs, financial forecasts or verified customer savings. A hypothetical cost reduction is not evidence of an achievable saving.
- No integrations with any utility, smart meter, energy-price source, cloud AI service or Unfire's standalone **Power Energy Prices** app.
- The policy demo is independently implemented; it **does not integrate with, execute, or claim to be the proprietary BOLT macOS application**. It never obtains a real approval, performs a provider switch, spends money or sends a message.
- No generative AI model is called in this prototype; such integration is **proposed future development**, not a feature.
- Not certified advice for medical, grid-management, utility billing or energy safety.

## Future 6–18 month roadmap (proposal, not implemented)
1. Connect licensed/official, geo-scoped tariff sources where legally permitted and explicitly label data timestamp, geography and fees.
2. Add a privacy-preserving, consent-based household affordability view, including uncertainty and accessibility support.
3. Add an optional human-approved action gateway using the BOLT architecture, with evidence logs and cancellation/rollback where technically supported.
4. Pilot with community-energy organizations using synthetic data first, then opt-in field trials subject to participant safety and legal review.

## The calculation
`baseline = peak_kWh × peak_rate + offpeak_kWh × offpeak_rate`. The scenario moves an editable share of peak kWh to the off-peak rate, conserving kWh. The formula excludes taxes, variable rate periods, billing fees, equipment losses, battery capital costs and demand charges.

## Licensing
MIT license for this isolated clean-room prototype only. No proprietary Unfire applications are licensed or contributed here.

© 2026 Unfire. https://unfire.technology
