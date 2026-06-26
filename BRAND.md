# Pole Position — Brand System

The single source of truth for how Pole Position looks, sounds, and feels.
If a design, asset, or line of copy doesn't trace back to this folder, it's not
on brand.

> **Pole Position** — an F1 prediction game. Fans lock in race-weekend picks and
> compete against an AI model. The model is the antagonist.
> **"Beat Pole Position — Predict to Win."**

---

## The idea in one paragraph
Pole Position is a **timing screen you compete inside.** It lives on near-black,
moves fast, and uses one signature color — **purple, the timing-screen color for
*the fastest / the best*** — to mark winning. The AI model is your rival: it has
already locked its picks and it's waiting for you to fall short. The brand's job
is to make calling the grid feel like skill, adrenaline, and bragging rights —
never gambling.

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
| `brand/logo.md` | Mark construction, clear space, misuse. |
| `brand/components.md` | UI component & pattern specs. |
| `assets/` | Logos, fonts, icons, social templates (drop files here). |
| `templates/` | Repeatable asset specs (result cards, social). |

## The five fixed points (don't drift)
1. **Black canvas.** Lights Out `#0A0E17` is home. Everything sits on it.
2. **Purple is the win.** `#9B2FFF` = best / fastest / winner / primary action. Earned, never everywhere.
3. **Numbers are mono and tabular.** Scores and leaderboards never jitter.
4. **The model is the rival.** Personified, confident, data-driven, beatable.
5. **Skill, not gambling.** Prediction, points, bragging rights. No bet/odds/wager — ever.

## Relationship to WhiskeyRiverMedia
Pole Position is **its own brand**, not a WRM sub-brand. WRM is carbon + **gold +
AMG teal**, Playfair display type, luxury-agency feel. Pole Position is
**black + purple**, Saira/Inter/JetBrains Mono, competitive-game feel. They should
never be confused. (Shared DNA: motorsport roots, dark base, mono labels — that's it.)

## Versioning
Tokens are versioned in `tokens.json` (`v1.0.0`). When a core value changes, bump
the version and update `tokens.css` + `tailwind.preset.js` in the same commit so
the three never drift apart.

— *Pole Position. Lights out. Lock in.*
