import Image from "next/image";
import type { ReactNode } from "react";
import { TrackedLink } from "@/components/tracked-link";
import type { AnalyticsEventName } from "@/lib/analytics";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
    eventName: AnalyticsEventName;
  };
  secondaryCta?: {
    href: string;
    label: string;
    eventName: AnalyticsEventName;
  };
  image?: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
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
            <TrackedLink
              href={primaryCta.href}
              location="hero"
              eventName={primaryCta.eventName}
              className="inline-flex items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-copper-strong"
            >
              {primaryCta.label}
            </TrackedLink>
            {secondaryCta ? (
              <TrackedLink
                href={secondaryCta.href}
                location="hero"
                eventName={secondaryCta.eventName}
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
              >
                {secondaryCta.label}
              </TrackedLink>
            ) : null}
          </div>
        </div>
        {image ? (
          <div className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-copper/20 shadow-soft sm:min-h-96 lg:min-h-[28rem]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Beton amprentat STK
              </p>
              <p className="mt-2 font-display text-2xl font-semibold tracking-normal">
                Lucrări curate, pregătite pentru utilizare zilnică.
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-[1.75rem] border border-copper/20 bg-gradient-to-br from-copper/18 via-transparent to-background p-6">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Soluție potrivită pentru proprietari care caută un finisaj rezistent,
              ușor de întreținut și coerent vizual, fără să aglomereze spațiul.
            </p>
            <div className="mt-6 h-px bg-border" />
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-copper">
              Execuție curată. Comunicare clară. Acoperire națională.
            </p>
          </div>
        )}
      </div>
      {children ? <div className="mt-8">{children}</div> : null}
    </div>
  );
}
