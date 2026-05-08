import type { PortfolioItem } from "@/lib/site";

type PlaceholderGalleryCardProps = {
  item: PortfolioItem;
};

export function PlaceholderGalleryCard({ item }: PlaceholderGalleryCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft">
      <div className="hero-grid flex aspect-[4/3] items-end border-b border-border bg-gradient-to-br from-copper/15 via-transparent to-background p-5">
        <span className="rounded-full border border-copper/25 bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
          Foto in curand
        </span>
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-display text-2xl font-semibold text-foreground">{item.title}</h3>
        <dl className="grid gap-2 text-sm text-muted">
          <div className="flex items-center justify-between gap-3">
            <dt>Locatie</dt>
            <dd className="font-semibold text-foreground">{item.location}</dd>
          </div>
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
