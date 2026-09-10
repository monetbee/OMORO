import Link from "next/link";
import type { Business } from "@/data/businesses";

export function BusinessSection({ business, highlight = false }: { business: Business; highlight?: boolean }) {
  const isExternal = business.website.startsWith("http");

  return (
    <article
      id={business.slug}
      className={[
        "group relative overflow-hidden border border-neutral-300 bg-[#f9f8f5] transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(0,0,0,0.08)]",
        highlight ? "bg-neutral-950 text-white" : "bg-[#f9f8f5] text-neutral-950",
      ].join(" ")}
    >
      <div className="grid min-h-[520px] gap-8 p-5 sm:p-6 lg:grid-cols-[1.5fr_1fr] lg:p-10">
        <div className="flex flex-col justify-between">
          <div>
            <p
              className={[
                "mb-5 text-[10px] font-medium uppercase tracking-[0.25em]",
                highlight ? "text-neutral-300" : "text-neutral-500",
              ].join(" ")}
            >
              {business.category}
            </p>
            <h3 className="text-5xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-[5.2rem]">
              {business.title}
            </h3>
          </div>

          <div className="mt-8">
            <p className={[
              "max-w-xl text-lg leading-8",
              highlight ? "text-neutral-200" : "text-neutral-700",
            ].join(" ")}>
              {business.description}
            </p>
            <p
              className={[
                "mt-6 text-2xl font-black uppercase tracking-[-0.05em]",
                highlight ? "text-white" : "text-neutral-900",
              ].join(" ")}
            >
              {business.shortCopy}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-8 border-t border-current/20 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.25em]">
            <span className={highlight ? "text-neutral-300" : "text-neutral-500"}>{business.status}</span>
            <span className={highlight ? "text-neutral-300" : "text-neutral-500"}>Portfolio</span>
          </div>

          <div className="space-y-4">
            <p className={highlight ? "text-neutral-200" : "text-neutral-600"}>{business.description}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={business.website}
                className={[
                  "inline-flex items-center gap-2 border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition",
                  highlight
                    ? "border-white/40 text-white hover:bg-white hover:text-neutral-950"
                    : "border-neutral-800 text-neutral-950 hover:bg-neutral-950 hover:text-white",
                ].join(" ")}
              >
                {business.title === "GIRA®" ? "VISIT GIRA" : business.title === "OMORO WEB" ? "VISIT OMORO WEB" : business.title === "OMORO APPS" ? "EXPLORE OMORO APPS" : "ADVERTISE WITH OMORO"} ↗
              </Link>
              <a
                href={business.externalUrl}
                target="_blank"
                rel="noreferrer"
                className={[
                  "inline-flex items-center gap-2 border px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition",
                  highlight
                    ? "border-white/20 text-neutral-200 hover:bg-white/10"
                    : "border-neutral-500 text-neutral-700 hover:bg-neutral-950 hover:text-white",
                ].join(" ")}
              >
                {isExternal ? "EXTERNAL SITE" : "INTERNAL PAGE"} ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
