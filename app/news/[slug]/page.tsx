import Link from "next/link";
import { notFound } from "next/navigation";
import { news } from "@/data/news";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.id }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = news.find((entry) => entry.id === params.slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/news" className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
        ← BACK TO NEWS
      </Link>

      <article className="mt-10 border border-neutral-300 bg-[#f9f8f5] p-6 sm:p-8 lg:p-12">
        <div className="mb-8 flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
          <span>{item.category}</span>
          <span>•</span>
          <span>{item.date}</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-5xl lg:text-[6rem]">
          {item.title}
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-700">{item.body}</p>

        {item.externalLink ? (
          <a
            href={item.externalLink}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950"
          >
            VIEW EXTERNAL LINK ↗
          </a>
        ) : null}
      </article>
    </main>
  );
}
