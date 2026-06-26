# Pole Position — Claude Design Brief

> **Paste this entire file at the start of any Claude Design (or Claude) session
> before asking for a design.** It's the compact, self-contained version of the
> full brand system — everything the agent needs to produce on-brand output in
> one block. For deep detail, point it at the `/brand` folder.

---

You are designing for **Pole Position** — an F1 prediction game where fans lock in
race-weekend picks and compete against an AI model. **The model is the antagonist.**
Tagline: **"Beat Pole Position — Predict to Win."** Win stamp: **"Called It."**
This is a **skill game, not gambling** — never use bet/odds/wager language.

## Look & feel
Premium motorsport **timing screen**. Lives on near-black. One signature color
(purple = the best / fastest / winner), three instant signals (green = correct,
red = the model / lock / DNF, amber = closing). Disciplined, electric, competitive.
NOT luxury-gold, NOT casino, NOT generic SaaS. Purple should feel earned — 60% black
canvas, 30% neutral, 10% purple flash.

## Colors (use these exact hex)
- Background **Lights Out** `#0A0E17` · Card **Carbon** `#14181F` · Input **Pit Wall** `#1E242E` · Border **Line** `#2A3340`
- **Purple (PRIMARY)** `#9B2FFF` — CTAs, winner/active state, the glow. Text-on-dark: `#D9B8FF`. Pressed: `#7A1FCC`.
- **Go Green** `#00E676` — correct picks, climbs.
- **Pole Red** `#FF2436` — the model, lock-in, DNF, wrong pick. Sparingly.
- **Amber** `#FFB800` — picks closing, pending.
- Text: white `#FFFFFF` (headlines), Ghost `#E8EAED` (body), Muted `#9AA3AF` (captions).
- Hero gradient (**Pole**): `linear-gradient(135deg,#9B2FFF→#2D7FFF)`.

## Type (Google Fonts)
- **Headlines → Saira** (700–900), tight, can go ALL CAPS for impact.
- **Body/UI → Inter** (400–700).
- **Numbers/scores/timers/leaderboards → JetBrains Mono**, always `tabular-nums`.
- **Labels → JetBrains Mono**, 12px, UPPERCASE, tracking 0.08em ("POLE", "P1", "PTS").

## System
- 4px spacing grid. Radius: cards 16px, buttons/inputs 10px, pills full.
- Card stack: Lights Out → Carbon → Pit Wall.
- Active CTA / winner state gets the purple glow `0 0 24px rgba(155,47,255,.35)`.
- Buttons are verbs (Lock In · Make Your Picks · Climb), white bold label on purple, min 44px tall.
- Every interactive element ships default/hover/focus/active/disabled.

## Voice
Race control crossed with a cocky rival. Second person, present tense, short.
"Lights out. Lock in." · "Called It. +5." · "The model locked its picks. Did you?"
**Banned: the word "clarity"; bet/odds/wager; generic hype (game-changer, revolutionary);
any real driver/team name, logo, or likeness in branded creative.**

## Signature motifs (use ONE per view, never cluttered)
- Five start-lights row (loading / progress / divider; "goes out" on confirm).
- Grid-slot chevron / forward speed angle.
- "Called It" stamp for wins (Saira 800 caps, purple gradient, slight rotation).

## Hard don'ts
- No gold/teal luxury palette (that's WhiskeyRiverMedia, a different brand).
- No casino/betting tropes (chips, dice, slot reels, green felt).
- No driver/team IP. No stock-photo cars on busy backgrounds without a black scrim.
- Don't let everything glow. Restraint is the brand.
