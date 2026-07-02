"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { contactInfo } from "@/lib/i18n/dictionaries";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
        <p className="font-mono text-xs text-faint">{t.footer.tagline}</p>
        <div className="flex items-center gap-5">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ghost transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ghost transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            aria-label="Email"
            className="text-ghost transition-colors hover:text-accent"
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
