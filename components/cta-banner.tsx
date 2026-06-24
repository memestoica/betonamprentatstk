import { TrackedLink } from "@/components/tracked-link";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
};

export function CtaBanner({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CtaBannerProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-copper/20 bg-gradient-to-br from-copper/14 via-card to-card p-6 shadow-soft sm:p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
          Contact direct
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <TrackedLink
          href={primaryCta.href}
          location="footer"
          className="inline-flex items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-copper-strong"
        >
          {primaryCta.label}
        </TrackedLink>
        <TrackedLink
          href={secondaryCta.href}
          location="footer"
          className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
        >
          {secondaryCta.label}
        </TrackedLink>
      </div>
    </div>
  );
}
