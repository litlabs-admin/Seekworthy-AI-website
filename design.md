# SeekWorthy AI — Design Reference

A one-page marketing site for SeekWorthy AI. It copies the **Answerline** Framer template (`answerline.framer.website.zip`) pixel for pixel, with the SeekWorthy copy from `Seekworthy Copy Doc.pdf`.

> **Source of truth order:** (1) the Framer export in the zip, (2) the full-page screenshot `screencapture-answerline-framer-website-2026-10-28-18_38_39.pdf`, (3) this file.
> Every value in this file has been checked against the export (see `/_reference/ANALYSIS.md` for the evidence and the per-breakpoint measurements). Keep this file up to date as the site changes.

---

## 1. Design character

- **Quiet, editorial, instrument-like.** White page, near-black type, one saturated blue accent. No gradients on surfaces, no drop shadows on cards, no rounded "card" boxes.
- **Visible grid.** The whole page sits inside a centered column with hairline rails on the left and right. Horizontal hairlines separate every section and run full-bleed to the viewport edges. Small `+` crosshairs mark where the lines meet. This grid is the main visual idea, so never break it.
- **Content lives in cells.** Columns are split by 1px vertical lines, not gaps. Cells have padding but no background, except the feed panel, the highlighted pricing column, the prompt bar and the closing CTA band (all `--surface`).
- **Data, not decoration.** Tables, status pills, `→` before/after numbers and engine logos carry the product story. Blue marks "good/after" values and links.
- **Motion is restrained.** Blocks fade and rise 16px into place once, feed rows cascade in, the timeline bar fills, the marquee drifts, the live dot pulses. Nothing bounces, spins or counts.

---

## 2. Tokens

Define all of these as CSS variables on `:root`, with a `[data-theme="dark"]` set (and the same set under `@media (prefers-color-scheme: dark)` for `:root:not([data-theme])`). Tailwind reads them through `@theme`.

### Color

| Token | Light | Dark | Framer token | Used for |
|---|---|---|---|---|
| `--bg` | `#FFFFFF` | `#0A0B0D` | `02ea51c7` | Page, every cell |
| `--surface` | `#FAFAFB` | `#0E1013` | `e58286b7` | Feed panel, featured pricing column, prompt bar, CTA band, case-card hover, theme-toggle hover |
| `--surface-2` | `#F1F2F4` | `#121417` | `4c9e3a74` | Image placeholder behind case photos |
| `--line` | `#E4E6EA` | `#24272C` | `6ff1d9b2` | Rails, section hairlines, cell dividers, feed header rule, theme-toggle ring |
| `--line-soft` | `#EEF0F2` | `#1C1F23` | `5f2cf5ca` | Feed row dividers, column-head rule, footnote rules, plan feature-list rule |
| `--line-strong` | `#D5D8DD` | `#2E3238` | `af844af9` | Secondary button border, "Missing" pill border |
| `--faint` | `#A0A5AD` | `#6B7078` | `2c04ed3c` | Crosshairs, `→` arrows |
| `--text-muted` | `#4A4E55` | `#B4B8BF` | `17df2dac` | Labels, table headers, meta, footnotes, "before" values, accordion icon |
| `--text-body` | `#2A2D31` | `#D9DCE1` | `aef431cf` | Body copy, nav and footer links |
| `--ink` | `#0D0F12` | `#EDEFF2` | `fc6ea28d` | Headlines, primary text, button labels, logo bars |
| `--accent` | `#3050F0` | `#4362FF` | `5a57e92e` | Primary button fill, number badges, timeline fill, logo dot |
| `--accent-text` | `#3050F0` | `#8EA0FF` | `1a7eaff3` | After-values, deltas, step labels, links, live dot |
| `--accent-tint` | `#E8ECFF` | `#1A2150` | `4dccf669` | "Cited" pill, citation chips, live-dot ring |
| `--accent-ink` | `#2440D8` | `#A3B2FF` | `0412aeed` | Text on `--accent-tint`, "Most chosen" text |
| `--accent-line` | `#C9D2FF` | `#2F3A80` | `f6b2275f` | "Most chosen" badge border |
| `--fill-hover` | `#EEF0F2` | `#22252A` | `a25c931b` | Secondary button hover, "Named" / "Fix queued" pill background |
| `--on-accent` | `#FFFFFF` | `#FFFFFF` | `13fec117` | Text on accent |
| `--logo` | `#6B7078` | `#9EA3AB` | `4e2d5370` | Marquee items |
| `--watermark` | `#F1F2F4` | `#181B20` | `d61e45cc` | Giant footer wordmark |
| `--button-bg` | `#FFFFFF` | `#121417` | `b4df7f49` | Secondary button background |

