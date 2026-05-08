type CalloutCardProps = {
  title: string;
  description: string;
};

export function CalloutCard({ title, description }: CalloutCardProps) {
  return (
    <article className="rounded-[1.5rem] border border-border bg-card/92 p-5 shadow-soft backdrop-blur">
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
