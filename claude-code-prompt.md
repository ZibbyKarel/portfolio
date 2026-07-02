Build a personal portfolio website for me, a senior frontend developer.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind 4 for styling
- Tanstack Query for any client-side data fetching (e.g. a live GitHub stats widget, if added)
- Framer Motion for animation (scroll reveals, animated timeline, parallax hero, micro-interactions). Use GSAP + ScrollTrigger instead only if a specific effect needs it.
- next-intl (or a lightweight custom context) for a CZ/EN language toggle, persisted in localStorage
- Contact form via a Next.js API route + Resend (or similar) for email delivery
- Respect prefers-reduced-motion throughout

## Design direction

Dark, techy, minimal. Near-black background (not pure black — subtle blue/violet undertone). One accent color used sparingly (electric green, cyan, or violet — pick one and use it consistently for glow/hover/CTA/timeline nodes). Clean grotesk sans for body (Inter/Geist), monospace for tags/labels/accents (JetBrains Mono/Geist Mono). Generous whitespace, large section headers, hairline low-opacity dividers. Motion should feel precise and restrained — this is a senior dev's site, not a template demo. It needs to double as a demonstration of frontend craft, not just describe it.

## Sections (in order)

**1. Hero** — full viewport, subtle animated/parallax background (particle field or animated gradient mesh, not distracting). Name: Karel Zíbar. Role: Senior Frontend Developer. Tagline (EN): "12+ years building interfaces for products used by millions — now building my own AI agent OS on the side." (CZ): "12+ let stavím rozhraní pro produkty s miliony uživatelů — a vedle toho si stavím vlastní AI agentní OS." Scroll cue at bottom. No "available for work" CTA or badge — keep the hero purely about the pitch, not job availability.

**2. About** — first-person, short. EN: "I'm a frontend developer who's spent over a decade shipping production UI — including at two companies that went on to reach unicorn status (Rohlik.cz, Mews). These days I'm expanding into backend and leaning hard into AI-assisted development. Outside of client work, I shoot photography and build custom websites for small businesses, and I'm currently building my own agentic OS, Z.I.B.B.Y." CZ: "Jsem frontend vývojář, který přes deset let dodává produkční UI — mimo jiné pro dvě firmy, které se staly unicorny (Rohlik.cz, Mews). Teď rozšiřuju znalosti směrem k backendu a hodně sázím na AI-assisted vývoj. Mimo klientskou práci fotím, tvořím weby na míru pro menší firmy a stavím si vlastní agentní OS jménem Z.I.B.B.Y." Include a headshot, treated in duotone/high-contrast to fit the dark theme.

**3. Animated timeline** — the centerpiece. Vertical, scroll-driven: connecting line draws progressively as the user scrolls, nodes animate/glow in as they enter viewport. Order newest-first. Each node is compact by default and expands (hover/click/scroll-focus) to show 2-3 highlight bullets. Data:

- 05/2023–04/2026 · Senior Front-end Developer · Mews — led refactor of a real-time reservations timeline (virtualization, lazy loading, performance); mentored junior developers; drove AI adoption in the dev workflow
- 05/2018–05/2023 · Senior Front-end Developer · Rohlik.cz — built storefront, checkout & payment integrations; multi-tenant architecture across markets; large-scale refactor & modernization; strong unit/E2E coverage
- 06/2016–04/2018 · Web & App Developer · S9Y — multi-client agency work across React, React Native, GraphQL, Node.js, PHP/Nette (clients: Trivi — accounting system, Covergo — insurance platform, Workpress Aviation — production system)
- 07/2014–06/2016 · Fullstack JavaScript Developer · Socialbakers — social media analytics platform with React, Redux, Node.js, CoffeeScript
- 2011–2017 · Software Engineering, Faculty of Applied Sciences · University of West Bohemia, Pilsen

**4. Skills** — not plain progress bars. An animated tag cloud, orbiting grid, or marquee of stack pills, loosely grouped: core frontend (TypeScript, React, Next.js, Tanstack, Styled-Components), delivery & tooling (Node.js, CI/CD, Automation, Unit/E2E testing), branching out (Java/Spring, AI Agents).

**5. What I do** — 3-4 cards pivoting from "employee" to "you can hire me directly":

- Frontend Engineering (links back to timeline/skills)
- Custom Websites — feature https://jachim-kucera-tesarstvi.cz/ as a case card with screenshot, one-line description, and link. This is the only case study for now.
- Photography — I shoot and also built/run https://www.kzphoto.cz myself (worth a one-line mention — it doubles as another custom-site example). Don't pull images into this site; just a teaser card that visually references the site (e.g. a styled browser-frame mockup or link preview) and links out.
- AI Agents / Z.I.B.B.Y — spotlight, see below

**6. Z.I.B.B.Y spotlight** — no screenshots or demo available yet (may add video later — leave the section easy to extend with media down the line). Keep it purely descriptive for now: its own visual treatment (terminal-style typing animation, glowing chat-bubble UI, or a simple architecture diagram built from CSS/SVG, not a real screenshot). EN: "I'm building Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — my own agentic OS for everyday tasks. It's where I experiment with what AI-native software actually feels like to use." CZ: "Stavím si Z.I.B.B.Y — Zestful Intuitive Brainy Butler for You — vlastní agentní OS pro každodenní úkoly. Je to prostor, kde zkouším, jak má AI-native software skutečně fungovat."

**7. Contact** — form with name, email, message, and an inquiry-type select (job opportunity / custom website / photography / other), posting to an API route that sends email. Also list direct contact info as fallback: zibbykarel@gmail.com, +420 722 616 617, LinkedIn (/in/karel-zíbar-36970498), GitHub (/ZibbyKarel).

**8. Footer** — minimal, social icons, copyright, a small personal line (e.g. a nod to Z.I.B.B.Y).

## Requirements

- Full CZ/EN translations for every section (draft the Czech copy for sections not given above, in a tone that matches the EN — punchy web copy, not literal CV phrasing)
- Fully responsive, accessible (semantic HTML, focus states, reduced-motion fallback)
- Optimize for fast initial load despite the animation-heavy hero (lazy-load below-the-fold motion, avoid layout shift)

## Deploy

Vercel.
