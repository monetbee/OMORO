type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.26em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-4xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-5xl lg:text-7xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
