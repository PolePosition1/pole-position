# Pole Position — Brand System

The single source of truth for how Pole Position looks, sounds, and feels.
If a design, asset, or line of copy doesn't trace back to this folder, it's not
on brand.

> **Pole Position** — an F1 prediction game. Fans lock in race-weekend picks and
> compete against an AI model. The model is the antagonist.
> **"Beat Pole Position — Predict to Win."**

---

## The idea in one paragraph
Pole Position is a **championship you compete inside.** It lives on racing black
and is built from its own logo: **champion gold** (winning / pole / P1), the
**black-and-white checkered flag** (the finish, the grid, the texture), and
**speed red** (motion and urgency). The AI model is your rival — it has already
locked its picks and it's waiting for you to fall short. The brand's job is to
make calling the grid feel like skill, adrenaline, and bragging rights — never
gambling.

## What's in this folder
| File | What it covers |
|---|---|
| `CLAUDE-DESIGN-BRIEF.md` | **Paste-into-the-agent** compact brief. Start here for any Claude Design session. |
| `brand/tokens.json` | Machine-readable design tokens — the real source of truth. |
| `brand/tokens.css` | CSS custom properties. Drop into any web build/artifact. |
| `brand/tailwind.preset.js` | Tailwind preset mapping the tokens. |
| `brand/colors.md` | Palette, usage, contrast rules. |
| `brand/typography.md` | Type system + font loading. |
| `brand/voice-and-tone.md` | Copy rules, lexicon, do/don't. |
| `brand/logo.md` | The mark, lockups, clear space, misuse. |
| `brand/components.md` | UI component & pattern specs. |
| `assets/logos/pole-position-logo.png` | The primary logo. |
| `assets/` | Logos, fonts, icons, social templates. |
| `templates/` | Repeatable asset specs (result cards, social). |
| `_inspiration-local/` | Mood board for creative angles. **Local only — not committed (driver/team IP).** |

## The five fixed points (don't drift)
1. **Black canvas.** Lights Out `#0B0D12` is home. Everything sits on it.
2. **Gold is the win.** `#E9B23A` = champion / pole / P1 / primary action. Earned, never everywhere.
3. **The checkered flag is the texture.** Straight from the logo — the brand's signature device.
4. **Numbers are mono and tabular.** Scores and leaderboards never jitter.
5. **The model is the rival, and it's skill not gambling.** No bet/odds/wager — ever.

## Relationship to WhiskeyRiverMedia
Pole Position is **its own brand**, not a WRM sub-brand. Both use gold, so keep them
distinct: WRM is **antique/mustard gold + AMG teal + carbon**, Playfair luxury type.
Pole Position is a **brighter champion gold + checkered flag + speed red**, Saira sport
type, **no teal**. The checkered-flag motif and the brighter gold are the separators.

## Versioning
Tokens are versioned in `tokens.json` (`v1.1.0` — Champion system, derived from the
logo). When a core value changes, bump the version and update `tokens.css` +
`tailwind.preset.js` in the same commit so the three never drift apart.

— *Pole Position. Lights out. Lock in.*
