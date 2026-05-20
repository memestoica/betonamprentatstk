import type { Metadata } from "next";

const defaultWhatsAppMessage = encodeURIComponent(
  "Bună ziua! Doresc o ofertă pentru beton amprentat.",
);

export const siteConfig = {
  name: "Beton Amprentat STK",
  url: "https://betonamprentatstk.ro",
  phoneDisplay: "0779 282 982",
  phoneHref: "tel:0779282982",
  whatsAppBaseUrl: "https://wa.me/40779282982",
  whatsAppUrl: `https://wa.me/40779282982?text=${defaultWhatsAppMessage}`,
  email: "Email disponibil în curând",
  areaServed: "Toată România",
};

export const navigationLinks = [
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/#pret-estimativ", label: "Obține preț estimativ" },
  { href: "/contact", label: "Contact" },
] as const;

export const benefits = [
  {
    title: "Lucrăm în toată România",
    description:
      "Ne deplasăm pentru lucrări de beton amprentat în localități din toată țara, în special în zone rurale și zone rezidențiale.",
  },
  {
    title: "Experiență internațională",
    description:
      "Experiență de peste 7 ani în Spania și Franța, plus peste 5 ani de lucrări realizate în România.",
  },
  {
    title: "Doar beton amprentat",
    description:
      "Suntem specializați pe beton amprentat, pentru curți, terase, alei, scări, piscine și spații exterioare.",
  },
  {
    title: "Garanție pentru lucrare",
    description:
      "Folosim materiale profesionale și oferim garanție pentru lucrările executate.",
  },
] as const;

export type PortfolioCategory =
  | "Ardezie Ashlar"
  | "Ardezie neregulată"
  | "Lemn"
  | "Evantai"
  | "Alte lucrări";

export type PortfolioItem = {
  title: string;
  category: PortfolioCategory;
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Terasă și zonă piscină",
    category: "Lemn",
    description: "Beton amprentat cu aspect de lemn pentru o zonă de relaxare lângă piscină.",
    image: {
      src: "/images/portfolio/pool-terrace-wood-stamped-concrete.jpg",
      alt: "Terasă cu beton amprentat model lemn lângă piscină",
    },
  },
  {
    title: "Terasă gri modernă",
    category: "Ardezie Ashlar",
    description: "Suprafață amplă cu model Ashlar, potrivită pentru curți și terase rezidențiale.",
    image: {
      src: "/images/portfolio/grey-ashlar-stamped-concrete-terrace.jpg",
      alt: "Terasă gri cu beton amprentat model Ardezie Ashlar",
    },
  },
  {
    title: "Curte cu piatră neregulată",
    category: "Ardezie neregulată",
    description: "Model neregulat, cu aspect de piatră naturală, pentru curți și alei exterioare.",
    image: {
      src: "/images/portfolio/irregular-slate-stamped-concrete-courtyard.jpg",
      alt: "Curte cu beton amprentat model ardezie neregulată",
    },
  },
  {
    title: "Alee în localitate rurală",
    category: "Ardezie neregulată",
    description: "Alee rezistentă pentru casă și grădină, executată cu beton amprentat gri.",
    image: {
      src: "/images/portfolio/rural-irregular-slate-stamped-concrete-alley.jpg",
      alt: "Alee rurală cu beton amprentat model ardezie neregulată",
    },
  },
  {
    title: "Alee model lemn",
    category: "Lemn",
    description: "Textură de lemn în nuanță gri, potrivită pentru alei și zone de trecere.",
    image: {
      src: "/images/portfolio/wood-pattern-stamped-concrete-walkway.jpg",
      alt: "Alee cu beton amprentat model lemn în culoare gri",
    },
  },
  {
    title: "Model evantai cu busolă",
    category: "Evantai",
    description: "Lucrare decorativă cu model evantai și busolă centrală pentru o curte expresivă.",
    image: {
      src: "/images/portfolio/fan-pattern-decorative-compass-concrete.jpg",
      alt: "Beton amprentat model evantai cu busolă decorativă",
    },
  },
  {
    title: "Scări beton amprentat",
    category: "Alte lucrări",
    description: "Scări finisate cu beton amprentat maro, integrate cu zona de acces.",
    image: {
      src: "/images/portfolio/brown-stamped-concrete-stairs.jpg",
      alt: "Scări finisate cu beton amprentat maro",
    },
  },
  {
    title: "Zonă exterioară lângă piscină",
    category: "Alte lucrări",
    description: "Suprafață exterioară luminoasă, potrivită pentru zone de piscină și relaxare.",
    image: {
      src: "/images/portfolio/light-stamped-concrete-pool-area.jpg",
      alt: "Zonă exterioară lângă piscină cu beton amprentat deschis la culoare",
    },
  },
];

export const processSteps = [
  {
    title: "Ne trimiți detaliile",
    description:
      "Ne spui localitatea, suprafața aproximativă și tipul lucrării.",
  },
  {
    title: "Primești recomandări",
    description:
      "Discutăm despre model, culoare, pregătirea terenului și estimarea lucrării.",
  },
  {
    title: "Stabilim execuția",
    description:
      "Planificăm perioada de lucru în funcție de suprafață, vreme și disponibilitate.",
  },
  {
    title: "Finalizăm lucrarea",
    description:
      "Executăm lucrarea, aplicăm finisajul și oferim indicații pentru întreținere.",
  },
] as const;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: BuildMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
