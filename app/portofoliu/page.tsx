import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, portfolioItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Portofoliu beton amprentat",
  description:
    "Vezi lucrări beton amprentat în România pentru curți, terase, piscine, scări, model lemn și busolă decorativă.",
  path: "/portofoliu",
});

export default function PortfolioPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Portofoliu"
        title="Lucrări reale de beton amprentat"
        description="Galerie pentru lucrări de beton amprentat în România: curți, terase, piscine, scări, model lemn și busolă decorativă."
        primaryCta={{ href: "/contact", label: "Solicită o estimare" }}
        image={{
          src: "/images/portfolio/grey-stone-stamped-concrete-courtyard.jpg",
          alt: "Curte cu beton amprentat gri, model piatră naturală",
        }}
      />

      <section className="section-space">
        <SectionHeading
          title="Portofoliu beton amprentat"
          description="Fotografii selectate din proiecte reale, optimizate pentru încărcare rapidă și afișare responsivă."
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
        title="Vrei o lucrare care să arate bine și după ani de folosire?"
        description="Scrie-ne sau sună-ne pentru o estimare gratuită și o recomandare potrivită pentru suprafața ta."
        primaryCta={{ href: "/contact", label: "Mergi la contact" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
      />
    </div>
  );
}
