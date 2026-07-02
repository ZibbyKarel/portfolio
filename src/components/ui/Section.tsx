import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-5xl scroll-mt-24 border-t hairline px-6 py-24 md:py-36 ${className}`}
    >
      {children}
    </section>
  );
}
