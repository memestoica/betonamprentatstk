import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { TrackedLink } from "@/components/tracked-link";
import { siteConfig } from "@/lib/site";

export function MobileContactActions() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/92 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-14px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:hidden"
      aria-label="Acțiuni rapide de contact"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <TrackedLink
          href={siteConfig.phoneHref}
          location="mobile_sticky"
          aria-label="Sună acum"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-copper/40 bg-card px-4 text-sm font-semibold text-foreground shadow-soft hover:border-copper hover:text-copper"
        >
          <PhoneIcon className="h-5 w-5" />
          Sună acum
        </TrackedLink>
        <TrackedLink
          href={siteConfig.whatsAppUrl}
          location="mobile_sticky"
          aria-label="Trimite mesaj pe WhatsApp"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white shadow-soft hover:bg-[#1EAE54]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </TrackedLink>
      </div>
    </div>
  );
}
