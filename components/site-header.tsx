"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationLinks, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
      <div className="page-shell">
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="min-w-0"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Beton Amprentat STK"
          >
            <span className="block font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Beton Amprentat STK
            </span>
            <span className="block text-xs uppercase tracking-[0.28em] text-copper">
              Curti, terase si alei
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigatie principala">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm font-semibold",
                    isActive ? "text-copper" : "text-muted hover:text-foreground",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white shadow-soft hover:-translate-y-0.5 hover:bg-copper-strong"
            >
              Suna acum
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card p-3 text-foreground shadow-soft lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="sr-only">Deschide meniul</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
              <span className="h-0.5 w-full rounded-full bg-current" />
            </div>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-menu"
            className="surface-panel mb-4 flex flex-col gap-4 p-4 lg:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Navigatie mobila">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={[
                      "rounded-2xl px-4 py-3 text-sm font-semibold",
                      isActive
                        ? "bg-copper/12 text-copper"
                        : "text-foreground hover:bg-copper/8",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <ThemeToggle />
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-copper px-5 py-3 text-sm font-semibold text-white hover:bg-copper-strong"
              >
                Suna acum
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
