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

function TimelineNode({
  entry,
  index,
  open,
  onToggle,
  onHover,
}: {
  entry: TimelineEntry;
  index: number;
  open: boolean;
  onToggle: () => void;
  onHover: (index: number | null) => void;
}) {
  const reduceMotion = useReducedMotion();
  const contentId = `timeline-details-${index}`;

  return (
    <motion.li
      initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-96px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.55, ease: EASE }}
      className="relative pl-12 pb-4 md:pl-20"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Node dot sits on the rail; glows once its entry is in view */}
      <motion.span
        aria-hidden="true"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-96px" }}
        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
        className={`absolute left-[9px] top-2.5 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 md:left-[21px] ${
          open
            ? "border-accent bg-accent glow-accent"
            : "border-accent/60 bg-void glow-accent-soft"
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={contentId}
        className="group w-full rounded-sm py-1 text-left"
      >
        <p className="font-mono text-xs tracking-wider text-faint">
          {entry.period}
        </p>
        <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent md:text-2xl">
          {entry.company}
        </h3>
        <p className="mt-0.5 font-mono text-sm text-ghost">{entry.role}</p>
      </button>

      <AnimatePresence initial={false}>
        {open && (
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
                  <span aria-hidden="true" className="font-mono text-accent">
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

export function Timeline() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
    <Section id="experience">
      <SectionHeading path="experience" title={t.timeline.title} />
      <p className="mt-4 font-mono text-xs text-faint">
        {t.timeline.expandHint}
      </p>

      <ol ref={listRef} className="relative mt-14 space-y-10">
        {/* Rail: faint track + accent line that draws with scroll */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[15px] top-2 w-px bg-line md:left-[27px]"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: reduceMotion ? 1 : lineProgress }}
          className="absolute bottom-2 left-[15px] top-2 w-px origin-top bg-gradient-to-b from-accent via-accent to-accent/30 md:left-[27px]"
        />

        {t.timeline.entries.map((entry, index) => (
          <TimelineNode
            key={entry.company}
            entry={entry}
            index={index}
            open={pinnedIndex === index || hoverIndex === index}
            onToggle={() =>
              setPinnedIndex((current) => (current === index ? null : index))
            }
            onHover={setHoverIndex}
          />
        ))}
      </ol>
    </Section>
  );
}
