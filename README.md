# Karel Zíbar — Portfolio

Personal portfolio site for a senior frontend developer: dark, techy, minimal — built to demonstrate frontend craft, not just describe it.

## Stack

- **Next.js** (App Router) + **TypeScript**
- **Tailwind 4** for styling
- **Framer Motion** — parallax hero, scroll-driven timeline, reveals, micro-interactions
- **TanStack Query** — live GitHub stats widget
- **Resend** — contact form email delivery via `/api/contact`
- Custom lightweight CZ/EN i18n context persisted in `localStorage`

## Development

```bash
npm install
npm run dev
```

## Contact form

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (plus optional `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL`). Without a key the API route responds 503 and the form shows the fallback error with direct contact info.

## Image slots

Two images are optional and picked up automatically at build time when dropped into `public/`:

- `public/headshot.jpg` — About-section portrait (duotone treatment applied in CSS); a styled monogram placeholder renders until then
- `public/case-tesarstvi.jpg` — screenshot for the jachim-kucera-tesarstvi.cz case card; a CSS mockup renders until then

The Z.I.B.B.Y section has a documented media slot in `src/components/sections/Zibby.tsx` for a future demo video.

## Deploy

Vercel — no special configuration; set the Resend env vars in the project settings. After the first deploy, set `NEXT_PUBLIC_SITE_URL` (or update `metadataBase` in `src/app/layout.tsx`) to the production domain so Open Graph image URLs resolve absolutely.

## Build notes

Phase-by-phase build log lives in `PROGRESS.md`. Local agent skills used during the build are in `.agents/skills/`.
