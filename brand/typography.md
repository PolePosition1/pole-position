# Typography

Three families, each with a job. No exceptions.

| Role | Family | Why | Weights |
|---|---|---|---|
| **Display** | **Saira** | Technical, semi-wide, motorsport timing-board energy. Carries every headline and big race statement. | 600 · 700 · 800 · 900 |
| **Body / UI** | **Inter** | Neutral, ADHD-clean, ruthlessly legible at small sizes. All interface and reading copy. | 400 · 500 · 600 · 700 |
| **Data / Mono** | **JetBrains Mono** | Tabular figures that don't jitter — scores, timers, countdowns, leaderboards, labels. | 500 · 700 |

All three are free on Google Fonts.

## Load
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Saira:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
```

## Scale
| Token | Size / Line | Weight | Family | Use |
|---|---|---|---|---|
| display-xl | 64 / 1.0 | 800 | Saira | Hero ("BEAT POLE POSITION") |
| display-l | 48 / 1.05 | 800 | Saira | Section heroes |
| h1 | 36 / 1.1 | 700 | Saira | Page titles |
| h2 | 28 / 1.15 | 700 | Saira | Card / block titles |
| h3 | 22 / 1.2 | 600 | Saira | Sub-headings |
| body-l | 18 / 1.5 | 400 | Inter | Lead paragraphs |
| body | 16 / 1.55 | 400 | Inter | Default |
| body-s | 14 / 1.5 | 400 | Inter | Captions, helper text |
| label | 12 / 1.2 | 600 | JetBrains Mono | UPPERCASE, tracking 0.08em |
| data-xl | 56 / 1.0 | 700 | JetBrains Mono | Scores, big timers — tabular |
| data | 18 / 1.2 | 500 | JetBrains Mono | Leaderboard rows, splits — tabular |

## Rules
- **Headlines are Saira, set tight.** Big race statements can go ALL CAPS for the lights-out feel; never set body copy in caps.
- **Numbers are always mono with `font-variant-numeric: tabular-nums`.** A leaderboard whose digits shift width is broken.
- **Labels are mono, uppercase, tracked +0.08em** — they read like timing-screen field names ("POLE", "P1", "PTS", "PICKS LOCK IN").
- Body copy never goes below 14px. Default reading size is 16px.
- One display weight per headline block. Don't mix 900 and 600 in the same line.
