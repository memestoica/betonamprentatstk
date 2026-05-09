import type { Metadata } from "next";
import Link from "next/link";
import { CalloutCard } from "@/components/callout-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PortfolioCard } from "@/components/portfolio-card";
import { SectionHeading } from "@/components/section-heading";
import {
  benefits,
  models,
  portfolioItems,
  processSteps,
  siteConfig,
  buildMetadata,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Beton Amprentat in Romania | Curti, Terase si Alei",
  description:
    "Beton amprentat pentru curti, terase si alei. Modele moderne, culori variate si executie in toata Romania.",
  path: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  areaServed: "Romania",
  telephone: siteConfig.phoneHref.replace("tel:", ""),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "RO",
    availableLanguage: "ro",
  },
  sameAs: [siteConfig.whatsAppUrl],
  description:
    "Servicii de beton amprentat pentru curti, terase si alei, cu executie in toata Romania.",
};

export default function HomePage() {
  return (
    <>
      <section className="page-shell pb-10 pt-6 sm:pb-14 sm:pt-10">
        <PageHero
          eyebrow="Beton amprentat premium"
          title="Beton amprentat in toata Romania"
          description="Amenajam curti, terase si alei cu beton amprentat durabil, modern si usor de intretinut."
          primaryCta={{ href: "/contact", label: "Cere oferta" }}
          secondaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
          image={{
            src: "/images/portfolio/large-grey-stamped-concrete-terrace.jpg",
            alt: "Terasă mare cu beton amprentat gri antracit",
          }}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit) => (
              <CalloutCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </PageHero>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <SectionHeading
          title="Lucrari si directii de finisaj"
          description="Galeria este pregatita pentru fotografii reale de proiect. Selectia finala va folosi imaginile locale dupa ce folderul sursa este disponibil in proiect."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item, index) => (
            <PortfolioCard key={item.title} item={item} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <div className="grid gap-8 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              title="Modele si culori pentru fiecare stil"
              description="Putem adapta finisajul in functie de spatiu, stilul casei si nivelul de trafic."
              align="left"
            />
            <div className="flex flex-wrap gap-3">
              {models.map((model) => (
                <span
                  key={model.name}
                  className="rounded-full border border-copper/20 bg-copper/10 px-4 py-2 text-sm font-semibold text-foreground"
                >
                  {model.name}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-dashed border-copper/35 bg-gradient-to-br from-copper/12 via-card to-background p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
              Solutii populare
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted sm:text-base">
              <li>Piatra naturala pentru curti si intrari elegante.</li>
              <li>Lemn si dale pentru terase cu aspect cald si ordonat.</li>
              <li>Caramida si pavaj pentru alei clare si rezistente.</li>
            </ul>
            <Link
              href="/modele-si-culori-beton"
              className="mt-6 inline-flex text-sm font-semibold text-copper transition hover:text-copper-strong"
            >
              Vezi toate modelele si culorile
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-10 sm:py-14">
        <SectionHeading
          title="Cum lucram"
          description="Proces simplu, clar si usor de urmarit, de la primul telefon pana la finalizare."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-copper">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-xl font-display font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell py-10 sm:py-16">
        <CtaBanner
          title="Solicita o estimare gratuita pentru proiectul tau"
          description="Lucram in toata Romania si iti raspundem clar despre etape, modele, culori si costuri orientative."
          primaryCta={{ href: "/contact", label: "Cere oferta" }}
          secondaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
        />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
