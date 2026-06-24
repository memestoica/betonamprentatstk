import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { MobileContactActions } from "@/components/mobile-contact-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Beton Amprentat STK",
    template: "%s | Beton Amprentat STK",
  },
  description:
    "Beton amprentat pentru curți, terase, alei și spații exterioare. Lucrări în toată România, inclusiv localități rurale.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Beton Amprentat STK | Curți, Terase și Alei în Toată România",
    description:
      "Beton amprentat pentru curți, terase, alei și spații exterioare. Lucrări în toată țara, cu garanție.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Beton Amprentat STK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beton Amprentat STK | Curți, Terase și Alei în Toată România",
    description:
      "Beton amprentat pentru curți, terase, alei și spații exterioare. Lucrări în toată țara, cu garanție.",
    images: ["/opengraph-image"],
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#111827",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`dark ${fraunces.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background pb-24 font-sans text-foreground antialiased lg:pb-0">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <MobileContactActions />
        <Analytics />
        <SpeedInsights />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
