import { GA_MEASUREMENT_ID, type GtagCommand } from "@/lib/analytics";

window.dataLayer = window.dataLayer ?? [];
window.gtag =
  window.gtag ??
  ((...args: GtagCommand) => {
    window.dataLayer?.push(args);
  });

window.gtag("js", new Date());
window.gtag("config", GA_MEASUREMENT_ID);
