import Link from "next/link";
import { businesses } from "@/data/businesses";
import { news } from "@/data/news";
import { careerOpenings, futureOpportunities } from "@/data/careers";
import { BusinessSection } from "@/components/business-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { NewsCard } from "@/components/news-card";
import { CareerCard } from "@/components/career-card";
import { en } from "@/messages/en";
import { ja } from "@/messages/ja";
import { projects } from "@/data/projects";

export type SiteLocale = "en" | "ja";

function getMessages(locale: SiteLocale) {
  return locale === "ja" ? ja : en;
}

export function HomeContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);

  return (
    <main className="bg-[#f5f4f0] text-neutral-950">
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="min-h-[72vh] border border-neutral-300 bg-[#f2f1ee] px-4 py-8 sm:px-8 lg:px-12 lg:py-10">
          <div className="flex min-h-[68vh] flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-600">
              <span>{locale === "ja" ? t.home.location : "Osaka, Japan"}</span>
              <span>{locale === "ja" ? t.home.independent : "Independent company"}</span>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-24">
              <h1 className="text-[18vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-neutral-950 sm:text-[14vw] lg:text-[13vw]">
                {locale === "ja" ? (
                  <>
                    {t.home.heroPrimary}
                    <span className="block">{t.home.heroSecondary}</span>
                    <span className="block">{t.home.heroTertiary}</span>
                  </>
                ) : (
                  <>
                    {t.home.heroPrimary}
                    <span className="block">{t.home.heroSecondary}</span>
                    <span className="block">{t.home.heroTertiary}</span>
                  </>
                )}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-700 md:text-lg">
                {t.home.intro}
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-neutral-300 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">{t.home.introDetail}</p>
              <Link
                href={locale === "ja" ? "/jp/businesses" : "/businesses"}
                className="inline-flex items-center gap-2 self-start border border-neutral-900 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                {t.nav.exploreBusinesses}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
          <span>{locale === "ja" ? "OUR STORY" : "OUR STORY"}</span>
          <span className="text-neutral-700">{locale === "ja" ? "それ、おもろい？" : "IS IT OMOROI?"}</span>
        </div>
        <div className="overflow-hidden border border-neutral-300 bg-[#f1efe9] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="space-y-8">
            <p className="text-[20vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-neutral-950 sm:text-[15vw] lg:text-[11vw]">
              {locale === "ja" ? "それ、おもろい？" : "IS IT OMOROI?"}
            </p>
            <p className="max-w-3xl text-sm uppercase tracking-[0.24em] text-neutral-600 sm:text-base">
              {locale === "ja" ? "OMOROI を、どうつくるか。" : "The question behind everything we build."}
            </p>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
              <div className="space-y-6">
                <p className="text-base leading-8 text-neutral-700 md:text-lg">
                  {locale === "ja"
                    ? "OMOROが何かをつくるとき、最初に考えることがあります。\n「それ、おもろい？」"
                    : "Whenever we build something, we start with one question. “Is it omoroi?”"}
                </p>
                <p className="text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950 md:text-4xl">
                  {locale === "ja" ? "世の中を、もっとおもろく。" : "MAKE THE WORLD MORE OMOROI."}
                </p>
              </div>
              <Link
                href={locale === "ja" ? "/jp/about" : "/about"}
                className="inline-flex items-center gap-2 self-start border border-neutral-900 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                {locale === "ja" ? "OMOROについて →" : "DISCOVER OMOROI →"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <SectionTitle
            title={locale === "ja" ? "世の中を、もっとおもろく。" : "MAKE THE WORLD MORE OMORO."}
            subtitle={locale === "ja" ? "OMOROは、Web、ブランド、アプリ、デジタルプロダクトなどを企画・開発・運営する会社です。" : "OMORO builds and operates digital products, brands and businesses."}
          />
          <div className="space-y-6 text-base leading-8 text-neutral-700">
            <p>{locale === "ja" ? t.intro.heading : t.intro.heading}</p>
            <p>{locale === "ja" ? t.intro.body : t.intro.body}</p>
            <p className="text-lg font-medium text-neutral-900">{locale === "ja" ? t.intro.emphasis : t.intro.emphasis}</p>
          </div>
        </div>
      </section>

      <section id="businesses" className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={locale === "ja" ? "事業紹介" : "OUR BUSINESSES"}
          title={locale === "ja" ? "事業紹介" : "WHAT WE BUILD."}
          subtitle={locale === "ja" ? "OMOROが保有・運営するブランドとデジタル事業のポートフォリオです。" : "A portfolio of the brands, businesses and digital products OMORO builds and operates."}
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
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "MANIFESTO" : "MANIFESTO"}</p>
              <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
                {locale === "ja" ? "退屈は、" : "BORING"}
                <span className="block">{locale === "ja" ? "いらない。" : "IS NOT"}</span>
                <span className="block">{locale === "ja" ? "" : "OUR THING."}</span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-neutral-700">
              <p>{locale === "ja" ? t.manifesto.paragraph1 : t.manifesto.paragraph1}</p>
              <p>{locale === "ja" ? t.manifesto.paragraph2 : t.manifesto.paragraph2}</p>
              <p>{locale === "ja" ? t.manifesto.paragraph3 : t.manifesto.paragraph3}</p>
              <p>{locale === "ja" ? t.manifesto.paragraph4 : t.manifesto.paragraph4}</p>
              <p>{locale === "ja" ? t.manifesto.paragraph5 : t.manifesto.paragraph5}</p>
              <p className="pt-5 text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">
                {locale === "ja" ? "つくって。壊して。もっとよくする。" : "MAKE IT. BREAK IT. MAKE IT BETTER."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle eyebrow={locale === "ja" ? "つくってきたもの" : "THINGS WE'VE MADE."} title={locale === "ja" ? "つくってきたもの" : "THINGS WE'VE MADE."} subtitle={locale === "ja" ? "OMOROおよび各事業で実際に制作・運営したものを紹介します。" : "A flexible project archive for future product, brand and business work."} />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border border-neutral-300 bg-[#efece9] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "OMOROについて" : "ABOUT"}</p>
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[5rem]">
              {locale === "ja" ? "OMORO" : "WE ARE"}
              <span className="block">{locale === "ja" ? "とは" : "OMORO."}</span>
            </h2>
          </div>
          <div className="max-w-xl space-y-4 text-base leading-8 text-neutral-700">
            <p>{locale === "ja" ? t.about.body : t.about.body}</p>
            <Link href={locale === "ja" ? "/jp/about" : "/about"} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
              {locale === "ja" ? "OMOROについて →" : "ABOUT OMORO →"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border border-neutral-300 bg-[#f7f5f1] p-6 sm:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "採用" : "CAREERS"}</p>
            <h2 className="text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[5rem]">
              {locale === "ja" ? "一緒に、" : "BUILD"}
              <span className="block">{locale === "ja" ? "おもろいものを" : "SOMETHING"}</span>
              <span className="block">{locale === "ja" ? "つくろう。" : "OMORO."}</span>
            </h2>
          </div>
          <div className="max-w-xl text-base leading-8 text-neutral-700">
            <Link href={locale === "ja" ? "/jp/careers" : "/careers"} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
              {locale === "ja" ? "採用情報を見る →" : "EXPLORE CAREERS →"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="border border-neutral-300 bg-neutral-950 px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">{locale === "ja" ? "お問い合わせ" : "CONTACT"}</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-[7rem]">
            {locale === "ja" ? "おもろい話、" : "GOT AN"}
            <span className="block">{locale === "ja" ? "しませんか。" : "INTERESTING"}</span>
            <span className="block">{locale === "ja" ? "" : "IDEA?"}</span>
          </h2>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-xl uppercase tracking-[-0.06em] text-neutral-200">{locale === "ja" ? "一緒に、現実にしてみましょう。" : "LET'S MAKE IT REAL."}</p>
            <Link href={locale === "ja" ? "/jp/contact" : "/contact"} className="inline-flex items-center gap-2 self-start border border-white px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950">
              {locale === "ja" ? "お問い合わせ ↗" : "CONTACT OMORO ↗"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export function AboutContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow={t.about.eyebrow} title={locale === "ja" ? "OMOROとは" : "WHO WE ARE"} subtitle={locale === "ja" ? "OMOROについて説明します。" : "A company built around OMOROI."} />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-lg leading-8 text-neutral-700">
          <p>{locale === "ja" ? t.about.body : t.about.body}</p>
          <p>{locale === "ja" ? t.about.body2 : t.about.body2}</p>
          <p>{locale === "ja" ? "何をしている会社なのか。答えはシンプルです。WE BUILD THINGS." : "What we do is simple: WE BUILD THINGS."}</p>
        </div>
        <div className="border border-neutral-300 bg-[#f3f1ee] p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">PHILOSOPHY</p>
          <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950">{locale === "ja" ? "おもろい" : "OMOROI"}</h3>
          <p className="mt-4 text-base leading-7 text-neutral-700">
            {locale === "ja"
              ? "「おもろい」は、ただ笑えるという意味ではありません。新しい。意外。ちょっと変。なんか気になる。"
              : "OMOROI is not just “fun.” It is interesting, unexpected, unconventional, and worth noticing."}
          </p>
        </div>
      </div>

      <section className="mt-20">
        <div className="overflow-hidden border border-neutral-300 bg-[#f9f8f5] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <div className="space-y-8">
            <p className="text-[16vw] font-black uppercase leading-[0.8] tracking-[-0.09em] text-neutral-950 sm:text-[11vw] lg:text-[9vw]">
              {locale === "ja" ? "それ、おもろい？" : "IS IT OMOROI?"}
            </p>
            <p className="max-w-3xl text-sm uppercase tracking-[0.24em] text-neutral-600 sm:text-base">{locale === "ja" ? "OUR STORY" : "OUR STORY"}</p>
            <p className="max-w-4xl text-xl leading-relaxed text-neutral-700 md:text-2xl">
              {locale === "ja"
                ? "OMOROが何かをつくるとき、最初に考えることがあります。\n「それ、おもろい？」"
                : "Whenever we build something, we start with one question. “Is it omoroi?”"}
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <p className="text-base leading-8 text-neutral-700 md:text-lg">
                {locale === "ja"
                  ? "儲かるか。実現できるか。効率がいいか。もちろん、どれも大切です。でも、それだけではOMOROは動きません。"
                  : "Can it make money? Can we build it? Does it make sense? Of course, those things matter. But they are not enough to make OMORO move."}
              </p>
              <p className="text-base leading-8 text-neutral-700 md:text-lg">
                {locale === "ja"
                  ? "新しいか。意外か。ちょっと変か。なんか気になるか。誰かに話したくなるか。そこにひとつでも「おもろい」があるなら、私たちはつくってみます。"
                  : "Is it new? Is it unexpected? Is it a little strange? Does it make you curious? Would you want to tell someone about it? If there is something OMOROI about an idea, we want to try building it."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle title={locale === "ja" ? "OMOROI" : "OMOROI"} />
        <div className="mt-10 max-w-5xl border border-neutral-300 bg-white p-6 sm:p-8 lg:p-12">
          <p className="text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950 sm:text-5xl">
            {locale === "ja" ? "おもろい。" : "OMOROI"}
          </p>
          <p className="mt-6 text-lg text-neutral-600">{locale === "ja" ? "(interesting, unexpected, unconventional, and worth talking about.)" : "(interesting, unexpected, unconventional, and worth talking about.)"}</p>
          <p className="mt-8 text-lg leading-8 text-neutral-700">
            {locale === "ja"
              ? "「おもろい」は、ただ笑えるという意味じゃない。新しい。意外。ちょっと変。なんか気になる。思わず誰かに話したくなる。そんなものを、私たちはOMOROIと呼びます。"
              : "“Omoroi” is not just “funny” or “interesting.” It means something new, unexpected, a little strange, impossible to ignore, and worth talking about. That is what we call OMOROI."}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-5xl border border-neutral-300 bg-[#f8f7f4] p-6 sm:p-8 lg:p-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "OUR QUESTION" : "OUR QUESTION"}</p>
          <h3 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[6rem]">
            {locale === "ja" ? "それ、おもろい？" : "IS IT OMOROI?"}
          </h3>
          <p className="mt-8 text-lg leading-8 text-neutral-700">
            {locale === "ja"
              ? "これは、私たちの答えではありません。問いです。新しい事業を始めるとき。プロダクトをつくるとき。デザインを選ぶとき。何かを変えようとするとき。OMOROは問いかけます。"
              : "It is not our answer. It is our question. When we start a business, build a product, choose a design, or decide to change something, we ask: “Is it OMOROI?”"}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-5xl border border-neutral-300 bg-neutral-950 p-6 text-white sm:p-8 lg:p-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">{locale === "ja" ? "OUR MISSION" : "OUR MISSION"}</p>
          <h3 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl lg:text-[6rem]">
            {locale === "ja" ? "世の中を、もっとおもろく。" : "MAKE THE WORLD\nMORE OMOROI."}
          </h3>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-200">
            {locale === "ja"
              ? "OMOROは、ブランド、Web、アプリ、デジタルプロダクト、そしてこれから生まれる新しい事業を通して、『おもろい』をひとつずつ増やしていきます。"
              : "Through brands, websites, apps, digital products and whatever we build next, OMORO exists to put a little more OMOROI into the world."}
          </p>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle title={locale === "ja" ? "会社情報" : "COMPANY INFORMATION"} />
        <div className="mt-10 grid gap-6 border border-neutral-300 bg-[#f9f8f5] p-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-5 text-base text-neutral-700">
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">{locale === "ja" ? "会社名" : "Company"}</span>: {locale === "ja" ? "OMORO合同会社" : "OMORO LLC"}</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">{locale === "ja" ? "所在地" : "Headquarters"}</span>: {locale === "ja" ? "大阪府" : "Osaka, Japan"}</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">{locale === "ja" ? "設立" : "Founded"}</span>: {locale === "ja" ? "2026年" : "2026"}</p>
          </div>
          <div className="space-y-5 text-base text-neutral-700">
            <p>{locale === "ja" ? "ブランド、Web、アプリ、デジタルプロダクトを企画・開発・運営する会社です。" : "A company building and operating digital products, brands and businesses."}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export function BusinessesContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);

  return (
    <main className="mx-auto max-w-[1500px] px-4 py-16 sm:px-6 lg:px-8">
      <section className="pb-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{t.businesses.eyebrow}</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
          {locale === "ja" ? "事業" : "OUR"}
          <span className="block">{locale === "ja" ? "紹介" : "BUSINESSES."}</span>
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
                  <span>{t.businesses.status}</span>
                  <span>{business.status}</span>
                </div>
                <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                  <span>{t.businesses.website}</span>
                  <Link href={locale === "ja" ? "/jp" + business.website : business.website} className="text-neutral-950">{business.title}</Link>
                </div>
                <div className="flex items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
                  <span>{t.businesses.external}</span>
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

export function NewsContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);
  const publishedNews = news.filter((item) => item.published);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{t.news.eyebrow}</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[6rem]">
          {locale === "ja" ? "ニュース" : "NEWS"}
        </h1>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {publishedNews.length > 0 ? (
          publishedNews.map((item) => <NewsCard key={item.id} item={item} />)
        ) : (
          <div className="md:col-span-2 xl:col-span-3 border border-neutral-300 bg-[#f9f8f5] p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">DRAFT</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-neutral-950">
              {locale === "ja" ? "まだ公開中のニュースはありません。" : "No public news yet."}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700">
              {locale === "ja" ? "今後、公開する記事はデータ層で管理できます。" : "Example draft items are defined in the data layer and can be published later without changing the UI."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export function CareersContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);

  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{t.careers.eyebrow}</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[6rem]">
          {locale === "ja" ? "一緒に、" : "BUILD"}
          <span className="block">{locale === "ja" ? "おもろいものを" : "SOMETHING"}</span>
          <span className="block">{locale === "ja" ? "つくろう。" : "OMORO."}</span>
        </h1>
      </div>

      <div className="mt-12 border border-neutral-300 bg-[#f7f5f1] p-6 sm:p-8">
        {careerOpenings.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {careerOpenings.map((opening) => (
              <CareerCard key={opening.id} opening={opening} />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">{t.careers.currentStatus}</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-neutral-950">
              {locale === "ja" ? "現在募集中の\nポジションはありません。" : "THERE ARE CURRENTLY\nNO OPEN POSITIONS."}
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-700">{locale === "ja" ? "今後の募集情報は随時こちらで発表します。" : "Future opportunities will be posted here."}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {futureOpportunities.map((item) => (
                <span key={item} className="border border-neutral-300 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export function ContactContent({ locale }: { locale: SiteLocale }) {
  const t = getMessages(locale);
  const inquiryTypes = locale === "ja" ? t.contact.types : ["BUSINESS", "PARTNERSHIP", "PRESS", "CAREERS", "OTHER"];

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "お問い合わせ" : "CONTACT"}</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
          {locale === "ja" ? "おもろい話、" : "LET'S"}
          <span className="block">{locale === "ja" ? "しませんか。" : "TALK."}</span>
        </h1>
      </div>

      <form className="mt-12 grid gap-8 border border-neutral-300 bg-[#f9f8f5] p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">{locale === "ja" ? "お問い合わせ種別" : "INQUIRY"}</p>
          <p className="mt-6 text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">{locale === "ja" ? "一緒に、現実にしてみましょう。" : "Let’s make it real."}</p>
          <p className="mt-5 text-base leading-7 text-neutral-700">
            {locale === "ja" ? t.contact.shortText : t.contact.shortText}
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
              {locale === "ja" ? "お名前" : "Name"}
              <input
                value=""
                className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
            </label>

            <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
              {locale === "ja" ? "会社名" : "Company"}
              <input
                value=""
                className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
            </label>
          </div>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            {locale === "ja" ? "メールアドレス" : "Email"}
            <input
              type="email"
              value=""
              className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
            />
          </label>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            {locale === "ja" ? "お問い合わせ種別" : "Inquiry Type"}
            <select className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900">
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            {locale === "ja" ? "メッセージ" : "Message"}
            <textarea rows={6} className="mt-2 w-full resize-none border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900" />
          </label>

          <div className="flex items-center justify-between gap-4 pt-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950"
            >
              {locale === "ja" ? "送信する ↗" : "SEND MESSAGE ↗"}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
