import Link from "next/link";
import type { NewsItem } from "@/data/news";

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group border border-neutral-300 bg-[#f9f8f5] p-5 transition hover:-translate-y-1 hover:bg-white sm:p-6">
      <div className="mb-5 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
        <span>{item.category}</span>
        <span>{item.date}</span>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">{item.title}</h3>
      <p className="mt-4 text-base leading-7 text-neutral-700">{item.body}</p>
      {item.externalLink ? (
        <div className="mt-6">
          <Link href={item.externalLink} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
            READ ↗
          </Link>
        </div>
      ) : null}
    </article>
  );
}
