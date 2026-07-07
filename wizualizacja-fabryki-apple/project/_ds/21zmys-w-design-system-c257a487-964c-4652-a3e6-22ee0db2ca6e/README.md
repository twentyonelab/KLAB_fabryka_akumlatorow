# 21zmysłów — Design System

> **21 — Projektujemy i wdrażamy zeroemisyjne produkty i technologie środowiskowe.**
> _21 — We design and deploy zero-emission products and environmental technologies._

21zmysłów is a Polish deep-tech design studio and product incubator. They partner with manufacturers and investors on HVAC, smart-building, energy-recovery, indoor-climate, mobility, circular-economy and clean-air products — taking ideas from R&D all the way through to commercialized, zero-emission hardware. The studio's own sub-brand **Lab21™** fronts their internal IP and experimental lines.

The brand voice is confident, craft-obsessed and quietly Polish-modernist: big black headlines, generous white (or warm off-white) breathing room, one assertive orange accent, and lots of architectural product photography shot in steel, concrete and soft daylight.

---

## Source material

This system was reconstructed from three annotated screenshots of the live marketing site (as of April 2026):

- `uploads/Screenshot 2026-04-18 at 14.57.39.png` — Portfolio landing hero ("Mamy zmysł do robienia rzeczy inaczej.")
- `uploads/Screenshot 2026-04-18 at 16.41.08.png` — Portfolio tile grid (UniCore, Rekuperator reQ F.350 ERV, Living Shelf, VOL Design, Zażółć gęślą jaźń)
- `uploads/Screenshot 2026-04-18 at 16.41.27.png` — Home "Dla kogo jesteśmy" section (Dla producentów / Dla inwestorów)

No codebase, Figma file or brand book was provided. **Values are approximations sampled from the images.** Replace the webfont and verify exact hex values against the official brand book before production use.

- Website: `https://21zmyslow.pl` (public-facing, Polish)
- Full Figma link: _not provided_
- Codebase: _not provided_

---

## Products represented

| Surface                     | What it is                                                               | In this system                     |
| --------------------------- | ------------------------------------------------------------------------ | ---------------------------------- |
| **Marketing website**       | Public portfolio + services site. Polish. Light/dark toggle.             | `ui_kits/marketing-site/`          |
| **Lab21™**                  | Sub-brand for in-house IP and experimental products. Same design DNA.    | Covered within marketing site kit  |

Only one product surface is represented in the source material, so this system ships one UI kit.

---

## File index

| Path                        | Purpose                                                        |
| --------------------------- | -------------------------------------------------------------- |
| `README.md`                 | This file — brand context, content + visual foundations        |
| `SKILL.md`                  | Agent-skill manifest (use this as a Claude Code skill)         |
| `colors_and_type.css`       | All CSS custom properties (colors, type, spacing, motion)      |
| `assets/`                   | Logos, marks, placeholder illustrations                        |
| `preview/`                  | Design-system preview cards (one HTML file per token group)    |
| `ui_kits/marketing-site/`   | High-fidelity React recreation of the 21zmysłów website        |
| `fonts/`                    | Space Grotesk (Light / Regular / Medium / SemiBold / Bold) TTFs|

---

## CONTENT FUNDAMENTALS

**Language.** All copy ships in Polish by default. English is only used for:
- The **Lab21™** sub-brand (always trademarked)
- Occasional short English tags inside product cards ("We're Studio", "Digital Marketing")
- International LinkedIn / social copy

