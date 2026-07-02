"use client";

import { useState, type FormEvent } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { contactInfo } from "@/lib/i18n/dictionaries";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-sm border hairline bg-panel px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent/60";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const form = t.contact.form;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const data = Object.fromEntries(new FormData(formElement).entries());
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("success");
      formElement.reset();
    } catch {
      setStatus("error");
    }
  }

  const directLinks = [
    {
      href: `mailto:${contactInfo.email}`,
      label: contactInfo.email,
      Icon: MailIcon,
    },
    {
      href: `tel:${contactInfo.phoneHref}`,
      label: contactInfo.phone,
      Icon: PhoneIcon,
    },
    {
      href: contactInfo.linkedin,
      label: contactInfo.linkedinLabel,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      href: contactInfo.github,
      label: contactInfo.githubLabel,
      Icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <Section id="contact">
      <SectionHeading path="contact" title={t.contact.title} />
      <Reveal delay={0.05}>
        <p className="mt-6 max-w-xl text-lg text-ghost">{t.contact.lead}</p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block font-mono text-xs text-ghost"
                >
                  {form.name}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  maxLength={200}
                  autoComplete="name"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block font-mono text-xs text-ghost"
                >
                  {form.email}
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={320}
                  autoComplete="email"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-type"
                className="mb-2 block font-mono text-xs text-ghost"
              >
                {form.inquiryType}
              </label>
              <select
                id="contact-type"
                name="inquiryType"
                required
                defaultValue="job"
                className={inputClasses}
              >
                {form.inquiryOptions.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="bg-panel text-ink"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block font-mono text-xs text-ghost"
              >
                {form.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                maxLength={5000}
                className={`${inputClasses} resize-y`}
              />
            </div>

            {/* Honeypot — hidden from real users, catches naive bots */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-sm border border-accent/60 bg-accent/10 px-6 py-3 font-mono text-sm text-accent transition-all duration-300 hover:bg-accent hover:text-void hover:glow-accent disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? form.sending : form.submit}
              </button>
              <p role="status" aria-live="polite" className="font-mono text-xs">
                {status === "success" && (
                  <span className="text-accent">{form.success}</span>
                )}
                {status === "error" && (
                  <span className="text-red-400">{form.error}</span>
                )}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <h3 className="font-mono text-sm text-faint">
            {t.contact.directTitle}
          </h3>
          <ul className="mt-5 space-y-4">
            {directLinks.map(({ href, label, Icon, external }) => (
              <li key={href}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group inline-flex items-center gap-3 text-sm text-ghost transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  <span className="font-mono">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
