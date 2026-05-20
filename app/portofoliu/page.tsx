import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, portfolioItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Portofoliu beton amprentat",
  description:
    "Lucrări reale de beton amprentat în România pentru curți, terase, alei, piscine și spații exterioare.",
  path: "/portofoliu",
});

export default function PortfolioPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Portofoliu"
        title="Lucrări realizate"
        description="Vezi exemple reale de curți, terase, alei și zone exterioare amenajate cu beton amprentat."
        primaryCta={{ href: "/#pret-estimativ", label: "Obține preț estimativ" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
        image={{
          src: "/images/portfolio/grey-ashlar-stamped-concrete-terrace.jpg",
          alt: "Terasă gri cu beton amprentat model Ardezie Ashlar",
        }}
      />

      <section className="section-space">
        <SectionHeading
          title="Portofoliu beton amprentat"
          description="Fotografii reale selectate pentru v1, organizate pe categorii simple: Ardezie Ashlar, Ardezie neregulată, Lemn, Evantai și Alte lucrări."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={`${item.title}-${item.category}`}
              item={item}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Ai o curte, terasă sau alee de amenajat?"
        description="Trimite-ne localitatea, suprafața aproximativă și câteva poze cu zona. Îți răspundem cu recomandări clare pentru beton amprentat."
        primaryCta={{ href: "/#pret-estimativ", label: "Obține preț estimativ" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
      />
    </div>
  );
}
