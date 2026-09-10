import Link from "next/link";
import { businesses } from "@/data/businesses";
import { projects } from "@/data/projects";
import { BusinessSection } from "@/components/business-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";

export default function HomePage() {
  return (
    <main className="bg-[#f5f4f0] text-neutral-950">
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="min-h-[72vh] border border-neutral-300 bg-[#f2f1ee] px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex min-h-[68vh] flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              <span>Osaka, Japan</span>
              <span>Independent company</span>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-24">
              <h1 className="text-[18vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-neutral-950 sm:text-[14vw] lg:text-[13vw]">
                WE BUILD.
                <span className="block">WE OWN.</span>
                <span className="block">WE GROW.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 md:text-lg">
                OMORO is an independent company building and operating digital products, brands and businesses.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">OMORO is an independent company building and operating digital products, brands and businesses.</p>
              <Link
                href="#businesses"
                className="inline-flex items-center gap-2 self-start border border-neutral-900 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                EXPLORE OUR BUSINESSES ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionTitle title="MAKE THE WORLD MORE OMORO." subtitle="世の中を、もっとおもろく。" />
          <div className="space-y-6 text-base leading-8 text-neutral-700">
            <p>
              OMOROは、Web、ブランド、アプリ、デジタルプロダクトなどを企画・開発・運営する会社です。
            </p>
            <p>
              「こんなのあったら面白い。」そのアイデアをアイデアのままで終わらせず、デザインし、開発し、世の中に出す。
            </p>
            <p className="text-lg font-medium text-neutral-900">私たちは、退屈じゃないものをつくります。</p>
          </div>
        </div>
      </section>

      <section id="businesses" className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="OUR BUSINESSES"
          title="WHAT WE BUILD."
          subtitle="OMOROが保有・運営するブランド・事業・プロダクトのPortfolio。"
        />

        <div className="mt-12 space-y-6">
          {businesses.map((business, index) => (
            <BusinessSection key={business.slug} business={business} highlight={index === 1} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="border border-neutral-300 bg-[#f1efe9] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">MANIFESTO</p>
              <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
                BORING
                <span className="block">IS NOT</span>
                <span className="block">OUR THING.</span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-neutral-700">
              <p>面白いアイデアは、たくさんある。</p>
              <p>でも、そのほとんどは「いつかやりたい」で終わる。</p>
              <p>私たちは、それをつくる。</p>
              <p>デザインする。コードを書く。売ってみる。失敗したら変える。</p>
              <p>そして、またつくる。</p>
              <p className="pt-5 text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">
                MAKE IT. BREAK IT. MAKE IT BETTER.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="THINGS WE'VE MADE." title="THINGS WE'VE MADE." subtitle="OMOROおよび各Businessが実際に制作・運営したものを掲載できるProject CMS風のデータ構造です。" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border border-neutral-300 bg-[#efece9] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">ABOUT</p>
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[5rem]">
              WE ARE
              <span className="block">OMORO.</span>
            </h2>
          </div>
          <div className="max-w-xl space-y-4 text-base leading-8 text-neutral-700">
            <p>OMOROは、アイデアを形にし、ブランドとデジタル事業として育てる会社です。</p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
              ABOUT OMORO →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border border-neutral-300 bg-[#f7f5f1] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">CAREERS</p>
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[5rem]">
              BUILD
              <span className="block">SOMETHING</span>
              <span className="block">OMORO.</span>
            </h2>
          </div>
          <div className="max-w-xl text-base leading-8 text-neutral-700">
            <Link href="/careers" className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
              EXPLORE CAREERS →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="border border-neutral-300 bg-neutral-950 px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">CONTACT</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-[7rem]">
            GOT AN
            <span className="block">INTERESTING</span>
            <span className="block">IDEA?</span>
          </h2>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-xl uppercase tracking-[-0.06em] text-neutral-200">LET&apos;S MAKE IT REAL.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 self-start border border-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950">
              CONTACT OMORO ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
