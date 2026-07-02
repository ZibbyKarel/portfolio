"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function Skills() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <Section id="stack">
      <SectionHeading path="stack" title={t.skills.title} />
      <div className="mt-14 space-y-12">
        {t.skills.groups.map((group, groupIndex) => (
          <div
            key={group.label}
            className="grid items-baseline gap-4 md:grid-cols-[220px_1fr]"
          >
            <p className="font-mono text-sm text-faint">
              <span aria-hidden="true" className="text-accent">
                {"// "}
              </span>
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-3">
              {group.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 14,
                    scale: reduceMotion ? 1 : 0.92,
                  }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-48px" }}
                  transition={{
                    duration: reduceMotion ? 0.2 : 0.45,
                    delay: groupIndex * 0.08 + itemIndex * 0.05,
                    ease: EASE,
                  }}
                >
                  <span className="inline-block rounded-full border hairline bg-panel px-4 py-1.5 font-mono text-sm text-ghost transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-ink hover:glow-accent-soft">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