Primary-button hover overlay: `rgba(255,255,255,0.14)` (fixed, both themes).

### Typography
Family **Inter Tight** (400, 500, 600 from the zip, via `next/font/local`), with a metric-matched Arial fallback (`ascent-override 99.65%`, `descent-override 24.81%`, `line-gap-override 0%`, `size-adjust 97.21%`). **Every style sets `font-feature-settings: 'blwf','cv03','cv04','cv09','cv11'`.** Letter-spacing is in em. Sizes are font-size/line-height in px.

| Style | Desktop | Tablet | Phone | Weight | Tracking | Where |
|---|---|---|---|---|---|---|
| Display | 52/60 | 48/56 | 40/46 | 500 | −0.04em | Hero headline (max-width 820, `text-wrap: balance`) |
| H2 | 34/42 | 32/40 | 30/36 | 500 | −0.035em | Section and CTA headlines |
| Stat | 44/48 | 40/44 | 36/40 | 500 | −0.04em | Proof points, plan prices |
| Metric | 30/36 | 30/36 | 30/36 | 500 | −0.035em | Case metric value, phone-menu links |
| H3 | 22/28 | 22/28 | 22/28 | 500 | −0.03em | Card, step, case and plan titles |
| Prompt | 22/34 | 22/34 | 20/30 | 400 | −0.025em | Answer-block question and summary |
| H4 | 18/22 | 18/22 | 18/22 | 500 | −0.025em | Work-row titles, badge text, FAQ questions |
| Lead L | 18/28 | 18/28 | 19/30 | 400 | −0.02em | Hero support copy, audience cell text |
| Lead | 17/27 | 17/27 | 18/28 | 400 | −0.02em | Section intros, CTA support copy |
| Body | 16/25 | 16/25 | 17/26 | 400 | −0.02em | Card text, table cells, nav and footer links, plan features |
| UI | 15/18 | 15/18 | 16/20 | 500 | −0.02em | Buttons, engine names, feed title |
| Small | 14/18 | 14/18 | 14/18 | 400 | −0.02em | Labels, table headers, meta, footnotes, small print |
| Small strong | 14/18 | 14/18 | 14/18 | 500 | −0.02em | Pills, chips, badges |
| Wordmark | 18/22 | 18/22 | 18/22 | 600 | −0.035em | Brand name next to the mark |
| Watermark | fit to width (262px at 1248) | fit | fit | 600 | −0.065em | Giant footer wordmark, clipped at the bottom |

### Spacing and layout
- **Breakpoints (Framer defaults):** desktop ≥ 1200, tablet 810–1199, phone ≤ 809. Mirror them exactly.
- **Section:** full-width, side padding **40 / 32 / 16**, `border-bottom: 1px var(--line)` running full-bleed (no fade).
- **Container (rails):** `width: 100%; max-width: 1248px`, centered, 1px `--line` left and right borders. At 1440 the rails sit at x = 96 / 1343.
- **Cells:** content padding **32px** left and right (phone **20px**). Grids are `gap: 1px` on a `--line` background, with each cell on `--bg`.
- **Section headline block:** padding **120 32 60** (tablet 100 32 56, phone 80 20 48), gap 16 (phone 14), max-width 720.
- **Button row under a grid:** padding **32 32 120** (tablet 32 32 100, phone 28 20 80), with a `--line` top border.
- **Hero:** padding 120 32 80 (tablet 100 32 72, phone 72 20 64, left-aligned), gap 20, buttons padding-top 12, gap 10.
- **Nav height:** 68 (tablet and phone 64).
- **Crosshairs:** **11×11px** `+` (two 1px bars, `--faint`) centered on every rail × hairline intersection: each section's top corners and every inner full-width rule. They show at all breakpoints, including phone (as in the template).
- Per-section measurements: `/_reference/ANALYSIS.md` §4.

