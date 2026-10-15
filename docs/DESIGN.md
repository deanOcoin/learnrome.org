# Design notes

Written before any CSS and kept as the reference for the visual language.

## Concept: the surveyor's instrument

The world as a Roman administrator saw it — a *forma* (survey map) rendered as a
modern instrument panel. Not parchment, not marble, not Trajan capitals. The map
is a dark-field instrument: an indigo-black sea, land in graded bronzes where
**saturation literally encodes the firmness of Roman control**, movements drawn
as thin surveyor's lines. The UI chrome recedes; the map and the text are the
only bright things.

## Palette (single source of truth: CSS variables in `src/index.css`)

| Token | Hex | Role |
|---|---|---|
| `--sea` | `#0d1321` | deep indigo-slate sea; the app background |
| `--land` | `#232833` | unshown land — cool basalt, clearly land vs sea, clearly "not in the story" |
| `--ink` | `#e8e3d8` | primary text — warm off-white, not pure white |
| `--ink-dim` | `#9a94a6` | secondary text |
| `--panel` | `#151a28` | panel / chrome surfaces, one step above sea |
| `--line` | `#2e3547` | hairlines, borders, the timeline axis |

### Control ramp (warm = Roman; saturation = firmness)

| Status | Hex | Reading |
|---|---|---|
| `core` | `#d9a441` | full bronze-gold, most saturated |
| `provincial` | `#a97e3e` | bronze, one step down |
| `client` | `#77613d` | dim bronze — aligned, not administered |
| `contested` | `#544a3a` + dashed stroke | barely warm; the dashed edge says "in doubt" |
| `transient` | `provincial` + dotted overlay | held, historians know it won't last |
| `breakaway` | `provincial` hue in diagonal hatch | Roman fabric, not obeying Rome |
| `lost` | `--land` fill + `#8a6d3b` ghost outline | the ghost of the ramp — *former* Roman |
| `unshown` | `--land` | outside the story |

### Rivals (cool hues — warm vs cool survives deuteranopia)

| Power | Hex |
|---|---|
| Carthage | `#7c4a6e` (plum) |
| Hellenistic east (Macedon/Seleucid/Ptolemaic) | `#3e6b7a` (steel teal) |
| Parthia / Sassanids | `#4a5a8c` (cold indigo-blue) |
| Huns / steppe | `#5f6e52` (cold olive) |
| Germanic / successor kingdoms | `#56647a` (slate blue) |

CVD strategy: Roman statuses are one warm hue varied by saturation/lightness
(ordinal, survives all CVD types); rivals are cool hues; breakaway/transient are
pattern fills, not colors. No red/green pair anywhere.

## Typefaces

- **Fraunces** (variable) — display. Titles, era names, the big year. Characterful
  without being inscriptional pastiche. Used sparingly.
- **Literata** (variable) — body. Designed for long-form screen reading; the app
  asks people to read 60,000 words.
- **Inter** (variable, `font-feature-settings: "tnum"`) — utility. Dates, the
  timeline axis, chips, controls. True tabular numerals; BCE/CE set in small
  letter-spaced caps at reduced size, never shouted.

## Layout

Full-viewport map. Slim top bar: wordmark, date input, tour/misconception/glance
controls. Timeline docked full-width at the bottom with the era strip and
density ruler. Event panel: right side on desktop (map always ≥55% visible),
bottom sheet on mobile. Legend: compact, permanently visible, bottom-left over
the map. Dev-only audit view behind `?dev=audit`.

## Second accent (added in the chrome pass)

| Token | Hex | Role |
|---|---|---|
| `--color-patina` | `#6fae9f` | oxidized bronze. **One meaning only: a correction / the verified reading.** Used in the errata sheet and nowhere else. |
| `--color-panel-3` | `#222a3d` | raised surfaces — the button bank, inset bars |
| `--color-line-bright` | `#414c66` | active/hover hairlines |

Patina is kin to the gold ramp but separated from every map status by both hue
and luminance, so no map color acquires a second meaning. Claim-vs-correction is
carried by **texture and luminance** (hatched dim rule vs solid patina rule),
never by hue alone — there is still no red/green pair anywhere in the app.
Measured contrast on `--color-panel`: patina 6.80:1, accent 7.71:1, ink 12.5:1.

## The chrome motif: survey registration marks

The map committed to the instrument concept; the chrome did not. It does now,
through one repeated motif applied to every overlay and card:

- **Diagonal corner ticks** (`.plate`) on every sheet, card and framed map —
  top-left and bottom-right, like registration marks on a survey plate. They
  brighten and lengthen on hover, which is the only motion in the chrome.
- **Ticked rules** (`.rule-ticks`) separating header from content.
- **The button bank** (`.bank`) — Tours / Had Wrong / At a Glance as one milled
  surface with hairline dividers and drawn glyphs, rather than three identical
  pills. A gold rule rises from the baseline on hover.
- **Graticule backdrop** behind every overlay, at ~5% opacity.
- **Tabular figures** for anything indexed: catalogue numbers, counts, spans.

## Signature element

**The map transition itself.** Stepping between events animates *only* the
regions whose status changed — a ~700ms fill crossfade with a brief 1.5px rim
light that fades. Everything else is pixel-stable. All other motion in the app
is ≤200ms utility easing; the budget is spent on that one moment.

## Why not parchment

The reflex answer for a Roman history app is parchment, terracotta and Trajan
capitals. Every choice here is the inverse, and argued from function: a dark
field because the data (control) is the bright thing; saturation encoding
control because it reads without the legend; pattern fills because breakaway
and transient are claims about the future, not colours; cool versus warm
because of colour vision deficiency. The instrument framing fits the app's
thesis, Rome as administered space.
