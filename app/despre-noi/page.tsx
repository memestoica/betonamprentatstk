import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Despre noi",
  description:
    "Beton Amprentat STK este o echipă specializată exclusiv în beton amprentat pentru curți, terase, alei și spații exterioare în toată România.",
  path: "/despre-noi",
});

const values = [
  "Lucrăm exclusiv cu beton amprentat, fără să împărțim atenția cu alte servicii.",
  "Avem experiență de peste 7 ani în Spania și Franța, plus peste 5 ani de lucrări în România.",
  "Ne deplasăm în toată țara, inclusiv în localități rurale și zone rezidențiale mai mici.",
];

export default function AboutPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Despre noi"
        title="O echipă specializată în beton amprentat"
        description="Beton Amprentat STK execută lucrări pentru curți, terase, alei, scări, piscine și spații exterioare, cu accent pe durabilitate, comunicare clară și garanție pentru lucrare."
        primaryCta={{ href: "/#pret-estimativ", label: "Obține preț estimativ" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
        image={{
          src: "/images/portfolio/rural-irregular-slate-stamped-concrete-alley.jpg",
          alt: "Alee rurală cu beton amprentat gri",
        }}
      />

      <section className="section-space">
        <SectionHeading
          title="Experiență practică, comunicare directă"
          description="Ne interesează ca fiecare client să înțeleagă opțiunile, etapele și modul corect de întreținere a lucrării."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {values.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <p className="text-sm leading-7 text-muted sm:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Hai să discutăm despre lucrarea ta"
        description="Trimite localitatea, județul, suprafața aproximativă și câteva poze cu zona unde dorești beton amprentat."
        primaryCta={{ href: "/#pret-estimativ", label: "Obține preț estimativ" }}
        secondaryCta={{ href: siteConfig.whatsAppUrl, label: "WhatsApp" }}
      />
    </div>
  );
}
