import type { Metadata } from "next";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { PageHero } from "@/components/page-hero";
import { TrackedLink } from "@/components/tracked-link";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact și preț estimativ",
  description:
    "Contact Beton Amprentat STK pentru preț estimativ, beton amprentat în curți, terase și alei, cu lucrări în toată România.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Contact"
        title="Contact Beton Amprentat STK"
        description="Pentru o ofertă rapidă, trimite pe WhatsApp localitatea, suprafața aproximativă și câteva poze cu zona unde dorești beton amprentat."
        primaryCta={{ href: siteConfig.whatsAppUrl, label: "WhatsApp" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
        image={{
          src: "/images/portfolio/light-stamped-concrete-pool-area.jpg",
          alt: "Zonă exterioară lângă piscină cu beton amprentat",
        }}
      />

      <section className="section-space">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <p className="text-sm text-muted">Telefon</p>
            <TrackedLink
              href={siteConfig.phoneHref}
              location="contact"
              className="mt-2 block font-semibold text-foreground hover:text-copper"
            >
              {siteConfig.phoneDisplay}
            </TrackedLink>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <p className="text-sm text-muted">WhatsApp</p>
            <TrackedLink
              href={siteConfig.whatsAppUrl}
              location="contact"
              className="mt-2 block font-semibold text-foreground hover:text-copper"
            >
              {siteConfig.phoneDisplay}
            </TrackedLink>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <p className="text-sm text-muted">Email</p>
            <p className="mt-2 font-semibold text-foreground">{siteConfig.email}</p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <p className="text-sm text-muted">Arie acoperire</p>
            <p className="mt-2 font-semibold text-foreground">{siteConfig.areaServed}</p>
          </article>
        </div>
      </section>

      <section className="section-space">
        <EstimateCalculator />
      </section>
    </div>
  );
}
