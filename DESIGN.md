# DESIGN.md: windiarta portfolio

## Identity

Portfolio for Windiarta, Software & AI Engineer (Jakarta). The site IS the
proof: an engineer who ships enterprise AI platforms built a site that feels
engineered. Dark, warm, precise. Marketing voice, every claim backed by the
CV in `windiarta_info` (no invented numbers, R-17/R-36/R-38).

## Dials

ENERGY 3 / RHYTHM 3 / MOTION 3 — owner explicitly requested maximum React
Bits motion. Sections deliberately vary composition (hero → stat band →
scroll-reveal statement → flagship feature → asymmetric project grid →
timeline → dot-grid skill wall → rotating Now → cert rows → contact).

## Palette (R-29: 2 core + 1 accent + neutrals)

- `--bg #0B0B0D` warm near-black. Reason: AI/terminal identity (R-21 written
  reason for fixed dark theme; no toggle, dark-only is the brand).
- `--text #F2EFE9` warm paper. Contrast ~15:1 on bg (R-25 pass).
- `--muted #A6A3AE`. Contrast ~7:1 on bg (R-25 pass).
- `--accent #FFAE3B` signal amber. One deliberate accent, used at key
  moments only: CTAs, stats, flagship title, focal hovers. ~10:1 on bg.
- No blue-purple gradients anywhere (R-01). Amber gradient appears twice,
  both with hierarchy purpose (flagship title, hero rule).

## Typography (R-06, reasons written)

- Display: **Bricolage Grotesque** (variable). Reason: engineered-quirky
  grotesque with mechanical detail; distinct from the AI-default roster
  (Inter/Geist/Space Grotesk), matches "built, not generated" identity.
- Body: **IBM Plex Sans**. Reason: engineering heritage, high readability,
  family coherence with mono.
- Labels/data: **IBM Plex Mono**. Reason: terminal/data identity for stats,
  agent names, cert rows, eyebrows; used for real data, not faux-terminal
  decoration (no fake terminal window, R-06).

## Motion (R-19 purposes; MOTION 3)

React Bits components used, each with a job:

| Component | Where | Purpose |
|---|---|---|
| Aurora (ogl, amber stops) | hero bg | "intelligence field" behind the name; brand aurora, not default purple |
| SplitText | hero name | the name is the product; letters assemble like a system boot |
| DecryptedText | hero role | cipher-decode = AI engineer identity, once on view |
| StarBorder + ClickSpark | primary CTA only | single focal CTA; spark = click feedback (dose: 2 buttons total, R-13 respected) |
| CountUp | stats band | numbers earn attention by moving once, on view |
| ScrollReveal | about statement | one big statement decodes on scroll; the page's breath |
| GradientText (amber) | PINTER title | flagship hierarchy mark (R-01 gradient w/ purpose) |
| TrueFocus | flagship subhead | camera focus walks the "nine agents" sentence |
| SpotlightCard | agent cards (flagship) | pointer spotlight = "inspect the work", cursor-driven hierarchy |
| PixelCard | project cards | amber pixel bloom on hover/focus: texture differs from flagship cards so sections read distinct (RHYTHM 3); focus trigger keeps it keyboard-alive (R-32) |
| LightRays (ogl) | flagship bg + case-page hero | flagship section gets the light; case pages get a dimmer static variant (no follow-mouse, opacity .45) so reading pages stay calm (MOTION 2) |
| AnimatedContent / FadeContent | section entries | scroll reveals, staggered, one system |
| DotGrid | skills bg | interactive data-grid = data-infrastructure identity (R-07 pattern with reason) |
| RotatingText | Now section | current focus rotates; live-status feel without fake feeds |
| ShinyText | Now eyebrow | draws eye to the one live label |
| Particles (ogl) | contact bg | closing energy, interactive, amber |
| SplitText | case-page title | hero-name motif reused once per detail page; identity continuity |
| AnimatedContent (horizontal, alternating) | case-page blocks | left/right drift gives long reading pages rhythm without noise |
| SpotlightCard | case-page related chips | same "inspect" texture as agent cards, marks them as links |
| ClickSpark | case-page email CTA | one spark per page, on the single conversion action (dose cap kept) |

Skipped on purpose: Hyperspeed (three.js weight, off-brand), Threads /
Iridescence (dose cap: 4 canvas bgs is the ceiling), Dock (nav exists),
MagnetLines (contact already interactive via Particles; two adjacent
interactive backgrounds = noise),
MagicBento / ChromaCard / TiltedCard / Stack / Carousel (image-based; owner
provided no images, R-23 no fabricated visuals), ScrambleText (DecryptedText
already owns the cipher motif; one motif, repeated, not stacked).

`prefers-reduced-motion`: global CSS kills transitions/animations; canvas
backgrounds (Aurora, Particles, LightRays, DotGrid) unmount via
`useReducedMotion` from `motion/react` (C-4).

No WebGL (old/locked-down browsers, headless): `webglSupported()` probe in
`src/lib/webgl.ts` unmounts the ogl backgrounds instead of crashing; hero
keeps a CSS radial amber fallback so it never looks dead (C-4).

## Layout & rhythm (R-05)

Left-aligned asymmetric hero (not centered template). Stat band = horizontal
mono strip, not 4 identical cards (6 stats, varied). Projects = asymmetric
grid: 2 wide + 4 narrow across 12 columns, hierarchy by size (R-14), perfectly
filled with zero gaps. Experience = left-rail
timeline, no icons-in-circles. Certifications = mono table rows, not cards.
Skills = wall of grouped columns + CSS marquee ticker. Contact = full-bleed
canvas moment. Section spacing varies (tight band after hero, wide gaps
around flagship).

## Home/detail split (owner request)

Home cards are teasers: trimmed copy, full stories live on `/projects/:slug`,
`/agents/:slug`, `/experience/:slug` case pages (`src/data/caseStudies.ts`).
Every clickable card carries a visible cue: overlay `card-link` (single tab
stop, R-26/R-32) plus a mono `card-cta` chip ("Case study" / "Agent detail" /
"Full detail") with an arrow. R-08 purpose: the arrow is a navigation
direction cue that tells visitors the whole card is a link, not decoration;
it appears exactly on card links, nowhere else. Case pages: quiet LightRays
hero, SplitText title, meta grid, alternating-drift blocks, pipeline rail
(timeline motif reuse), SpotlightCard related chips, one ClickSpark CTA.
Reading pages run MOTION 2: entry animations only, nothing loops.

## Assets (R-23)

- Logo: `W` text glyph, amber on black (SVG favicon + nav mark). Owner
  approved. No invented illustrations/avatars.
- Resume: real `public/resume.pdf`, generated from CV content via headless
  Chrome print. Owner approved download button.
- Phone number: intentionally NOT shown (owner decision).
- No og:image (no real asset to use; text OG tags only).

## Copy rules

Marketing voice per owner request, within R-16/R-02: no em dash, no
"seamless/revolutionary/AI-powered/cutting-edge", no generic CTAs. Every
number traces to `windiarta_info`. Claims stay at CV level of detail (owner
confirmed no NDA issue, no invented extras).
