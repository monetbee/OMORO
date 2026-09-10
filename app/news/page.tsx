import { NewsCard } from "@/components/news-card";
import { news } from "@/data/news";

export default function NewsPage() {
  const publishedNews = news.filter((item) => item.published);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">NEWSROOM</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[6rem]">
          NEWS
        </h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {publishedNews.length > 0 ? (
          publishedNews.map((item) => <NewsCard key={item.id} item={item} />)
        ) : (
          <div className="md:col-span-2 xl:col-span-3 border border-neutral-300 bg-[#f9f8f5] p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">DRAFT</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-neutral-950">
              No public news yet.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700">
              Example draft items are defined in the data layer and can be published later without changing the UI.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
