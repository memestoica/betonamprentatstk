import type { Metadata } from "next";

export const siteConfig = {
  name: "Beton Amprentat STK",
  url: "https://betonamprentatstk.ro",
  phoneDisplay: "0740 000 000",
  phoneHref: "tel:+40740000000",
  whatsAppUrl: "https://wa.me/40740000000",
};

export const navigationLinks = [
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/modele-si-culori-beton", label: "Modele și culori beton" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/contact", label: "Contact" },
] as const;

export const benefits = [
  {
    title: "Lucrăm în toată România",
    description:
      "Ne deplasăm pentru proiecte rezidențiale și comerciale, cu organizare clară și planificare adaptată locației.",
  },
  {
    title: "Modele și culori moderne",
    description:
      "Alegem finisaje care se potrivesc natural cu fațada, gardul, terasa sau curtea, fără compromis estetic.",
  },
  {
    title: "Execuție rapidă și curată",
    description:
      "Punem accent pe ritm bun de lucru, materiale durabile și șantier ordonat de la început până la predare.",
  },
] as const;

export const models = [
  {
    name: "Piatră naturală",
    description:
      "Aspect robust și elegant, potrivit pentru curți și zone de acces care cer personalitate.",
  },
  {
    name: "Cărămidă",
    description:
      "Un model ordonat și familiar, bun pentru alei, trotuare de curte și zone decorative.",
  },
  {
    name: "Lemn",
    description:
      "Textură caldă pentru terase și spații de relaxare unde vrei un aspect mai prietenos.",
  },
  {
    name: "Dale",
    description:
      "Linii curate și ritm echilibrat, util pentru amenajări contemporane și suprafețe mari.",
  },
  {
    name: "Pavaj",
    description:
      "Aspect tehnic și rezistent, potrivit pentru acces auto și spații cu trafic frecvent.",
  },
  {
    name: "Busolă decorativă",
    description:
      "Accent central pentru terase, curți ample sau zone unde vrei un detaliu vizual memorabil.",
  },
] as const;

export const colors = [
  "Gri",
  "Antracit",
  "Maro",
  "Roșcat",
  "Crem",
  "Bej",
  "Gri deschis",
] as const;

export type PortfolioItem = {
  title: string;
  category: string;
  description: string;
  model: string;
  color: string;
  image: {
    src: string;
    alt: string;
  };
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Curte rezidențială",
    category: "Curți",
    description:
      "Amenajare pentru zona de acces și circulație zilnică, cu finisaj rezistent și ușor de întreținut.",
    model: "Piatră naturală",
    color: "Gri",
    image: {
      src: "/images/portfolio/grey-stone-stamped-concrete-courtyard.jpg",
      alt: "Curte cu beton amprentat gri, model piatră naturală",
    },
  },
  {
    title: "Terasă gri antracit",
    category: "Terase",
    description:
      "Suprafață amplă cu model modern, potrivită pentru acces și utilizare zilnică.",
    model: "Dale",
    color: "Antracit",
    image: {
      src: "/images/portfolio/large-grey-stamped-concrete-terrace.jpg",
      alt: "Terasă mare cu beton amprentat gri antracit",
    },
  },
  {
    title: "Alee model lemn",
    category: "Model lemn",
    description:
      "Textură de lemn în nuanță gri, potrivită pentru alei laterale și zone de trecere.",
    model: "Lemn",
    color: "Antracit",
    image: {
      src: "/images/portfolio/wood-pattern-stamped-concrete.jpg",
      alt: "Alee cu beton amprentat model lemn în culoare antracit",
    },
  },
  {
    title: "Zonă piscină",
    category: "Piscine",
    description:
      "Deck decorativ în jurul piscinei, cu aspect luminos și integrare curată în grădină.",
    model: "Lemn",
    color: "Gri deschis",
    image: {
      src: "/images/portfolio/stamped-concrete-pool-deck.jpg",
      alt: "Zonă de piscină cu beton amprentat model lemn gri deschis",
    },
  },
  {
    title: "Scări și acces",
    category: "Scări",
    description:
      "Soluție pentru trepte și zone de tranziție, cu continuitate între niveluri.",
    model: "Piatră naturală",
    color: "Maro",
    image: {
      src: "/images/portfolio/stamped-concrete-stairs.jpg",
      alt: "Scări finisate cu beton amprentat maro",
    },
  },
  {
    title: "Busolă decorativă",
    category: "Busolă decorativă",
    description:
      "Element decorativ pentru zone centrale, potrivit când proiectul are nevoie de un accent distinct.",
    model: "Busolă decorativă",
    color: "Antracit",
    image: {
      src: "/images/portfolio/decorative-compass-concrete.jpg",
      alt: "Model busolă decorativă în beton amprentat gri",
    },
  },
];

export const processSteps = [
  {
    title: "Contact",
    description:
      "Ne spui pe scurt ce suprafață ai și ce rezultat îți dorești, prin telefon sau mesaj.",
  },
  {
    title: "Estimare",
    description:
      "Discutăm variante de model, culoare și suprafață pentru o evaluare inițială clară.",
  },
  {
    title: "Execuție",
    description:
      "Stabilim perioada de lucru și executăm cu materiale durabile și atenție la detalii.",
  },
  {
    title: "Finalizare",
    description:
      "Predăm lucrarea curat, cu recomandări utile pentru întreținere și folosire corectă.",
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
