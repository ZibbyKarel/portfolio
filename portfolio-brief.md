# Karel Zíbar — Portfolio Website Brief

_Spec document for building with Claude Code / Fable 5_

## 1. Goal

Personal portfolio site that does three things at once:

1. Presents Karel as a senior frontend developer (12+ yrs, React/TS/Next.js/Node/Tanstack ecosystem).
2. Signals side-skills that widen the funnel: custom website builds for clients, photography (kzphoto.cz), and hands-on AI agent engineering (building Z.I.B.B.Y).
3. Converts visitors into leads — via contact form — for freelance/custom-site work, not just as a job-hunting page.

Should not feel like a static CV. It should _demonstrate_ frontend craft through the build itself (animation, motion, interaction quality is part of the pitch).

## 2. Tech Stack

- **Next.js** (App Router) + **TypeScript**
- **Styled-Components** for styling
- **Tanstack** (Query at minimum — e.g. for a live GitHub stats widget; Table not needed here)
- Animation: **Framer Motion** for scroll reveals/timeline/micro-interactions. Consider **GSAP + ScrollTrigger** if parallax layering gets complex (Framer Motion's `useScroll`/`useTransform` may suffice for most of it — decide during build).
- **NX** monorepo not required for a single site — plain Next.js app is enough unless Karel wants it inside an existing NX workspace.
- i18n: `next-intl` or a lightweight custom CZ/EN context — avoid over-engineering for two locales.
- Contact form: simple API route + email service (e.g. Resend) or a form backend (Formspree) to avoid building a mail server.
- Deploy target: Vercel (default assumption, confirm before build).

## 3. Design Direction

**Dark, techy, minimal.**

- Near-black background (`#0a0a0a`–`#111`), not pure black — subtle warmth or a faint blue/violet undertone works well with code-adjacent aesthetics.
- One accent color, used sparingly (glow on hover, timeline nodes, CTA button, cursor trail) — suggest an electric green, cyan, or violet that can also double as a "terminal" cue given the Z.I.B.B.Y angle.
- Typography: a clean grotesk/sans for body (Inter, Geist, Satoshi) + a monospace for accents (labels, tech tags, code-style Easter eggs) — e.g. JetBrains Mono or Geist Mono.
- Generous negative space, large type for section headers, restrained borders/dividers (hairline, low-opacity).
- Motion should read as _precise_, not gimmicky: subtle parallax on hero/background layers, scroll-triggered fade/slide reveals per section, an animated timeline that draws itself in as you scroll, magnetic/hover micro-interactions on buttons and project cards.
- Respect `prefers-reduced-motion`.

## 4. Site Structure & Copy

### 4.1 Hero

Full-viewport. Subtle animated/parallax background (particle field, gradient mesh, or faint animated grid — techy, not distracting). Name + role + one-line pitch + scroll cue.

- **EN:** "Karel Zíbar — Senior Frontend Developer. 12+ years building interfaces for products used by millions — now building my own AI agent OS on the side."
- **CZ:** "Karel Zíbar — Senior Frontend Developer. 12+ let stavím rozhraní pro produkty s miliony uživatelů — a vedle toho si stavím vlastní AI agentní OS."

No availability/CTA badge — hero stays focused on the pitch, not job status.

### 4.2 About

Short, personal, first-person — not a copy of the CV summary.

- **EN draft:** "I'm a frontend developer who's spent over a decade shipping production UI — including at two companies that went on to reach unicorn status (Rohlik.cz, Mews). These days I'm expanding into backend and leaning hard into AI-assisted development. Outside of client work, I shoot photography and build custom websites for small businesses, and I'm currently building my own agentic OS, Z.I.B.B.Y."
- **CZ draft:** "Jsem frontend vývojář, který přes deset let dodává produkční UI — mimo jiné pro dvě firmy, které se staly unicorny (Rohlik.cz, Mews). Teď rozšiřuju znalosti směrem k backendu a hodně sázím na AI-assisted vývoj. Mimo klientskou práci fotím, tvořím weby na míru pro menší firmy a stavím si vlastní agentní OS jménem Z.I.B.B.Y."

Include headshot (from CV) — treat in duotone/high-contrast to match dark theme.

### 4.3 Animated Timeline (Experience + Education)

Core visual centerpiece. Vertical scroll-driven timeline, nodes animate in as they enter viewport, connecting line "draws" progressively. Data (chronological, newest first or oldest first — pick one, recommend newest-first since that's most relevant to visitors):

| Period            | Role                                              | Company                            | Highlights                                                                                                                                     |
| ----------------- | ------------------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 05/2023 – 04/2026 | Senior Front-end Developer                        | Mews                               | Real-time reservations timeline refactor (virtualization, lazy loading, perf); mentored juniors; drove AI adoption in dev workflow             |
| 05/2018 – 05/2023 | Senior Front-end Developer                        | Rohlik.cz                          | Storefront, checkout & payments; multi-tenant architecture across markets; large-scale refactor & modernization; strong unit/E2E coverage      |
| 06/2016 – 04/2018 | Web & App Developer                               | S9Y                                | Multi-client agency work — React, React Native, GraphQL, Node.js, PHP/Nette across Trivi (accounting), Covergo (insurance), Workpress Aviation |
| 07/2014 – 06/2016 | Fullstack JavaScript Developer                    | Socialbakers                       | Social media analytics platform — React, Redux, Node.js, CoffeeScript                                                                          |
| 2011 – 2017       | Software Engineering, Faculty of Applied Sciences | University of West Bohemia, Pilsen | —                                                                                                                                              |

Each node expands (on hover/click/scroll-focus) to reveal 2-3 bullet highlights — keep default state compact so the timeline reads as a shape, not a wall of text.

### 4.4 Skills

Not a boring progress-bar list. Consider a tag cloud / orbiting grid / animated marquee of stack pills: TypeScript, React, Next.js, Tanstack, Node.js, Java/Spring, Styled-Components, Unit/E2E testing, CI/CD, Automation, AI Agents. Group loosely (core frontend / tooling & delivery / branching out).

### 4.5 What I Do (pillars — beyond the day job)

Three or four cards/sections, each a clear pivot from "employee" to "person you can hire directly":

1. **Frontend Engineering** — the core craft (links back to timeline/skills).
2. **Custom Websites** — bespoke sites for small businesses/clients. Feature the most recent build: [jachim-kucera-tesarstvi.cz](https://jachim-kucera-tesarstvi.cz/) as a case card (screenshot + one-line description + link). Only case study for now.
3. **Photography** — Karel shoots and also built/runs [kzphoto.cz](https://www.kzphoto.cz) himself, so it doubles as a second custom-site example. Don't pull photos into this site — a teaser card (e.g. styled browser-frame mockup) linking out is enough.
4. **AI Agents / Z.I.B.B.Y** — spotlight section (see 4.6).

### 4.6 Z.I.B.B.Y Spotlight

This is the most "wow" section — worth its own visual treatment (terminal-style animation, typing effect, glowing chat-bubble UI, or a CSS/SVG architecture diagram — not a real screenshot). No screenshots/demo exist yet; video may be added later, so keep the section structured to be easy to extend with media down the line. Placeholder copy:

- **EN:** "I'm building Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — my own agentic OS for everyday tasks. It's where I experiment with what AI-native software actually feels like to use."
- **CZ:** "Stavím si Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — vlastní agentní OS pro každodenní úkoly. Je to prostor, kde zkouším, jak má AI-native software skutečně fungovat."

### 4.7 Contact

Form fields: name, email, message, optional "type of inquiry" (job opportunity / custom website / photography / other). Submit via API route → email service. Include direct contact info + social links as fallback:

- Email: zibbykarel@gmail.com
- Phone: +420 722 616 617
- LinkedIn: /in/karel-zíbar-36970498
- GitHub: /ZibbyKarel

### 4.8 Footer

Minimal — social icons, copyright, maybe a small "built with Next.js + a lot of coffee" line or a nod to Z.I.B.B.Y for personality.

## 5. Animation & Interaction Notes

- Hero: parallax background layer(s), subtle idle motion (not distracting).
- Section transitions: staggered fade/slide-up on scroll enter (Framer Motion `whileInView`).
- Timeline: line draws progressively tied to scroll position; nodes pop/glow as they activate.
- Buttons/cards: magnetic hover or glow-on-hover, consistent with accent color.
- Custom cursor optional (techy touch) — skip if it hurts usability/accessibility.
- Keep total motion tasteful — this is a senior dev's site, not a template showcase. Motion should support content hierarchy, not compete with it.

## 6. i18n (CZ/EN)

- Toggle in header/nav, persists via localStorage.
- All section copy needs both locales — drafts above cover hero/about/Z.I.B.B.Y; timeline bullets and pillar descriptions still need Czech translations during build (can reuse condensed CV bullets, translated to punchier web copy rather than literal CV phrasing).

## 7. Confirmed decisions

- No "available for work" messaging anywhere on the site.
- Z.I.B.B.Y section: descriptive only for now, no screenshots/demo. Video may be added later — build the section so media slots in easily.
- Only case study: jachim-kucera-tesarstvi.cz.
- Photography: no image embeds — teaser card linking out to kzphoto.cz (also built by Karel).
- Deploy: Vercel.
