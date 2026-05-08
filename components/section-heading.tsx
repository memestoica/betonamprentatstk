type SectionHeadingProps = {
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-8 max-w-3xl text-center" : "mb-8 max-w-3xl"}>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  );
}
