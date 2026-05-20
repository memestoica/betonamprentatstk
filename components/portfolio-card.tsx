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
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-3 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-copper">
          {item.category}
        </p>
        <h3 className="font-display text-2xl font-semibold tracking-normal text-foreground">
          {item.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{item.description}</p>
      </div>
    </article>
  );
}
