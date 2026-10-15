# Attribution

## Geographic data

- **Natural Earth** (naturalearthdata.com) — 1:50m land polygons, via the
  `world-atlas` npm package (TopoJSON build of Natural Earth). Natural Earth is
  in the **public domain**: free for any use, no permission required, credit
  appreciated. Used as the coastline base; clipped, simplified (~3 km
  tolerance), and cut into ~70 historically named regions authored for this
  project (`scripts/seed/*.json` + `scripts/build-regions.mjs`).
- The historical region boundaries themselves are original approximations
  authored for this app at teaching-map fidelity. They are not derived from any
  share-alike dataset. Consulted for general reference only (no data copied):
  the Digital Atlas of the Roman Empire and Pleiades gazetteer.

## Typefaces (bundled via Fontsource, all under the SIL Open Font License 1.1)

- **Fraunces** — display
- **Literata** — body text
- **Inter** — UI and tabular figures

## Content

Event texts are original prose written for this project. Ancient sources are
cited by author and work; modern scholarship is cited, never quoted at length.
