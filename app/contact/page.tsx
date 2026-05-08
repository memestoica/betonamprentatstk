import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { buildMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Contacteaza Beton Amprentat STK pentru o estimare gratuita pentru lucrari de beton amprentat in toata Romania.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Contact"
        title="Solicita o estimare gratuita"
        description="Serviciile noastre sunt disponibile in toata Romania. Ne poti contacta telefonic, pe WhatsApp sau prin formularul de mai jos."
        primaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
        secondaryCta={{ href: siteConfig.whatsAppUrl, label: "WhatsApp" }}
      />

      <section className="section-space">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <article className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
                Telefon
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-4 block font-display text-3xl font-semibold text-foreground sm:text-4xl"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Pentru discutii rapide despre suprafata, model si disponibilitate.
              </p>
            </article>

            <article className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
                WhatsApp
              </p>
              <a
                href={siteConfig.whatsAppUrl}
                className="mt-4 inline-flex rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-strong"
              >
                Deschide conversatia
              </a>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                Trimite rapid detalii despre localitate, suprafata estimata si tipul lucrarii.
              </p>
            </article>
          </div>

          <section className="rounded-[1.75rem] border border-border bg-card p-6 shadow-soft sm:p-8">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground">
              Formular de contact
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
              Solicita o estimare gratuita. Formularul este momentan doar interfata, fara trimitere backend.
            </p>

            <form className="mt-8 grid gap-4" aria-label="Formular contact">
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Nume
                <input
                  type="text"
                  name="name"
                  placeholder="Numele tau"
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-0 placeholder:text-muted focus:border-copper"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Telefon
                <input
                  type="tel"
                  name="phone"
                  placeholder="07xx xxx xxx"
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-copper"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Localitate
                <input
                  type="text"
                  name="locality"
                  placeholder="Oras / comuna"
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-copper"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Suprafata estimata
                <input
                  type="text"
                  name="surface"
                  placeholder="Ex: 120 mp"
                  className="rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-copper"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Mesaj
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Spune-ne ce tip de lucrare doresti."
                  className="rounded-3xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted focus:border-copper"
                />
              </label>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white hover:bg-copper-strong sm:w-auto"
              >
                Trimite in curand
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}
