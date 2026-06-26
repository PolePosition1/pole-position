# Pole Position — Claude Design Brief

> **Paste this entire file at the start of any Claude Design (or Claude) session
> before asking for a design.** It's the compact, self-contained version of the
> full brand system. For deep detail, point it at the `/brand` folder. The logo
> lives at `assets/logos/pole-position-logo.png`.

---

You are designing for **Pole Position** — an F1 prediction game where fans lock in
race-weekend picks and compete against an AI model. **The model is the antagonist.**
Tagline: **"Beat Pole Position — Predict to Win."** Win stamp: **"Called It."**
This is a **skill game, not gambling** — never use bet/odds/wager language.

## Look & feel — "Champion"
Premium motorsport, built from the logo: **champion gold + checkered flag + speed
red, on racing black.** Gold = winning / pole / P1 / the primary action. The
checkered flag is the signature texture. Red is speed and urgency. Disciplined and
trophy-grade — 60% black canvas, 30% neutral + checkered, 10% gold. Gold is earned.
NOT casino, NOT generic SaaS, NOT WhiskeyRiverMedia's teal.

## Colors (use these exact hex)
- Background **Lights Out** `#0B0D12` · Card **Carbon** `#15171E` · Input **Pit Wall** `#1F222B` · Border **Line** `#2C313C`
- **Champion Gold (PRIMARY)** `#E9B23A` — CTAs, P1 / winner, the glow. Text-on-dark: `#FFE6A8`. Bronze shadow / pressed: `#B8780F`.
- **Speed Red** `#E00000` — lock-in, DNF, danger, the model, motion accents. Sparingly.
- **Go Green** `#00E676` — correct picks, climbs (functional signal only).
- **Checkered flag** — Flag White `#FFFFFF` + Flag Black `#0A0A0A` as a signature texture/edge band.
- Text: white `#FFFFFF` (headlines), Ghost `#E8EAED` (body), Muted `#9AA3AF` (captions).
- Gold sheen gradient: `linear-gradient(135deg,#FFE6A8→#E9B23A→#B8780F)`. Speed gradient: `#FF3B00→#E00000`.

## Type (Google Fonts)
- **Headlines → Saira** (700–900), tight, can go ALL CAPS for impact.
- **Body/UI → Inter** (400–700).
- **Numbers/scores/timers/leaderboards → JetBrains Mono**, always `tabular-nums`.
- **Labels → JetBrains Mono**, 12px, UPPERCASE, tracking 0.08em ("POLE", "P1", "PTS").

## System
- 4px spacing grid. Radius: cards 16px, buttons/inputs 10px, pills full.
- Card stack: Lights Out → Carbon → Pit Wall.
- Active CTA / winner state gets the gold glow `0 0 24px rgba(233,178,58,.40)`.
- Gold buttons: black bold label on `#E9B23A`, min 44px tall. Buttons are verbs (Lock In · Make Your Picks · Climb).
- Every interactive element ships default/hover/focus/active/disabled.

## Signature motifs (use ONE per view, never cluttered)
- **Checkered flag** edge band / header strip / masked fill behind a number.
- **Five start-lights** row (loading / progress / the lock-in moment; "goes out" on confirm).
- **Gold-chrome "P1"** numerals and the **"Called It"** stamp for wins.
- Red **speed streaks** for motion — sparingly.

## Voice
Race control crossed with a cocky rival. Second person, present tense, short.
"Lights out. Lock in." · "Called It. +5." · "The model locked its picks. Did you?"
**Banned: the word "clarity"; bet/odds/wager; generic hype (game-changer, revolutionary);
any real driver/team name, logo, or likeness in branded creative.**

## Hard don'ts
- No teal/antique-gold luxury palette (that's WhiskeyRiverMedia — keep PP's gold brighter, paired with checkered + red, never teal).
- No casino/betting tropes (chips, dice, slot reels, green felt).
- No driver/team IP. No real-driver photos. Recreate treatments with original PP assets.
- Don't let everything glow gold. Restraint is the brand.
