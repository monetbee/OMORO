import { SectionTitle } from "@/components/section-title";

const leaders = [
  {
    name: "Reina Tokunaga",
    role: "Founder / CEO",
    summary: "A founder focused on turning ideas into products, brands and businesses that live in the real world.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="ABOUT" title="WHO WE ARE" subtitle="OMOROについて説明します。" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 text-lg leading-8 text-neutral-700">
          <p>
            OMOROは、アイデアを形にし、デザインし、開発し、実際に世の中に出していく会社です。
          </p>
          <p>
            Web、ブランド、アプリ、デジタルプロダクト、広告など、事業領域そのものに会社を縛りません。
          </p>
          <p>
            何をしている会社なのか。答えはシンプルです。WE BUILD THINGS.
          </p>
        </div>
        <div className="border border-neutral-300 bg-[#f3f1ee] p-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">PHILOSOPHY</p>
          <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950">
            「おもろい」
          </h3>
          <p className="mt-4 text-base leading-7 text-neutral-700">
            「おもろい」は、ただ笑えるという意味ではありません。新しい。意外。ちょっと変。なんか気になる。
          </p>
        </div>
      </div>

      <section className="mt-20">
        <SectionTitle title="PHILOSOPHY" />
        <div className="mt-10 max-w-4xl border border-neutral-300 bg-white p-6 sm:p-8 lg:p-12">
          <p className="text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950 sm:text-5xl">
            「おもろい」は、ただ笑えるという意味ではありません。
          </p>
          <p className="mt-8 text-lg leading-8 text-neutral-700">
            新しい。意外。ちょっと変。なんか気になる。そんなものを、私たちは「OMORO」と呼びます。
          </p>
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle title="LEADERSHIP" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="border border-neutral-300 bg-[#f8f7f4] p-6">
              <div className="mb-8 h-52 bg-neutral-200" aria-hidden="true" />
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">LEADERSHIP</p>
              <h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950">{leader.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-neutral-600">{leader.role}</p>
              <p className="mt-5 text-base leading-7 text-neutral-700">{leader.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle title="COMPANY INFORMATION" />
        <div className="mt-10 grid gap-6 border border-neutral-300 bg-[#f9f8f5] p-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-5 text-base text-neutral-700">
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">Company Name:</span> OMORO合同会社</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">English:</span> OMORO LLC</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">Founded:</span> 2026</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">Headquarters:</span> Osaka, Japan</p>
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">Representative:</span> Reina Tokunaga</p>
          </div>
          <div className="space-y-5 text-base text-neutral-700">
            <p><span className="font-medium uppercase tracking-[0.14em] text-neutral-500">Business Areas:</span> Digital Services</p>
            <p>Software</p>
            <p>Consumer Brands</p>
            <p>E-commerce</p>
            <p>Advertising</p>
            <p className="mt-6 text-sm text-neutral-500">TODO: Specific address details to be confirmed.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
