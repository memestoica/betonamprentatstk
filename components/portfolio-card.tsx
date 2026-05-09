import Image from "next/image";
import type { PortfolioItem } from "@/lib/site";

type PortfolioCardProps = {
  item: PortfolioItem;
  priority?: boolean;
};

export function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-[4/3] bg-copper/10">
        {item.image ? (
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <div className="hero-grid flex h-full items-end p-5">
            <span className="rounded-full border border-copper/25 bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              Foto in curand
            </span>
          </div>
        )}
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
            {item.category}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-normal text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
        </div>
        <dl className="grid gap-2 text-sm text-muted">
          <div className="flex items-center justify-between gap-3">
            <dt>Model</dt>
            <dd className="font-semibold text-foreground">{item.model}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt>Culoare</dt>
            <dd className="font-semibold text-foreground">{item.color}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
