# Pole Position — Brand & Design System

The source of truth for the Pole Position visual identity, voice, and design
tokens. Everything Pole Position ships — the app, landing pages, social assets,
merch, decks — references this repo so it stays on brand.

**Start here:** [`BRAND.md`](./BRAND.md) for the system, or
[`CLAUDE-DESIGN-BRIEF.md`](./CLAUDE-DESIGN-BRIEF.md) to feed straight into an AI agent.

```
.
├── BRAND.md                  ← master brand system overview
├── CLAUDE-DESIGN-BRIEF.md    ← paste-into-the-agent compact brief
├── brand/
│   ├── tokens.json           ← design tokens (source of truth)
│   ├── tokens.css            ← CSS custom properties
│   ├── tailwind.preset.js    ← Tailwind preset
│   ├── colors.md  ·  typography.md  ·  voice-and-tone.md  ·  logo.md  ·  components.md
├── assets/
│   ├── logos/pole-position-logo.png   ← the primary mark
│   └── fonts · icons · social
├── templates/
└── _inspiration-local/       ← mood board, LOCAL ONLY (gitignored — driver/team IP)
```

## The identity in one line
Black canvas, **champion gold** (winning / pole / P1), **checkered-flag** texture,
**speed red** accent — all derived from the logo. Saira / Inter / JetBrains Mono type.

## How to use this with Claude Design

Claude Design doesn't auto-sync to a GitHub repo — so this repo is the
**source of truth + version history**, and you feed the brand *into* a session one
of three ways:

1. **Paste the brief (most reliable).** Copy all of `CLAUDE-DESIGN-BRIEF.md` into
   Claude Design as your first message, then make your request.
2. **Reference the raw URL** once pushed, and ask Claude to read it first:
   `https://raw.githubusercontent.com/PolePosition1/pole-position/main/CLAUDE-DESIGN-BRIEF.md`
3. **Drop the token files into a build** — paste `brand/tokens.css` or wire up
   `tailwind.preset.js` and everything inherits palette, type, and spacing.

The brief also works as a file in a Claude Project, or the seed for a
`pole-position-brand` Claude Skill.

## Inspiration folder
`_inspiration-local/` holds reference art for creative angles. It is **gitignored
and must not be published** — most pieces carry real driver/team IP and are
reference-only (recreate the *treatment* with original PP assets). If you upload via
the GitHub website, simply don't drag that folder in.

## Keeping it in sync
`tokens.json` is the real source. Change a color or font, update `tokens.css` and
`tailwind.preset.js` in the same commit, and bump the version. The three must agree.

## Status
**v1.1.0 — "Champion."** Black + champion gold + checkered flag + speed red,
reconciled directly to `assets/logos/pole-position-logo.png`.

— Pole Position. Lights out. Lock in.
