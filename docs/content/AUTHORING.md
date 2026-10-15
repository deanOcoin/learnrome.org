# Writing events

Each era lives in its own module under `src/data/events/` and exports one
array of `RomeEvent` objects (types in `src/types.ts`). The manifests in this
folder list every event id, year, weight and control delta per era. Those are
fixed: the validators in `src/data/events/validate.test.ts` check resolved
territorial state at a dozen checkpoint years against them, so if you change a
control delta you change the manifest and the validator in the same commit.

After editing an era file run `npm run build:corpus` (dev and build do it
automatically) and `npm test`.

## Fields

- `year` negative = BCE. Spans use `yearEnd`. `dateNote` for "c.", traditional
  or disputed dates, or a specific day.
- `control` is a delta, not a full state. `—` in the manifest means `control: {}`.
  Thematic events also set `nonTerritorial: true` and a `spatialFocus`.
- Body length by weight: w3 400–700 words, w2 250–400, w1 120–250. Three to
  eight paragraphs separated by blank lines. The first paragraph has to stand
  on its own, because it is what the "brief" reading depth shows.
- `whyItMatters` is one or two paragraphs of argument about causation, not a
  summary. It shows at both reading depths.
- `headline` is one concrete sentence.
- `sources`: one to three per event, mixing ancient and modern. Add a `note`
  when a source is hostile, late or contested; it is worth including a source
  whose note undercuts the event's own framing now and then. Paraphrase modern
  scholarship, never quote it at length.
- `reliability`: `legendary` for the regal tradition, `contested` where the
  sources are hostile or partly invented (the Historia Augusta), `reconstructed`
  where modern work fills gaps.
- `connects`: two to four earlier event ids this one causally depends on. Ids
  are listed in `id-index.md`. No forward references.
- `tags`: one to three from the `Tag` union. Thematic events use the area tags
  (social, slavery, daily-life, economic, legal, religious, culture, spectacle,
  infrastructure).
- `markers`: zero to two per event, for battles, sieges, sacks and foundings
  with a known site. `at: [lon, lat]`, WGS84, two decimals.

## Voice

Direct, specific, causal. Assume an intelligent reader and do not pad. Prefer
the concrete detail that makes a thing stick. Where the record is legend or the
source is hostile, say so in the text itself rather than hedging every claim.

Misconception entries: `claim` is what people actually say, phrased the way
they would say it; `correction` is one to three confident, specific sentences.
