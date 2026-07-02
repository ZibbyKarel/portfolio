"use client";

import { Reveal } from "./Reveal";

/**
 * Section header with the site's terminal-path motif: a mono `~/path`
 * eyebrow (kept untranslated — it's UI chrome, not copy) above a large title.
 */
export function SectionHeading({
  path,
  title,
}: {
  path: string;
  title: string;
}) {
  return (
    <Reveal>
      <p aria-hidden="true" className="font-mono text-sm text-accent">
        ~/{path}
      </p>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
