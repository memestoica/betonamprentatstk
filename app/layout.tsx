import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F4EF" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      suppressHydrationWarning
      className={`${fraunces.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col overflow-x-clip">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
