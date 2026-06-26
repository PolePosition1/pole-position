# Components & Patterns — "Champion" system

Specs are token-based so any build (app, landing page, Claude Design artifact,
social asset) comes out identical. All radii/space/color refer to `tokens.css`.

## Foundations
- **Grid:** 4px base unit. Spacing only from the scale (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64).
- **Radius:** cards `lg` (16px) · buttons & inputs `md` (10px) · chips/pills `pill` · sheets `xl` (24px).
- **Elevation:** cards `elev-1`; modals/sheets `elev-2`; active CTA & winner state add `glow-gold`.
- **Default surface stack:** Lights Out (page) → Carbon (card) → Pit Wall (input/inset).

## Buttons
| Variant | Fill | Label | Hover | Use |
|---|---|---|---|---|
| Primary | `gold-500` | **black** `#0B0D12`, Inter 700, ≥16px | `gold-700` + `glow-gold` | Lock In, Make Picks |
| Gold sheen | `grad-gold` | black 700 | brightness 108% | Hero / single key CTA |
| Secondary | transparent, `1px line` border | `text-2` | bg `pit-wall` | Secondary actions |
| Ghost | none | `gold-200` | underline | Tertiary / inline |
| Danger | `red-500` | white | `red-700` | Destructive / lock-in confirm |

Buttons are verbs. Min height 44px (touch). Pressed = darker shade, no scale jump.

## Pick Card
The core object. A driver/outcome the user can select.
- Surface `carbon`, radius `lg`, border `1px line`.
- **Default:** border `line`, label `text-2`.
- **Selected:** border `gold-500` (2px), subtle `gold-900` fill, `glow-gold`.
- **Locked:** border `red-500`, lock icon + "LOCKED" mono label; no longer tappable.
- **Model's pick badge:** small `red-500` chip "MODEL" in the corner when showing the model's choice.
- Position marker (P1/P2/P3) in mono, top-left, `label` style — P1 tinted `gold-500`.

## Lock-In State
When picks lock at quali close:
- The pick set gets a `red-500` top hairline + "GRID IS SET" mono banner.
- Optional: a checkered-flag edge band sweeps across, and the five-lights row goes out — the lights-out moment.

## Leaderboard Row
- Mono tabular everywhere. Rank (mono 700) · name (Inter 600) · points (mono 700, right-aligned).
- **You:** row bg `gold-900`, left border `gold-500`.
- **Top 3:** rank tinted — P1 `gold-500`, P2 `text`, P3 `gold-700`.
- Climbing indicator: small `green-400` up / `red-400` down with delta.

## Score / Result Chip
- Mono, pill radius. `+5` exact-slot in `green-500`; `+2` podium-hit in `green-400`; perfect-podium bonus in `gold-500` ("PERFECT PODIUM +5"); miss in `text-faint`.

## Countdown Timer ("Picks lock in")
- `data-xl` mono tabular. Under 1hr → digits `gold-500`. Under 5min → `red-500` + gentle pulse.

## "Called It" Stamp (the win moment)
- Saira 800 caps "CALLED IT", **gold sheen** fill, slight rotation, on a flash of `glow-gold`, optionally over a checkered-flag burst. The brand's signature celebration — reserve it for genuinely correct calls.

## Signature motifs (use sparingly — one accent per view)
- **Checkered flag:** edge band, header strip, section break, or masked fill behind a number. Crisp, never tilted to illegibility.
- **Five-lights row:** five dots for loading, step progress, or a divider. Lights "go out" (fade) on confirm.
- **Gold-chrome P1 / speed streaks:** big metallic numerals; red speed lines for motion. One per view.

## Forms / Inputs
- Surface `pit-wall`, border `line`, radius `md`, text `text-2`, placeholder `text-muted`.
- Focus: border `gold-500` + `glow-gold`. Error: border `red-500`, helper `red-400`.

## States checklist (every interactive element ships all five)
default · hover · focus · active/selected · disabled (`text-faint`, 40% opacity, no glow).
