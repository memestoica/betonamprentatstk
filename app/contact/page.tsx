import type { Metadata } from "next";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contactează Beton Amprentat STK și folosește calculatorul de ofertă pentru beton amprentat în toată România.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Contact"
        title="Calculator ofertă beton amprentat"
        description="Serviciile noastre sunt disponibile în toată România. Configurează rapid suprafața, modelul și culoarea, apoi trimite detaliile pe WhatsApp."
        primaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
        secondaryCta={{ href: siteConfig.whatsAppUrl, label: "WhatsApp" }}
      />

      <section className="section-space">
        <EstimateCalculator />
      </section>
    </div>
  );
}
