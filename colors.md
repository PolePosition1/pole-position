# Color — "Champion" system

Pole Position lives on black and is built from its logo: **champion gold +
checkered flag + speed red.** Gold is winning. The checkered flag is the finish
and the whole premise. Red is speed and urgency. One signature (gold), one motif
(checkered), one accent (red), plus green strictly as the "correct" signal.

## The signature: Champion Gold
Gold `#E9B23A` is pole, podium, P1, the winner, the primary action. It's lifted
straight from the metallic gold in the logo (highlight `#FFE6A8` → core `#E9B23A`
→ bronze `#B8780F`). Gold carries the brand on its own; nothing else does.

## Palette

### Surfaces
| Token | Hex | Use |
|---|---|---|
| Lights Out | `#0B0D12` | Primary background. Near-neutral racing black. |
| Carbon | `#15171E` | Cards, sheets, nav. |
| Pit Wall | `#1F222B` | Inputs, hover fills, secondary surfaces. |
| Line | `#2C313C` | Borders, dividers, hairlines. |

### Checkered flag (motif)
| Token | Hex | Use |
|---|---|---|
| Flag White | `#FFFFFF` | Light square of the checker. |
| Flag Black | `#0A0A0A` | Dark square of the checker (pure black, distinct from surfaces). |

The checkered flag is the brand's signature texture — finish line, the grid, the
logo's own fill. Use it as an edge band, a header strip, a section break, or a
masked fill behind a number. Keep it crisp; never tilt it into illegibility.

### Champion Gold (signature)
| Token | Hex | Use |
|---|---|---|
| Gold 200 | `#FFE6A8` | Highlight; gold text & links **on dark**. |
| Gold 400 | `#F4CB6A` | Light gold, secondary accents. |
| Gold 500 | `#E9B23A` | **Primary.** CTAs, P1/winner, the glow. |
| Gold 700 | `#B8780F` | Bronze shadow; pressed/hover on gold fills. |
| Gold 900 | `#3D2A07` | Subtle tinted fills, chips. |

### Speed Red (accent / lock / danger / the model)
| Token | Hex | Means |
|---|---|---|
| Red 500 | `#E00000` | Speed accent, lock-in, DNF, danger, the model. The logo's hot red. |
| Red Orange | `#FF3B00` | Speed-streak **gradient endpoint only** — never a standalone fill. |
| Red 400 / 700 | `#FF5A4D` / `#A60000` | Text-on-dark / pressed. |

### Go Green (functional success — correct picks only)
| Token | Hex | Use |
|---|---|---|
| Green 500 | `#00E676` | Correct pick, leaderboard climb. **Functional only**, not a brand color. |
| Green 400 / 700 | `#5CFFA8` / `#00B85E` | Text-on-dark / pressed. |

### Text
| Token | Hex | Use | Min size |
|---|---|---|---|
| Primary | `#FFFFFF` | Headlines, key numbers | any |
| Secondary (Ghost) | `#E8EAED` | Body copy | any |
| Muted | `#9AA3AF` | Captions | any |
| Faint | `#5A626E` | Labels, disabled | **18px+ only** |

### Gradients
- **Gold** `linear-gradient(135deg,#FFE6A8→#E9B23A→#B8780F)` — the metallic sheen from the logo. Primary CTA fills, P1/winner, hero lockups.
- **Speed** `linear-gradient(135deg,#FF3B00→#E00000)` — motion/urgency accents. Sparingly.

## Contrast & usage rules
- Body text is **Ghost** or **Muted** on Lights Out — both clear AA.
- **Gold buttons:** fill `#E9B23A`, label **black `#0B0D12`, bold** (gold is bright — dark text reads best). Hover → `#B8780F` or darken 8%.
- Gold text on dark at small sizes: use **Gold 200 `#FFE6A8`** for legibility; `#E9B23A` is fine for headings and large numerals.
- Pair red and green with a shape/icon, never color alone (colorblind safety): red + lock, green + check.

## The 60 / 30 / 10
- **60%** Lights Out + Carbon (black canvas).
- **30%** text + Line + checkered motif + neutral UI.
- **10%** Gold — the win. A flash of red/green only as signals.
Gold should feel earned. When everything glows gold, nothing does.
