"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { TimelineEntry } from "@/lib/i18n/dictionaries";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

// Career draws in the signature cyan, education in violet. Tailwind needs
// the class names spelled out, hence the static map instead of interpolation.
type Tone = "accent" | "violet";

const TONES: Record<
  Tone,
  {
    dotOpen: string;
    dotClosed: string;
    hoverTitle: string;
    marker: string;
    rail: string;
    trackTitle: string;
  }
> = {
  accent: {
    dotOpen: "border-accent bg-accent glow-accent",
    dotClosed: "border-accent/60 bg-void glow-accent-soft",
    hoverTitle: "group-hover:text-accent",
    marker: "text-accent",
    rail: "from-accent via-accent to-accent/30",
    trackTitle: "text-accent",
  },
  violet: {
    dotOpen: "border-violet bg-violet glow-violet",
    dotClosed: "border-violet/60 bg-void glow-violet-soft",
    hoverTitle: "group-hover:text-violet",
    marker: "text-violet",
    rail: "from-violet via-violet to-violet/30",
    trackTitle: "text-violet",
  },
};

function TimelineNode({
  entry,
  tone,
  contentId,
  open,
  onToggle,
  onHover,
}: {
  entry: TimelineEntry;
  tone: Tone;
  contentId: string;
  open: boolean;
  onToggle: () => void;
  onHover: (hovering: boolean) => void;
}) {
  const reduceMotion = useReducedMotion();
  const tones = TONES[tone];
  const expandable = entry.bullets.length > 0;

  const heading = (
    <>
      <p className="font-mono text-xs tracking-wider text-faint">
        {entry.period}
      </p>
      <h3
        className={`mt-1.5 text-xl font-semibold tracking-tight text-ink transition-colors md:text-2xl ${tones.hoverTitle}`}
      >
        {entry.company}
      </h3>
      <p className="mt-0.5 font-mono text-sm text-ghost">{entry.role}</p>
    </>
  );

  return (
    <motion.li
      initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-96px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: EASE }}
      className="relative pl-12 pb-4 md:pl-20"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      {/* Node dot sits on the rail; glows once its entry is in view */}
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-96px" }}
        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
        className={`absolute left-[9px] top-2.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 md:left-[21px] ${
          open && expandable ? tones.dotOpen : tones.dotClosed
        }`}
      />

      {expandable ? (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={contentId}
          className="group w-full rounded-sm py-1 text-left"
        >
          {heading}
        </button>
      ) : (
        <div className="group py-1">{heading}</div>
      )}

      <AnimatePresence initial={false}>
        {expandable && open && (
          <motion.div
            id={contentId}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, height: "auto" }
            }
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2 pb-2">
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-relaxed text-ghost"
                >
                  <span
                    aria-hidden="true"
                    className={`font-mono ${tones.marker}`}
                  >
                    ▸
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function TimelineTrack({
  trackId,
  title,
  entries,
  tone,
  defaultPinned,
}: {
  trackId: string;
  title: string;
  entries: TimelineEntry[];
  tone: Tone;
  defaultPinned: number | null;
}) {
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(defaultPinned);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const tones = TONES[tone];

  // The connecting line draws as the list scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.55"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <div className="mt-14 first:mt-0">
      <h3
        className={`font-mono text-sm uppercase tracking-[0.25em] ${tones.trackTitle}`}
      >
        {title}
      </h3>

      <ol ref={listRef} className="relative mt-8 space-y-10">
        {/* Rail: faint track + tone-colored line that draws with scroll */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[15px] top-2 w-px bg-line md:left-[27px]"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: reduceMotion ? 1 : lineProgress }}
          className={`absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b md:left-[27px] ${tones.rail}`}
        />

        {entries.map((entry, index) => (
          <TimelineNode
            key={`${entry.company}-${entry.period}`}
            entry={entry}
            tone={tone}
            contentId={`timeline-${trackId}-details-${index}`}
            open={pinnedIndex === index || hoverIndex === index}
            onToggle={() =>
              setPinnedIndex((current) => (current === index ? null : index))
            }
            onHover={(hovering) => setHoverIndex(hovering ? index : null)}
          />
        ))}
      </ol>
    </div>
  );
}

export function Timeline() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading path="experience" title={t.timeline.title} />
      <p className="mt-4 font-mono text-xs text-faint">
        {t.timeline.expandHint}
      </p>

      <div className="mt-14">
        <TimelineTrack
          trackId="career"
          title={t.timeline.careerTitle}
          entries={t.timeline.career}
          tone="accent"
          defaultPinned={0}
        />
        <TimelineTrack
          trackId="education"
          title={t.timeline.educationTitle}
          entries={t.timeline.education}
          tone="violet"
          defaultPinned={null}
        />
      </div>
    </Section>
  );
}
