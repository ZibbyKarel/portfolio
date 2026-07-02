"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function Card({
  title,
  body,
  visual,
  linkLabel,
  href,
  external = false,
  delay,
}: {
  title: string;
  body: string;
  visual?: ReactNode;
  linkLabel: string;
  href: string;
  external?: boolean;
  delay: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col rounded-md border hairline bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:glow-accent-soft">
        <h3 className="text-xl font-semibold tracking-tight text-ink">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ghost">{body}</p>
        {visual && <div className="mt-5">{visual}</div>}
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-accent transition-transform duration-300 group-hover:translate-x-1"
        >
          <span aria-hidden="true">→</span>
          {linkLabel}
        </a>
      </article>
    </Reveal>
  );
}

/** Abstract page skeleton for the carpentry case card — warm wood tones. */
function CarpentryMock({ hasScreenshot, alt }: { hasScreenshot: boolean; alt: string }) {
  return (
    <BrowserFrame url="jachim-kucera-tesarstvi.cz">
      {hasScreenshot ? (
        <div className="relative h-full">
          <Image
            src="/case-tesarstvi.jpg"
            alt={alt}
            fill
            sizes="24rem"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex h-full flex-col gap-2 bg-gradient-to-br from-[#2a2118] to-[#171310] p-4">
          <div className="h-3 w-2/5 rounded-sm bg-[#c9a06a]/60" />
          <div className="h-2 w-3/5 rounded-sm bg-[#c9a06a]/25" />
          <div className="mt-auto grid grid-cols-3 gap-2">
            <div className="h-10 rounded-sm bg-[#c9a06a]/20" />
            <div className="h-10 rounded-sm bg-[#c9a06a]/30" />
            <div className="h-10 rounded-sm bg-[#c9a06a]/20" />
          </div>
        </div>
      )}
    </BrowserFrame>
  );
}

/** Photo-grid skeleton referencing kzphoto.cz without embedding any images. */
function PhotoMock() {
  return (
    <BrowserFrame url="kzphoto.cz">
      <div className="grid h-full grid-cols-3 gap-1.5 bg-void/60 p-3">
        {[35, 20, 45, 25, 50, 30].map((tone, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              background: `linear-gradient(135deg, rgb(255 255 255 / ${tone / 400}), rgb(255 255 255 / ${tone / 900}))`,
            }}
          />
        ))}
      </div>
    </BrowserFrame>
  );
}

/** Terminal one-liner for the Z.I.B.B.Y card. */
function ZibbyMock() {
  return (
    <div
      aria-hidden="true"
      className="rounded-md border hairline bg-void/80 px-4 py-3 font-mono text-sm text-ghost"
    >
      <span className="text-accent">~ %</span> zibby --wake
      <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-accent motion-safe:animate-pulse" />
    </div>
  );
}

/** Quick facts strip for the core-craft card. */
function CraftMock() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-wrap gap-x-5 gap-y-1 rounded-md border hairline bg-void/80 px-4 py-3 font-mono text-sm text-ghost"
    >
      <span>
        <span className="text-accent">12+</span> yrs
      </span>
      <span>
        <span className="text-accent">2×</span> unicorn
      </span>
      <span>
        <span className="text-accent">10⁶+</span> users
      </span>
    </div>
  );
}

export function Services({ hasCaseScreenshot }: { hasCaseScreenshot: boolean }) {
  const { t } = useLanguage();
  const cards = t.services.cards;

  return (
    <Section id="services">
      <SectionHeading path="services" title={t.services.title} />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Card
          title={cards.frontend.title}
          body={cards.frontend.body}
          visual={<CraftMock />}
          linkLabel={cards.frontend.link}
          href="#experience"
          delay={0}
        />
        <Card
          title={cards.websites.title}
          body={cards.websites.body}
          visual={
            <div>
              <CarpentryMock
                hasScreenshot={hasCaseScreenshot}
                alt={cards.websites.caseDescription}
              />
              <p className="mt-2 font-mono text-xs text-faint">
                {cards.websites.caseTitle} — {cards.websites.caseDescription}
              </p>
            </div>
          }
          linkLabel={cards.websites.caseLink}
          href="https://jachim-kucera-tesarstvi.cz/"
          external
          delay={0.1}
        />
        <Card
          title={cards.photography.title}
          body={cards.photography.body}
          visual={<PhotoMock />}
          linkLabel={cards.photography.link}
          href="https://www.kzphoto.cz"
          external
          delay={0.15}
        />
        <Card
          title={cards.zibby.title}
          body={cards.zibby.body}
          visual={<ZibbyMock />}
          linkLabel={cards.zibby.link}
          href="#zibby"
          delay={0.25}
        />
      </div>
    </Section>
  );
}