**Voice.** Confident but understated. The studio introduces itself with a pun — _"Mamy zmysł do robienia rzeczy inaczej."_ (≈ "We have a sense for doing things differently.") — that hinges on **zmysł** meaning both "sense" (as in the five senses) and "knack/flair". The brand leans on wordplay and cultural references (the portfolio tile literally titled **"Zażółć gęślą jaźń"** — the canonical Polish pangram — shows the team's fondness for linguistic jokes).

**Tone.** Serious about the engineering, playful about the craft. Never salesy. Never adjective-stacked. Never uses "innovative" as a crutch — the work speaks.

**Point of view.** Collective **my / nasz** ("we / our"), never **ja**. The reader is addressed familiarly in the singular second person (**ty / twój**) on CTAs, but most marketing copy is declarative third-person ("Dla producentów", "Dla inwestorów"). English surfaces use **we / our / you**.

**Casing.**
- Headlines: **sentence case**, period at the end (often with an orange accent period).
- Nav items: **Title Case** — _Home · Portfolio · Usługi · Lab21™ · Kontakt_
- Section labels / eyebrows: **UPPERCASE** with wide tracking — _DLA PRODUCENTÓW · NASI KLIENCI_
- Tile captions: Sentence case title, comma-separated tag list below in the same weight.

**Punctuation quirks.**
- **Em-dash with spaces** around asides — Polish convention — and used generously.
- **→** (right arrow glyph) links cause-and-effect clauses inside long sentences ("...HVAC, Smart Building i technologii środowiskowych → z potencjałem skalowania i komercjalizacji IP.")
- The **orange full-stop** at the end of a headline is the brand's signature flourish.

**Emoji.** Never. Not in UI, not in marketing, not in social.

**Unicode glyphs.** Used sparingly and deliberately: **™**, **→**, em-dash **—**, interpunct **·**.

**Specific examples.**
- Hero: _"Mamy zmysł do robienia rzeczy inaczej**.**"_ (full-stop in brand orange)
- Sub-hero: _"Zobacz wybrane projekty z branż, które znamy. A jeśli chcesz eksplorować z nami nowe obszary — jesteśmy gotowi."_
- Filter chips (with tiny superscript counts): _"All¹¹ / Czyste powietrze⁰² / Innowacje 21⁰³ / Klimat wnętrz⁰² / Mobilność⁰⁵ / Obieg zamknięty⁰¹ / Odzysk energii⁰⁴"_
- Audience header: _"Dla kogo jesteśmy"_ with tiles _"DLA PRODUCENTÓW"_ and _"DLA INWESTORÓW"_

---

## VISUAL FOUNDATIONS

**Overall vibe.** Architecture-monograph meets deep-tech portfolio. If Kinfolk and MIT Media Lab had a Polish engineering firm. Material, quiet, and assertively typographic.

**Colors.**
- **Carbon / ink** `#111013` — headlines, logo, 90% of type
- **Paper** `#FAFAF9` — warm off-white page background (never pure white in light mode)
- **Bone / mist** `#F2F1EE` / `#E6E5E1` — cards, dividers
- **Signal orange** `#FF6110` — used _sparingly_: the brand dot, the full-stop at the end of headlines, active nav state, hover underlines, the one active filter chip. Never as a button fill, never as a card background.
- **Categories are not color-coded.** They are purely typographic (Czyste powietrze / Innowacje 21 / Klimat wnętrz / Mobilność / Obieg zamknięty / Odzysk energii). Active state uses the orange accent, same as the filter chips — never a colored pill or tint.

**Typography.**
- **Display / UI**: **Space Grotesk** at 700 weight with `-0.025em` tracking.
- **Body**: Space Grotesk at 400/500.
- **Numerals** default to lining, tabular where relevant. Superscript is real, not faked with `<sup>` styling — filter counts sit half-x-height above baseline.
- No serif anywhere. No monospace except in code/tooling contexts (not the public site).

**Spacing & layout.**
- 12-column grid at 1440, gutters ~32px, outer margin ~80–128px.
- **Sections breathe hard** — 96–160px of vertical air between blocks. Don't compress.
- Headlines routinely span only 50–70% of viewport width and are deliberately left-aligned in hero moments.
- Portfolio grid is a 2-up / 3-up asymmetric tile layout with varying row heights (2:1 and 1:1 ratios intermixed).

**Backgrounds.**
- Flat colored fields (paper / carbon) — never gradients, never patterns.
- **Full-bleed product photography** inside rounded-corner tiles — always. Subjects are often isolated industrial objects shot with diffuse daylight on concrete / steel / plaster backdrops.
- Some hero tiles overlay a full-image **orange→plum gradient wash** (~60% opacity) to hold white caption text — this is the only gradient used, and only on image overlays, never on UI.

**Imagery treatment.** Warm-neutral color grading; slight desaturation; natural grain rare. Lots of grey concrete, brushed steel, powder-coated black metal, and green-leafed plants as a recurring organic counterpoint.

**Borders & lines.** Hairline `1px` in `--c-mist`. Used for dividers, filter chips, and the nav underline. Never for card outlines — cards rely on fills and shadows instead.

**Radii.**
- `28px` (r-2xl) on **portfolio tiles** — the signature corner.
- `12px` (r-lg) on buttons and smaller cards.
- `999px` pill on the theme-toggle switch and some filter chips.
- Sharp `0px` on typography (no rounded-rect text containers).

**Shadows.** Minimal. The brand is essentially flat. Tiles get a subtle `shadow-md` only on hover. The **theme toggle pill** is the lone exception — it floats on a `shadow-pill` at all times.

**Motion.**
- Everything eases with `cubic-bezier(0.22, 1, 0.36, 1)` — a gentle out-quart.
- Durations: hover 160ms, card lift 240ms, page transition 480ms.
- Tiles fade + rise 8px on scroll-in. No bounce. No rotation. No parallax beyond a tiny 0.1× scroll multiplier on hero imagery.
- Hover on a portfolio tile: image scales to 1.03 over 480ms, caption slides up 12px, tile shadow deepens.

**Hover states.**
- Nav links: text goes orange **and** a 4px orange dot appears centered below the link.
- Buttons: accent fill darkens to `--accent-hover` (`#E8530A`).
- Portfolio tiles: image scale + caption-slide (above).
- Body links: orange underline appears.

**Press states.** 98% scale (`scale(0.98)`) + 20ms. No color flash. No haptic faking.

**Transparency & blur.** Used in exactly two places:
1. The **cookie / consent pill** at the bottom of the viewport — 80% white with a 12px backdrop-blur.
2. The **image-hover gradient wash** — see Backgrounds above.

Otherwise every surface is opaque.

**Fixed elements.** Top nav is fixed, transparent over content, 80px tall. The right-rail has a vertical stack: theme toggle (top) → social (`in` LinkedIn) → _"Follow Us —"_ vertical text → _"Scroll to top"_ on deeper scrolls. The bottom-left carries a small circular search FAB.

**Cards.** Rounded `28px`, flat fill (`paper` or a photo), no border, no shadow at rest, caption overlaid bottom-left in white on darker imagery or carbon on light ones. Two text lines max: title, then comma-separated category tags.

**Protection gradients.** Used only to hold text over imagery — a 0→60% black gradient from bottom of the tile to ~40% up. Never a solid capsule.

---

## ICONOGRAPHY

**System.** No in-house icon font or sprite was identified in the source screenshots. The live site uses **very few icons** — the brand prefers typography and imagery as the primary visual carriers. The icons we did spot:

- **LinkedIn mark** (rounded-square `in`) in the right rail.
- **Search glyph** (standard magnifying glass) in the circular FAB, bottom-left.
- **Sun glyph** (`☀` stylized) inside the _"Light"_ half of the theme toggle pill.
- **Close `×`** on the cookie pill.
- **Small circle / dot** — not an icon per se, but the recurring orange **•** that marks the active nav item is iconographic in function.

**This system ships with [Lucide](https://lucide.dev) via CDN as the substitute set** — it matches the site's aesthetic (1.5px stroke, rounded line-caps, no fills) far better than Heroicons or Material. Usage in UI kits goes through the Lucide web-component:

```html
<script type="module" src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<i data-lucide="search" stroke-width="1.5"></i>
```

**Rules.**
- Stroke weight: **1.5px**. Always.
- Stroke color: inherit `currentColor` — never hardcoded.
- Size: **20px** in body UI, **24px** in nav/FAB, **16px** inline-with-text.
- Never filled. Never two-tone. Never colorized with the brand orange (orange is reserved for typographic accents).
- Never stacked with text badges (no red-dot notification overlays).

**Emoji.** Never used.
**Unicode glyphs.** Used as type, not as icons: `™ → — ·`. The interpunct separator appears between meta items (e.g. _"Klimat wnętrz · Odzysk energii"_).
**Custom marks.** The **21zmysłów wave mark** (six hand-drawn concentric arcs fanning down-right over a '21' wordmark) is the sole custom illustration — it reads as sound-waves / airflow / contour-lines, a nice visual pun on _zmysł_ (sense). Vectorized in `assets/mark-21.svg` and `assets/logo-21zmyslow.svg`.

---

## Known caveats / substitutions

- **Font.** Space Grotesk (the brand font, confirmed by user).
- **Icons.** Lucide is a stand-in for whatever (very small) icon set the live site uses.
- **Hex values.** Sampled from JPEG screenshots — verify against the brand book. The orange in particular may be `#FF5D0D` or `#FF630F` rather than `#FF6110`.
- **Lab21™** sub-brand visual treatment was not in the screenshots; we assume it inherits the parent system.
