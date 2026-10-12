# Image slots

Images placed at these paths appear automatically after the next build/restart.
Until a file exists, the site shows a technical line drawing in its place.

| Path | Used for | Recommended |
|---|---|---|
| `logo.png` | Approved company logo (header, footer, OG image) — **in place** | If replaced, update width/height in `lib/site.js` → `logo` |
| `logo-mark.png` | Droplet symbol only — **in place** | — |
| `founder.jpg` | Founder photograph (home + About) — **in place** | Portrait 4:5, at least 800×1000 px |
| `hero.jpg` | Homepage hero | Landscape/portrait, ≥ 1600 px wide |
| `intro.jpg` | Homepage introduction | 4:3, ≥ 1200 px wide |
| `about.jpg` | About page | 4:3, ≥ 1200 px wide |
| `clients/*.png` | "Our Clients" logo strip (home + Projects) — see `clients/README.md` | Transparent PNG/SVG, ≥ 400 px wide |
| `services/<slug>.jpg` | Each service page, e.g. `services/hvac.jpg` | 4:3, ≥ 1200 px wide |

Service slugs: hvac, fire-fighting, fire-alarm-detection, mep-coordination,
civil-works, interiors-retail-fitouts, maintenance-amc,
fire-safety-consultation, project-execution.

Use genuine company/site photography or properly licensed images only.
Never use a stock photo to represent the founder.
