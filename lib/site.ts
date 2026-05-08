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
  { href: "/modele-si-culori-beton", label: "Modele si culori beton" },
  { href: "/portofoliu", label: "Portofoliu" },
  { href: "/contact", label: "Contact" },
] as const;

export const benefits = [
  {
    title: "Lucram in toata Romania",
    description:
      "Ne deplasam pentru proiecte rezidentiale si comerciale, cu organizare clara si planificare adaptata locatiei.",
  },
  {
    title: "Modele si culori moderne",
    description:
      "Alegem finisaje care se potrivesc natural cu fatada, gardul, terasa sau curtea, fara compromis estetic.",
  },
  {
    title: "Executie rapida si curata",
    description:
      "Punem accent pe ritm bun de lucru, materiale durabile si santier ordonat de la inceput pana la predare.",
  },
] as const;

export const models = [
  {
    name: "Piatra naturala",
    description:
      "Aspect robust si elegant, potrivit pentru curti si zone de acces care cer personalitate.",
  },
  {
    name: "Caramida",
    description:
      "Un model ordonat si familiar, bun pentru alei, trotuare de curte si zone decorative.",
  },
  {
    name: "Lemn",
    description:
      "Textura calda pentru terase si spatii de relaxare unde vrei un aspect mai prietenos.",
  },
  {
    name: "Dale",
    description:
      "Linii curate si ritm echilibrat, util pentru amenajari contemporane si suprafete mari.",
  },
  {
    name: "Pavaj",
    description:
      "Aspect tehnic si rezistent, potrivit pentru acces auto si spatii cu trafic frecvent.",
  },
] as const;

export const colors = [
  "Gri",
  "Antracit",
  "Maro",
  "Roscat",
  "Crem",
] as const;

export type PortfolioItem = {
  title: string;
  location: string;
  model: string;
  color: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    title: "Curte rezidentiala",
    location: "Cluj-Napoca",
    model: "Piatra naturala",
    color: "Gri",
  },
  {
    title: "Terasa si zona de relaxare",
    location: "Bucuresti",
    model: "Lemn",
    color: "Maro",
  },
  {
    title: "Alee si acces principal",
    location: "Iasi",
    model: "Pavaj",
    color: "Antracit",
  },
  {
    title: "Amenajare curte interioara",
    location: "Timisoara",
    model: "Dale",
    color: "Crem",
  },
  {
    title: "Trotuar si alei de gradina",
    location: "Brasov",
    model: "Caramida",
    color: "Roscat",
  },
  {
    title: "Curte cu acces auto",
    location: "Constanta",
    model: "Pavaj",
    color: "Maro",
  },
];

export const processSteps = [
  {
    title: "Contact",
    description:
      "Ne spui pe scurt ce suprafata ai si ce rezultat iti doresti, prin telefon sau mesaj.",
  },
  {
    title: "Estimare",
    description:
      "Discutam variante de model, culoare si suprafata pentru o evaluare initiala clara.",
  },
  {
    title: "Executie",
    description:
      "Stabilim perioada de lucru si executam cu materiale durabile si atentie la detalii.",
  },
  {
    title: "Finalizare",
    description:
      "Predam lucrarea curat, cu recomandari utile pentru intretinere si folosire corecta.",
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
