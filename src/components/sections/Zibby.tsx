"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const CHAR_INTERVAL_MS = 28;
const LINE_PAUSE_MS = 420;

/**
 * Terminal window that "types" its lines once scrolled into view.
 * Under reduced motion (or after a locale switch mid-animation) it
 * simply renders all lines.
 */
function TypingTerminal({ lines }: { lines: string[] }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-96px" });
  const [progress, setProgress] = useState({ line: 0, char: 0 });

  const skipAnimation = reduceMotion ?? false;
  const done = progress.line >= lines.length;

  useEffect(() => {
    if (!inView || skipAnimation || done) return;
    const currentLine = lines[progress.line];
    const timer = setTimeout(
      () => {
        setProgress(({ line, char }) =>
          char < currentLine.length
            ? { line, char: char + 1 }
            : { line: line + 1, char: 0 },
        );
      },
      progress.char === 0 ? LINE_PAUSE_MS : CHAR_INTERVAL_MS,
    );
    return () => clearTimeout(timer);
  }, [inView, skipAnimation, done, progress, lines]);

  const visibleLines = skipAnimation
    ? lines
    : lines
        .slice(0, progress.line + 1)
        .map((line, i) =>
          i === progress.line ? line.slice(0, progress.char) : line,
        );

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-md border hairline bg-void/90 glow-accent-soft"
    >
      <div className="flex items-center gap-2 border-b hairline px-4 py-2.5">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-faint/50" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-faint/50" />
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[11px] text-faint">
          zibby — session
        </span>
      </div>
      {/* Screen readers get the full transcript; the typed version is decorative */}
      <p className="sr-only">{lines.join(" ")}</p>
      <div
        aria-hidden="true"
        className="min-h-52 space-y-2 px-5 py-4 font-mono text-sm leading-relaxed"
      >
        {(skipAnimation || inView ? visibleLines : []).map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith("$") || line.startsWith("~")
                ? "text-ink"
                : line.startsWith("»")
                  ? "text-accent"
                  : "text-ghost"
            }
          >
            {line}
            {!skipAnimation && i === visibleLines.length - 1 && !done && (
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-accent" />
            )}
          </p>
        ))}
        {(skipAnimation || done) && (
          <p className="text-ink">
            <span className="text-accent">~ %</span>
            <span className="ml-2 inline-block h-4 w-2 translate-y-0.5 bg-accent motion-safe:animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}

export function Zibby() {
  const { t } = useLanguage();

  return (
    <Section id="zibby">
      <SectionHeading path="zibby" title={t.zibby.title} />
      <div className="mt-6 grid items-start gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <Reveal delay={0.1}>
            <p className="font-mono text-sm text-accent">{t.zibby.acronym}</p>
            <p className="mt-6 text-lg leading-relaxed text-ghost">
              {t.zibby.body}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          {/* Keyed by content so a locale switch restarts the animation cleanly */}
          <TypingTerminal
            key={t.zibby.terminalLines.join("\n")}
            lines={t.zibby.terminalLines}
          />
          {/* Media slot: when a demo video exists, drop it here below the
              terminal (e.g. <video> or an embed) — the grid already
              accommodates taller content. */}
        </Reveal>
      </div>
    </Section>
  );
}
