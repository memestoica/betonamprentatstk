"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { MenuIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { SiteLogo } from "@/components/logo/site-logo";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";
import { navigationLinks, siteConfig } from "@/lib/site";

function HeaderAction({
  href,
  label,
  eventName,
  text,
  tone = "default",
  children,
}: {
  href: string;
  label: string;
  eventName: AnalyticsEventName;
  text: string;
  tone?: "default" | "whatsapp";
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={eventName === "whatsapp_click" ? "_blank" : undefined}
      rel={eventName === "whatsapp_click" ? "noopener noreferrer" : undefined}
      onClick={() => trackEvent(eventName, { location: "header" })}
      className={[
        "inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border px-3.5 text-sm font-semibold shadow-soft backdrop-blur hover:-translate-y-0.5",
        tone === "whatsapp"
          ? "border-[#25D366]/35 bg-[#25D366] text-white hover:bg-[#1EAE54]"
          : "border-border bg-card/88 text-foreground hover:border-copper/35 hover:text-copper",
      ].join(" ")}
    >
      <span>{text}</span>
      {children}
    </a>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 shadow-[0_10px_34px_rgba(17,24,39,0.08)] backdrop-blur-2xl">
      <div className="page-shell">
        <div className="grid min-h-18 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-2.5 lg:min-h-20 lg:grid-cols-[1fr_auto_1fr] lg:gap-5 lg:py-3">
          <Link
            href="/"
            className="min-w-0"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Beton Amprentat STK"
          >
            <SiteLogo />
          </Link>

          <nav
            className="hidden items-center gap-1 rounded-full border border-border bg-card/72 p-1 shadow-soft backdrop-blur lg:flex"
            aria-label="Navigație principală"
          >
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold",
                    isActive
                      ? "bg-copper text-white"
                      : "text-muted hover:bg-background hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex min-w-0 items-center justify-end">
            <div className="hidden items-center gap-2 lg:flex">
              <HeaderAction
                href={siteConfig.phoneHref}
                label="Sună acum"
                text={siteConfig.phoneDisplay}
                eventName="phone_click"
              >
                <PhoneIcon className="h-5 w-5" />
              </HeaderAction>
              <HeaderAction
                href={siteConfig.whatsAppUrl}
                label="Trimite mesaj pe WhatsApp"
                text="WhatsApp"
                tone="whatsapp"
                eventName="whatsapp_click"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </HeaderAction>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/88 text-foreground shadow-soft backdrop-blur hover:border-copper/35 hover:text-copper lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Deschide meniul"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="mb-3 rounded-2xl border border-border bg-card/96 p-3 shadow-soft backdrop-blur lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Navigație mobilă">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={[
                      "rounded-xl px-4 py-3 text-sm font-semibold",
                      isActive
                        ? "bg-copper text-white"
                        : "text-foreground hover:bg-background",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
