import type { Metadata } from "next";
import Image from "next/image";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, colors, models, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Modele si culori beton amprentat",
  description:
    "Descopera modele si culori de beton amprentat pentru curti, alei si terase, cu recomandari practice pentru fiecare spatiu.",
  path: "/modele-si-culori-beton",
});

const recommendations = [
  {
    title: "Curti",
    description:
      "Pentru curti, merg foarte bine modelele de piatra naturala si dale, in nuante de gri, crem sau maro.",
  },
  {
    title: "Alei",
    description:
      "Pentru alei, recomandam modele ordonate precum caramida sau pavaj, in tonuri antracit, gri sau roscat.",
  },
  {
    title: "Terase",
    description:
      "Pentru terase, texturile de lemn si dale pot crea un aspect cald si echilibrat, mai ales in maro sau crem.",
  },
] as const;

export default function ModelsPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Modele si culori"
        title="Finisaje potrivite pentru stilul si folosirea spatiului"
        description="Betonul amprentat este o solutie decorativa si rezistenta, folosita pentru curti, alei si terase care au nevoie de un aspect ingrijit si intretinere usoara."
        primaryCta={{ href: "/contact", label: "Solicita o estimare" }}
      />

      <section className="section-space">
        <SectionHeading
          title="Ce este betonul amprentat"
          description="Este un sistem decorativ turnat la fata locului, texturat cu matrite si colorat pentru a reproduce modele precum piatra, caramida, lemn, dale sau pavaj."
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              src: "/images/portfolio/wood-pattern-stamped-concrete.jpg",
              alt: "Beton amprentat model lemn în culoare antracit",
              label: "Model lemn",
            },
            {
              src: "/images/portfolio/decorative-compass-concrete.jpg",
              alt: "Beton amprentat cu busolă decorativă",
              label: "Busolă decorativă",
            },
            {
              src: "/images/portfolio/grey-stone-stamped-concrete-courtyard.jpg",
              alt: "Beton amprentat gri model piatră naturală",
              label: "Piatră naturală",
            },
          ].map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-semibold text-foreground">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-space">
        <SectionHeading
          title="Modele disponibile"
          description="Alegerea modelului se face in functie de arhitectura casei, suprafata si stilul general al amenajarii."
        />
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.name}
              className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {model.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Culori populare
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Nuantele potrivite ajuta suprafata sa se integreze armonios cu
              fatada, gardul si restul curtii.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {colors.map((color) => (
              <div
                key={color}
                className="rounded-xl border border-copper/18 bg-copper/8 px-4 py-4 text-sm font-semibold text-foreground"
              >
                {color}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <SectionHeading
          title="Recomandari practice"
          description="Nu exista un singur model bun pentru toate situatiile. Tin cont mai mult de context, trafic si felul in care vrei sa arate spatiul pe termen lung."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {recommendations.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Te ajutam sa alegi modelul potrivit"
        description="Daca nu stii ce textura sau culoare se potriveste mai bine, discutam rapid si iti propunem variante practice."
        primaryCta={{ href: "/contact", label: "Cere oferta" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
      />
    </div>
  );
}