### Radius, borders, elevation
- Buttons 8px · pills and badges 6px · chips 6px · chip number badges 4px · cell number badges 5px · theme toggle and menu button 8px · live dot and avatars 50%.
- Cells, images and panels: **0 radius**.
- No box-shadows anywhere. The only "shadow" is the live dot's `0 0 0 4px var(--accent-tint)` ring. The sticky nav is a solid `--bg` bar with a permanent bottom hairline.
- Lines are drawn as 1px borders/gaps, never scaled.

### Buttons
- **Primary:** `--accent` fill, `--on-accent` text, UI style, **height 42** (padding 12 20), radius 8. Hover: a `rgba(255,255,255,.14)` overlay fades in over **0.2s** `cubic-bezier(.44,0,.56,1)`. No lift.
- **Compact (nav):** Primary, **height 36** (padding 9 16).
- **Secondary:** `--button-bg` fill, 1px `--line-strong` inset border, `--ink` text, height 42. Hover: a `--fill-hover` overlay fades in, 0.2s.
- **Text link:** `--text-body`, hover `--ink`. Accent link: `--accent-text`, hover `--ink`. `color 0.2s cubic-bezier(.44,0,.56,1)`, no underline.
- **Focus:** 2px `--accent-text` outline, offset 2px (from the template's theme toggle). It shows only with `:focus-visible`.

### Status pills
Padding 4 10, radius 6, height 26, Small strong.

| Status | Style |
|---|---|
| Cited | `--accent-tint` bg, `--accent-ink` text |
| Named | `--fill-hover` bg, `--ink` text |
| Fix queued | `--fill-hover` bg, `--ink` text |
| Missing | transparent, 1px `--line-strong` border, `--text-muted` text |

SeekWorthy uses only **Cited**. Build all four, because the dashboard will need them later.

---

## 3. Section map (template → SeekWorthy)

Anchor IDs: `#how-it-works`, `#results`, `#pricing`, `#faqs`.

| # | Answerline section | SeekWorthy content (copy doc §) | Structural changes |
|---|---|---|---|
| 1 | Nav: logo, 5 centered links, theme toggle, "Book a call" | §01: SeekWorthy AI, 4 links, "Sign in" text link + "Get started free" | 4 links. Right side reads toggle · Sign in · primary button. |
| 2 | Centered hero, 2 buttons | §02 headline, support copy, "Get started free" / "See live results" (→ `#results`) | Add the small print under the buttons in Small/`--text-muted`. |
| 3 | Engine strip: label cell + 5 logo cells | §02 "Track your visibility across" + 6 engines | **6** logo cells (165.67px each at desktop; tablet 3 + 3 under the label row). Claude, Grok and DeepSeek logos are **not** in the zip, so source official monochrome SVGs. |
| 4 | Live answer feed table | §03 Recorded answer feed | Header: dot + "Recorded AI answers · VenturePR", right "Selected ChatGPT observations · 28 October 2026". Columns: Engine · Buyer prompt · Result · Status. All rows are ChatGPT / Cited. Add a footnote row for the panel note. |
| 5 | "Trusted by 38 software teams" + logo marquee | §04 Audience strip | Label cell: "Built for". Marquee items: Brand teams · Agencies · Startups · Enterprise teams (text set in the logo style, with small icons). Keep the edge fade. |
| 6 | 3 stat cells + footnote row | §05 Proof points: 6 / 3 / 1 | The supporting line goes in the footnote row. Numbers count up (micro-animation added, see §4). |
| 7 | "Three ways…" 3 service cells + "All services" | §06 Platform overview | Same cells and icons. Button: "See how it works" (→ `#how-it-works`). |
| 8 | "What the first three months look like" 4-column timeline | §07 How it works (`#how-it-works`) | Blue label "01 · Set up" etc., then title, then text. Keep the top progress bar. |
| 9 | "Every change we ship" left header cell + changelog rows | §08 Work and progress cards | Left: headline, intro, "View the workflow". Rows: the date column becomes Diagnose / Improve / Verify, then title + text, and the right-aligned blue "+6 prompts" slot becomes the badge text. Remove the engine-chip line. |
| 10 | "Results from teams like yours" 3 image cards + "All results" | §09 Results (`#results`) | Category line, headline, text, then metric line: big value (`First` / `#2` / `#4`) + caption ("listed · ChatGPT observation"). Button: "Start tracking your brand". Section note in a footnote row. Reuse the 3 template photos. |
| 11 | "What clients say" AI-answer block | §10 Who it is for | Search bar: "Who is SeekWorthy AI built for?" + "● 3 audiences". Answer panel summary. Chips: 1 Brand teams · 2 Agencies · 3 Startups. 3 cells with a number badge and text. Replace the avatar/name row with the audience name. |
| 12 | Pricing: 3 columns, middle highlighted | §11 Pricing (`#pricing`) | Free · **Pro (highlighted, badge "For growing brands")** · Agency. Engine-icon row under each price. The "See full pricing" row becomes the Enterprise line + "Book a demo". |
| 13 | FAQ: left headline + email, right accordion | §12 FAQs (`#faqs`) | 6 questions. The first one is open by default (as in the template). Left side: headline + intro (no email). |
| 14 | Gray CTA band with engine icons | §13 Closing CTA | 6 engine icons. Add the small print below the buttons. |
| 15 | Footer: brand + 3 link columns + giant wordmark | §14 Footer | Brand column + "Sections" + "Account" (+ an empty 4th cell to keep the grid). Wordmark "SeekWorthy". Bottom row: © line · Privacy · Terms. |

**Remove from the template:** the "Made in Framer" badge, the floating "free for the first 20" pill, and the "Fictional agency, template demo content" line.

---

## 4. Motion spec

Values from the export's component bundles (`/_reference/ANALYSIS.md` §5). The default ease is **`[0.44, 0, 0.56, 1]`**. Every in-view animation runs **once**.

| Element | Animation | Trigger |
|---|---|---|
| Hero | **None.** Static on load, as in the template. | n/a |
| Section headline + intro block | opacity 0→1, y 16→0; 0.6s | In view, `amount: 0.5` |
| Grids as a block (service cells, case list, prompt bar, pricing plans, CTA content) | opacity 0→1, y 16→0; 0.6s | In view, `amount: 0.3` |
| Work section left cell / FAQ left cell | opacity 0→1, y 16→0; 0.6s | In view, `amount: 0.3` |
| Work rows | opacity 0→1, y 16→0; 0.6s; delays **0 / 0.12 / 0.24** | In view, `amount: 0.5` |
| Feed rows | opacity 0→1, y 10→0; **0.5s**; delays **0 / 0.15 / 0.30 / 0.45 / 0.60** | In view, `amount: 0.5` |
| Live dot | An 8px `--accent-text` dot with a `0 0 0 4px --accent-tint` ring. A pulse copy loops scale 1→**2.6**, opacity **0.45→0**, **1.4s**, ease `[0, 0, 0.58, 1]`, **0.6s** pause between loops | Always (paused offscreen) |
| Marquee | Linear drift left at **30 px/s**, seamless (duplicated track), gap 72px, edge mask `linear-gradient(90deg, transparent 0, #000 6.6%, #000 93.5%, transparent 100%)`, **stops on hover** | Always |
| Stats | Count up from 0 over **0.8s**, ease-out (added micro-animation; the template is static) | In view, once |
| Timeline bar | A 4px bar on each column. A `--bg` cover slides off to the right (x −420→0 from `left: 420px`), revealing the `--accent` fill left→right: **0.8s**, ease `[0.25, 0.1, 0.25, 1]`, delays **0.10 / 0.55 / 1.00 / 1.45**. Fill opacity per column **1 / 0.72 / 0.48 / 0.28** | In view, `amount: 0.5` |
| Work section left column | **Not sticky** (as in the template) | n/a |
| Case metrics | No separate animation (they arrive with the card block) | n/a |
| Answer block | No word-by-word reveal. The prompt bar fades in as a block; the answer, chips and cells are static | In view |
| Accordion | Height auto-animates over **0.35s**; answer opacity 0→1; the `+` icon swaps to `−` (stroke 1.6, `--text-muted`), no rotation | Click / Enter |
| Nav | **Sticky, always solid** `--bg` with a bottom hairline. No scroll effect | n/a |
| Nav sheet (tablet/phone) | The nav grows to `100dvh`; drawer rows (padding 20, bottom `--line`, Metric style `--ink`, hover `--accent-text`). Spring **duration 0.4, bounce 0.2**. Menu ↔ Close icon swap | Menu button tap |
| Buttons | Hover overlay fades in, **0.2s**. No lift | Hover |
| Links | Color, **0.2s** | Hover |
| Case cards | A `--surface` overlay fades in, **0.25s**. No image scale | Card hover |
| Theme toggle | Background transparent→`--surface` and icon `--text-body`→`--ink`, `0.2s ease`. The Sun/Moon icon swaps **instantly**. No flash on load | Hover / click |

**`prefers-reduced-motion`:** disable transforms, the marquee drift (show a static row), the live-dot pulse and the timeline slide (show the bars filled). In-view blocks get a plain opacity fade of 150ms or less. The accordion opens without the height animation.

---

## 5. Assets

- **From the zip, reuse as-is:** Inter Tight 400/500/600, the 3 case-study photos (`drAq…` → Series A, `UFGZ…` → Robotics, `hSXD…` → Fintech), and the ChatGPT, Perplexity and Gemini icons. Exact source paths: `/_reference/ANALYSIS.md` §8.
- **New:** Claude, Grok and DeepSeek monochrome logos (24×24 viewBox, rendered as `--ink` masks like ChatGPT); favicon and OG image from `seekworthy.png`; the "SeekWorthy" wordmark (set in Inter Tight 600).
- **Not needed:** AI Overviews and Copilot icons, template avatars, customer logos, the Answerline favicon, the Framer badge, the promo pill and its font.
- Store everything under `/public/assets/…`. Serve images through `next/image` with explicit sizes.

---

## 6. Accessibility and quality bar

- Semantic landmarks, one `h1`, ordered headings. The feed is a real `<table>` (it stacks into cards on tablet and phone, as in the template).
- Contrast is AA or better in both themes. Check `--text-muted` on `--surface`.
- All controls are reachable by keyboard. The accordion follows the WAI-ARIA pattern (Radix).
- Anchor scrolling accounts for the sticky nav (`scroll-margin-top: 68px`, 64px below 1200).
- Lighthouse ≥ 95 in every category. CLS 0 (fonts preloaded, images sized). No hydration flash between themes.

---

## 7. Decisions (template vs. brief), resolved 2026-10-28

1. **Crosshairs on phone:** keep them, as in the template.
2. **Stat count-up:** yes, as a micro-animation. Count from 0 over ~0.8s, ease-out, once when in view (reduced motion: show the final value).
3. **Engine strip on phone:** the label takes a full-width row, then 6 engines in 3 rows of 2.
4. **Feed rows on phone:** show all 5 rows.
5. **Logo:** the same layout as Answerline (22px-tall mark slot, gap 9, name in Wordmark style). The mark is the SeekWorthy gradient mark from `Group_2085664097.png` (the same artwork in both themes), and the name is **"SeekWorthy AI"** in Inter Tight 600. Use the copy-doc spelling everywhere (footer watermark: "SeekWorthy"). Favicon and OG image come from the same mark.
6. **No git commits** during the build.
