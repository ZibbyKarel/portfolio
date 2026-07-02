"use client";

import { GitHubStats } from "@/components/GitHubStats";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import { Logo } from "../Logo";

/**
 * Headshot with a duotone treatment: grayscale + contrast underneath,
 * accent tint blended on top. Falls back to a styled monogram until
 * /public/headshot.jpg exists (hasPhoto is resolved at build time).
 */
function Headshot({ hasPhoto, alt }: { hasPhoto: boolean; alt: string }) {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border hairline bg-panel">
      {hasPhoto ? (
        <>
          <Image
            src="/headshot.jpg"
            alt={alt}
            fill
            sizes="(min-width: 768px) 24rem, 100vw"
            className="object-cover grayscale contrast-125"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-[#5b4bd4]/60 via-transparent to-accent/50 mix-blend-color"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-void/20" />
        </>
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-panel-bright via-panel to-void"
        >
          <span
            aria-hidden="true"
            className="font-mono text-6xl font-bold text-ink/20"
          >
            <Logo />
          </span>
        </div>
      )}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-accent/60"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-accent/60"
      />
    </div>
  );
}

export function About({ hasPhoto }: { hasPhoto: boolean }) {
  const { t } = useLanguage();

  return (
    <Section id="about">
      <SectionHeading path="about" title={t.about.title} />
      <div className="mt-14 grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-ghost md:text-xl">
            {t.about.body}
          </p>
          <GitHubStats />
        </Reveal>
        <Reveal
          delay={0.2}
          className="w-full max-w-sm justify-self-center md:justify-self-end"
        >
          <Headshot hasPhoto={hasPhoto} alt={t.about.photoAlt} />
        </Reveal>
      </div>
    </Section>
  );
}
