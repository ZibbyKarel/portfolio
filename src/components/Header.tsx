"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/dictionaries";
import { Logo } from "./Logo";

const NAV_IDS = [
  "about",
  "experience",
  "stack",
  "services",
  "zibby",
  "contact",
] as const;

export function Header() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm text-ink transition-colors hover:text-accent"
          aria-label="Karel Zíbar — top of page"
        >
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {NAV_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="font-mono text-xs text-ghost transition-colors hover:text-ink"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div
          role="group"
          aria-label={t.langToggle}
          className="flex items-center gap-1 font-mono text-xs"
        >
          {(["en", "cs"] as Locale[]).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={locale === code}
              className={`rounded-sm px-2 py-1 uppercase transition-colors ${
                locale === code ? "text-accent" : "text-faint hover:text-ghost"
              }`}
            >
              {code === "cs" ? "cz" : "en"}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
