import type { Metadata } from "next";
import Link from "next/link";
import { CalloutCard } from "@/components/callout-card";
import { EstimateCalculator } from "@/components/estimate-calculator";
import { PageHero } from "@/components/page-hero";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-link";
import {
  benefits,
  buildMetadata,
  portfolioItems,
  processSteps,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Beton Amprentat STK | Curți, Terase și Alei în Toată România",
  description:
    "Beton amprentat pentru curți, terase, alei și spații exterioare. Experiență în Spania, Franța și România. Lucrări în toată țara, cu garanție.",
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  areaServed: "România",
  telephone: "0779282982",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "0779282982",
    contactType: "customer service",
    areaServed: "RO",
    availableLanguage: "ro",
  },
  description:
    "Servicii de beton amprentat pentru curți, terase, alei și spații exterioare, cu lucrări în toată România.",
};

export default function HomePage() {
  return (
    <>
      <section className="page-shell pb-10 pt-6 sm:pb-14 sm:pt-10">
        <PageHero
          eyebrow="Beton amprentat STK"
          title="Beton amprentat pentru curți, terase și alei"
          description="Execuție profesională în toată România, cu finisaje durabile, modele moderne și garanție pentru lucrare."
          primaryCta={{ href: "#pret-estimativ", label: "Obține preț estimativ" }}
          secondaryCta={{ href: siteConfig.phoneHref, label: "Sună acum" }}
          image={{
            src: "/images/portfolio/pool-terrace-wood-stamped-concrete.jpg",
            alt: "Terasă cu beton amprentat lângă piscină",
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={siteConfig.whatsAppUrl}
              location="hero"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1EAE54]"
            >
              WhatsApp
            </TrackedLink>
            <Link
              href="/portofoliu"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
            >
              Vezi lucrări realizate
            </Link>
          </div>
        </PageHero>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <CalloutCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
              Despre experiența noastră
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Specializați exclusiv în beton amprentat
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-muted sm:text-base">
            <p>
              Beton Amprentat STK este o echipă specializată exclusiv în lucrări
              de beton amprentat pentru curți, terase, alei, scări și spații
              exterioare. Experiența acumulată în peste 7 ani de lucru în Spania
              și Franța, completată de peste 5 ani de lucrări realizate în
              România, ne ajută să oferim soluții practice, durabile și adaptate
              fiecărui proiect.
            </p>
            <p>
              Lucrăm în toată România, cu accent pe localități rurale, zone
              rezidențiale și proprietăți unde betonul amprentat poate transforma
              complet aspectul curții. Comunicăm clar, explicăm opțiunile
              disponibile și recomandăm soluții potrivite pentru suprafața, stilul
              casei și bugetul clientului.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <SectionHeading
          title="Lucrări realizate"
          description="Vezi exemple reale de curți, terase, alei și zone exterioare amenajate cu beton amprentat."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.slice(0, 6).map((item, index) => (
            <PortfolioCard key={item.title} item={item} priority={index < 2} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/portofoliu"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-soft hover:bg-background"
          >
            Vezi portofoliul complet
          </Link>
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <EstimateCalculator />
      </section>

      <section className="page-shell py-10 sm:py-14">
        <SectionHeading
          title="Cum lucrăm"
          description="Proces simplu, clar și ușor de urmărit, de la primul mesaj până la finalizarea lucrării."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
                0{index + 1}
              </p>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-10 sm:py-16">
        <div className="rounded-2xl border border-copper/20 bg-gradient-to-br from-copper/14 via-card to-card p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
              Pentru o ofertă rapidă, trimite-ne detaliile pe WhatsApp
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Pentru o ofertă rapidă, trimite pe WhatsApp localitatea, suprafața
              aproximativă și câteva poze cu zona unde dorești beton amprentat.
            </p>
          </div>
          <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-background/55 p-4">
              <dt className="text-muted">Telefon</dt>
              <dd className="mt-1 font-semibold text-foreground">{siteConfig.phoneDisplay}</dd>
            </div>
            <div className="rounded-xl border border-border bg-background/55 p-4">
              <dt className="text-muted">WhatsApp</dt>
              <dd className="mt-1 font-semibold text-foreground">{siteConfig.phoneDisplay}</dd>
            </div>
            <div className="rounded-xl border border-border bg-background/55 p-4">
              <dt className="text-muted">Email</dt>
              <dd className="mt-1 font-semibold text-foreground">{siteConfig.email}</dd>
            </div>
            <div className="rounded-xl border border-border bg-background/55 p-4">
              <dt className="text-muted">Arie acoperire</dt>
              <dd className="mt-1 font-semibold text-foreground">{siteConfig.areaServed}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={siteConfig.whatsAppUrl}
              location="footer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1EAE54]"
            >
              WhatsApp
            </TrackedLink>
            <TrackedLink
              href={siteConfig.phoneHref}
              location="footer"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
            >
              Sună acum
            </TrackedLink>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
