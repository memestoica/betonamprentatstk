"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getLinkText(anchor: HTMLAnchorElement) {
  return anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) ?? "";
}

function isWhatsAppUrl(href: string) {
  try {
    const url = new URL(href, window.location.href);

    return url.hostname === "wa.me" || url.hostname.endsWith(".whatsapp.com");
  } catch {
    return false;
  }
}

function isEstimateLink(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href")?.toLowerCase() ?? "";
  const text = getLinkText(anchor).toLowerCase();

  return href.includes("pret-estimativ") || text.includes("obține preț estimativ");
}

export function AnalyticsEvents() {
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href") ?? "";
      const linkText = getLinkText(anchor);

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          link_url: href,
          link_text: linkText,
        });
      }

      if (isWhatsAppUrl(href)) {
        trackEvent("whatsapp_click", {
          link_url: href,
          link_text: linkText,
        });
      }

      if (isEstimateLink(anchor)) {
        trackEvent("estimate_click", {
          link_url: href,
          link_text: linkText,
        });
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return null;
}
