import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <div className="hero-grid overflow-hidden rounded-[2rem] border border-border bg-card/92 p-6 shadow-soft sm:p-8 lg:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-copper-strong"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
              >
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-copper/20 bg-gradient-to-br from-copper/18 via-transparent to-background p-6">
          <p className="text-sm leading-7 text-muted sm:text-base">
            Solutie potrivita pentru proprietari care cauta un finisaj rezistent,
            usor de intretinut si coerent vizual, fara sa aglomereze spatiul.
          </p>
          <div className="mt-6 h-px bg-border" />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            Executie curata. Comunicare clara. Acoperire nationala.
          </p>
        </div>
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}
