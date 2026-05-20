import Link from "next/link";
import { navigationLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/80">
      <div className="page-shell flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <p className="font-display text-2xl font-semibold text-foreground">
            Beton Amprentat STK
          </p>
          <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
            Executăm exclusiv lucrări de beton amprentat pentru curți, terase,
            alei, scări, piscine și spații exterioare, cu deplasare în toată
            România.
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
              Navigație
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              {navigationLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
              <Link href="/portofoliu" className="hover:text-foreground">
                Portofoliu
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-copper">
              Contact
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <a href={siteConfig.phoneHref} className="hover:text-foreground">
                {siteConfig.phoneDisplay}
              </a>
              <a href={siteConfig.whatsAppUrl} className="hover:text-foreground">
                WhatsApp
              </a>
              <span>{siteConfig.email}</span>
              <span>{siteConfig.areaServed}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
