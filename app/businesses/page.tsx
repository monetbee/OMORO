import Link from "next/link";
import { businesses } from "@/data/businesses";

export default function BusinessesPage() {
  return (
    <main className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
      <section className="pb-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">OUR BUSINESSES</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
          OUR
          <span className="block">BUSINESSES.</span>
        </h1>
      </section>

      <div className="space-y-8">
        {businesses.map((business) => (
          <article key={business.slug} id={business.slug} className="border border-neutral-300 bg-[#f7f5f1] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{business.category}</p>
                <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.07em] text-neutral-950 sm:text-5xl lg:text-6xl">
                  {business.title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">{business.description}</p>
              </div>

              <div className="flex flex-col gap-4 border-t border-neutral-300 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                  <span>Status</span>
                  <span>{business.status}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                  <span>Website</span>
                  <Link href={business.website} className="text-neutral-950">{business.title}</Link>
                </div>
                <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                  <span>External</span>
                  <a href={business.externalUrl} target="_blank" rel="noreferrer" className="text-neutral-950">↗</a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
