"use client";

import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
// Spring that lets the cursor light trail rather than snap to the pointer.
const CURSOR_SPRING = { stiffness: 140, damping: 22, mass: 0.4 } as const;

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Background scrolls slower than content, content drifts up and fades out.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Cursor-reactive spotlight. Position is tracked as a percentage of the
  // hero box so it stays correct at any viewport size; springs smooth the
  // motion and `glow` fades the whole effect in/out as the pointer enters
  // and leaves. Values start centred so the first move eases in gently.
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const x = useSpring(pointerX, CURSOR_SPRING);
  const y = useSpring(pointerY, CURSOR_SPRING);
  const glow = useSpring(0, { stiffness: 90, damping: 24 });

  const spotlight = useMotionTemplate`radial-gradient(460px circle at ${x}% ${y}%, rgb(0 212 255 / 0.10), transparent 62%)`;
  const litMask = useMotionTemplate`radial-gradient(240px circle at ${x}% ${y}%, black, transparent 68%)`;

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
    glow.set(1);
  };
  const handlePointerLeave = () => glow.set(0);

  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0.2 : 0.7, delay, ease: EASE },
  });

  return (
    <section
      ref={ref}
      aria-label={t.hero.name}
      onPointerMove={reduceMotion ? undefined : handlePointerMove}
      onPointerLeave={reduceMotion ? undefined : handlePointerLeave}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <div className="absolute inset-0 dot-grid" />
        <div className="absolute left-[8%] top-[12%] h-[45vmax] w-[45vmax] rounded-full bg-accent/[0.05] blur-3xl motion-safe:animate-[drift-a_26s_ease-in-out_infinite_alternate]" />
        <div className="absolute bottom-[8%] right-[4%] h-[38vmax] w-[38vmax] rounded-full bg-[#5b4bd4]/[0.07] blur-3xl motion-safe:animate-[drift-b_32s_ease-in-out_infinite_alternate]" />
      </motion.div>

      {/* Cursor-reactive layer: a soft cyan spotlight plus the dot grid
          lighting up in accent colour, both trailing the pointer. Kept out
          of the parallax wrapper so it stays glued to the real cursor, and
          skipped entirely when the user prefers reduced motion. */}
      {!reduceMotion && (
        <motion.div aria-hidden="true" className="absolute inset-0" style={{ opacity: glow }}>
          <motion.div className="absolute inset-0" style={{ background: spotlight }} />
          <motion.div
            className="absolute inset-0 dot-grid-lit"
            style={{ maskImage: litMask, WebkitMaskImage: litMask }}
          />
        </motion.div>
      )}

      <motion.div
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          {...enter(0.1)}
          aria-hidden="true"
          className="font-mono text-sm text-ghost"
        >
          <span className="text-accent">~ %</span> whoami
        </motion.p>
        <motion.h1
          {...enter(0.25)}
          className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          {t.hero.name}
        </motion.h1>
        <motion.p
          {...enter(0.4)}
          className="mt-5 font-mono text-sm uppercase tracking-[0.25em] text-accent sm:text-base"
        >
          {t.hero.role}
        </motion.p>
        <motion.p
          {...enter(0.55)}
          className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-ghost"
        >
          {t.hero.tagline}
        </motion.p>
        <motion.a
          {...enter(0.7)}
          href="/cv.pdf"
          download="karel-zibar-cv.pdf"
          className="mt-10 inline-flex items-center gap-3 rounded-sm border border-accent/40 px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:border-accent hover:glow-accent-soft"
        >
          <span aria-hidden="true">↓</span>
          {t.hero.downloadCv}
        </motion.a>
      </motion.div>

      <motion.a
        {...enter(1.1)}
        href="#about"
        className="absolute bottom-8 z-10 flex flex-col items-center gap-3 font-mono text-xs text-faint transition-colors hover:text-accent"
      >
        {t.hero.scrollCue}
        <motion.span
          aria-hidden="true"
          className="block h-10 w-px bg-gradient-to-b from-accent to-transparent"
          animate={reduceMotion ? undefined : { scaleY: [1, 0.55, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.a>
    </section>
  );
}
