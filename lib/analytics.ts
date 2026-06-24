export type AnalyticsEventName =
  | "phone_click"
  | "whatsapp_click";

type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

type GtagCommand =
  | ["event", AnalyticsEventName, AnalyticsEventParams?]
  | ["js", Date]
  | ["config", string, AnalyticsEventParams?];

declare global {
  interface Window {
    gtag?: (...args: GtagCommand) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params?: AnalyticsEventParams,
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function getTrackedEventFromHref(href: string): AnalyticsEventName | null {
  const normalizedHref = href.toLowerCase();

  if (normalizedHref.startsWith("tel:")) {
    return "phone_click";
  }

  if (
    normalizedHref.includes("wa.me") ||
    normalizedHref.includes("whatsapp.com")
  ) {
    return "whatsapp_click";
  }

  return null;
}
