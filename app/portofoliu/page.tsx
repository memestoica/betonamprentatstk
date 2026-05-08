import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PlaceholderGalleryCard } from "@/components/placeholder-gallery-card";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata, portfolioItems, siteConfig } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Portofoliu beton amprentat",
  description:
    "Vezi exemple de proiecte de beton amprentat pentru curti, terase si alei. Galeria va fi actualizata cu lucrari reale.",
  path: "/portofoliu",
});

export default function PortfolioPage() {
  return (
    <div className="page-shell section-space">
      <PageHero
        eyebrow="Portofoliu"
        title="Exemple de lucrari si stiluri propuse"
        description="Galeria va fi actualizata cu fotografii reale din proiecte finalizate pentru clienti din toata Romania."
        primaryCta={{ href: "/contact", label: "Solicita o estimare" }}
      />

      <section className="section-space">
        <SectionHeading
          title="Structura galeriei"
          description="Pentru moment afisam proiecte demonstrative, astfel incat pagina sa fie pregatita pentru incarcare rapida a fotografiilor reale ulterior."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PlaceholderGalleryCard key={`${item.title}-${item.location}`} item={item} />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Vrei o lucrare care sa arate bine si dupa ani de folosire?"
        description="Scrie-ne sau suna-ne pentru o estimare gratuita si o recomandare potrivita pentru suprafata ta."
        primaryCta={{ href: "/contact", label: "Mergi la contact" }}
        secondaryCta={{ href: siteConfig.phoneHref, label: "Suna acum" }}
      />
    </div>
  );
}
