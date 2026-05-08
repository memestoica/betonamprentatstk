import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Despre noi",
  description:
    "Afla mai multe despre Beton Amprentat STK, echipa practica ce executa lucrari de beton amprentat in toata Romania.",
  path: "/despre-noi",
});

const principles = [
  "Suntem o echipa mica, practica si concentrata pe lucrari de beton amprentat executate bine.",
  "Lucram in toata Romania, cu organizare clara si comunicare directa despre etape, timp si rezultate.",
  "Folosim materiale durabile si urmarim o executie curata, potrivita pentru proiecte rezidentiale si comerciale.",
];

export default function AboutPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Despre noi"
        title="O echipa mica, serioasa si orientata spre rezultat"
        description="Beton Amprentat STK pune accent pe solutii practice, discutii clare si lucrari durabile pentru curti, terase si alei."
        primaryCta={{ href: "/contact", label: "Mergi la contact" }}
      />

      <section className="section-space">
        <SectionHeading
          title="Cum lucram"
          description="Preferam promisiuni realiste, etape bine explicate si o executie care lasa spatiul ordonat la final."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {principles.map((item) => (
            <article
              key={item}
              className="rounded-[1.5rem] border border-border bg-card p-6 shadow-soft"
            >
              <p className="text-sm leading-7 text-muted sm:text-base">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="grid gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Lucrari in toata Romania
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Indiferent daca proiectul este intr-un oras mare sau intr-o zona
              rezidentiala in dezvoltare, pregatim executia astfel incat sa ai
              claritate de la inceput despre ce urmeaza.
            </p>
          </div>
          <div className="space-y-4 rounded-[1.75rem] border border-copper/20 bg-copper/8 p-6">
            <p className="text-sm leading-7 text-muted sm:text-base">
              Punem accent pe seriozitate, raspunsuri clare si materiale
              potrivite pentru un finisaj rezistent in timp.
            </p>
            <p className="text-sm leading-7 text-muted sm:text-base">
              Pentru noi conteaza nu doar aspectul final, ci si felul in care
              decurge santierul: curat, previzibil si bine coordonat.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Hai sa discutam despre lucrarea ta"
        description="Solicita o estimare gratuita si iti spunem ce variante se potrivesc cel mai bine pentru spatiul tau."
        primaryCta={{ href: "/contact", label: "Contacteaza-ne" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
      />
    </div>
  );
}
