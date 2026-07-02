# Portfolio Build Progress

Source specs: `claude-code-prompt.md` (final prompt — wins on conflicts) + `portfolio-brief.md`.

## Decisions

- **Styling**: Tailwind 4 (per `claude-code-prompt.md`; overrides the brief's styled-components).
- **Accent**: electric cyan (`#00D4FF` family) — doubles as terminal cue for Z.I.B.B.Y; used only for glow/hover/CTA/timeline nodes.
- **Background**: near-black with blue/violet undertone (`#0A0A0F`).
- **Type**: Geist (body/display) + JetBrains Mono (labels, tags, terminal accents).
- **i18n**: lightweight custom CZ/EN context + localStorage (brief explicitly allows; avoids next-intl overhead for 2 locales).
- **Animation**: Framer Motion only (`useScroll`/`useTransform` covers the parallax + timeline draw); GSAP not needed.
- **Contact**: Next.js API route + Resend (`RESEND_API_KEY` env; graceful error without it).
- **TanStack Query**: powers the live GitHub stats widget (public API, degrades gracefully).
- **Headshot & case-study screenshot**: no source assets in repo — built as styled placeholders (duotone frame / CSS browser mockup) with drop-in slots; swap real images later.
- **Local tooling installed**: `.agents/skills/frontend-design`, `.agents/skills/vercel-react-best-practices` (symlinked into `.claude/skills/`).

## Phases

- [x] **Phase 0 — Setup**: local skills installed, progress file, Next.js (App Router) + TS + Tailwind 4 scaffold, deps (framer-motion, @tanstack/react-query, resend)
- [x] **Phase 1 — Design system + i18n**: theme tokens, fonts, global styles, CZ/EN dictionaries + context + header toggle, motion primitives w/ `prefers-reduced-motion`
- [x] **Phase 2 — Hero + About**: full-viewport hero w/ animated background + parallax, scroll cue; About w/ duotone headshot slot
- [x] **Phase 3 — Timeline**: scroll-driven line draw, glowing nodes, expandable highlights, newest-first
- [x] **Phase 4 — Skills + What I Do**: grouped animated stack pills; 4 pillar cards incl. jachim-kucera-tesarstvi.cz case card + kzphoto.cz teaser
- [x] **Phase 5 — Z.I.B.B.Y + Contact + Footer**: terminal-style spotlight (media-extensible), contact form → API route → Resend, direct contact fallback, minimal footer
- [x] **Phase 6 — Polish**: a11y audit, reduced-motion audit, perf (lazy below-fold), metadata/OG, GitHub stats widget, production build verification

## Verification (Phase 6)

- Production build + ESLint clean; page, `/api/contact` (400/503/200 honeypot), `/opengraph-image`, `/icon`, `/robots.txt` all smoke-tested against `next start`
- Screenshot QA via headless Chromium: desktop (all 7 sections), mobile 390px (hero/timeline/services/contact), CZ locale toggle incl. Czech typing animation

## Follow-ups for Karel

- Drop `public/headshot.jpg` and `public/case-tesarstvi.jpg` to replace styled placeholders (picked up automatically)
- Set `RESEND_API_KEY` (+ optional `CONTACT_FROM_EMAIL`/`CONTACT_TO_EMAIL`) in Vercel for the contact form
- After first deploy, set `NEXT_PUBLIC_SITE_URL` to the production domain for absolute OG URLs
- Z.I.B.B.Y demo video slot is documented in `src/components/sections/Zibby.tsx`

One commit per completed phase.
