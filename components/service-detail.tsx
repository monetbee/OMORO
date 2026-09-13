import Link from "next/link";
import type { Service } from "@/data/services";

function formatPrice(price: number | null) {
  if (price === null) return "要相談";
  return `¥${new Intl.NumberFormat("ja-JP").format(price)}`;
}

export function ServiceDetailContent({ service }: { service: Service }) {
  return (
    <main className="mx-auto max-w-[1280px] px-4 pb-24 pt-8 sm:px-6 lg:px-8">
      <section className="border border-black/10 bg-[#f5f3ee] px-5 py-8 sm:p-8 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/50">{service.category}</p>
            <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl lg:text-[7rem]">
              {service.name}
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/order/${service.slug}`}
              className="inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            >
              ORDER THIS SERVICE
            </Link>
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center justify-center border border-black/15 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
            >
              ASK A QUESTION
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-3xl font-black uppercase tracking-[-0.06em] text-black sm:text-4xl">{service.headline}</p>
            <p className="max-w-xl text-base leading-8 text-black/70">{service.description}</p>
            <p className="max-w-xl text-base leading-8 text-black/70">{service.longDescription}</p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white/60 p-5">
            <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">WHAT IT IS</div>
            <div className="mt-4 space-y-3 text-sm leading-6 text-black/70">
              {service.features.map((feature) => (
                <div key={feature} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-black" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">WHAT WE BUILD</p>
          <h2 className="mt-5 text-3xl font-black uppercase tracking-[-0.07em] text-black sm:text-5xl">{service.name}</h2>
          <div className="mt-8 space-y-4 text-base leading-8 text-black/70">
            {service.deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-black/5 pb-2">
                <span className="inline-flex h-2 w-2 rounded-full bg-black" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-black/10 bg-[#f1efe9] p-6 sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">GOOD FOR</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {service.goodFor.map((item) => (
              <span key={item} className="rounded-full border border-black/10 bg-white px-3 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-black/70">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-10 space-y-4 text-base leading-8 text-black/70">
            <p>ブランドの認知や認証、商品やサービスに対する理解を一気に高めるために必要なのは、ただ美しいデザインではなく、伝わる構造です。</p>
            <p>このサービスは、売り手が伝えたい価値と、見ている人が感じる不安や疑問を同時に整える設計を行います。</p>
          </div>
        </div>
      </section>

      <section className="mt-20 border border-black/10 bg-[#171717] p-6 text-white sm:p-8 lg:p-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">WHAT&apos;S INCLUDED</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {service.deliverables.map((item) => (
            <div key={item} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">DELIVERABLE</div>
              <p className="mt-3 text-xl font-black uppercase tracking-[-0.06em] text-white">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">PROCESS</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {service.process.map((step, index) => (
            <div key={step} className="rounded-[24px] border border-black/10 bg-[#f4f2ee] p-5">
              <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">0{index + 1}</div>
              <p className="mt-5 text-2xl font-black uppercase tracking-[-0.06em] text-black">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border border-black/10 bg-[#f5f4f1] p-6 sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">TECHNOLOGY</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span key={tech} className="rounded-full border border-black/10 bg-white px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/70">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="border border-black/10 bg-white p-6 sm:p-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">PRICING</p>
          <div className="mt-5 flex items-end gap-2">
            <span className="text-5xl font-black uppercase tracking-[-0.08em] text-black">{formatPrice(service.price)}</span>
            {service.price === null ? <span className="pb-2 text-sm uppercase tracking-[0.22em] text-black/60">ASK FOR A QUOTE</span> : null}
          </div>
          <p className="mt-4 text-base leading-8 text-black/70">
            価格は案件の規模と範囲で変動します。必要な要件や運用体制を確認したうえで、最適な提案をまとめます。
          </p>
        </div>
      </section>

      <section className="mt-20 border border-black/10 bg-[#f3f1ee] p-6 sm:p-8">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/45">FAQ</p>
        <div className="mt-8 space-y-6">
          {service.faq.map((item) => (
            <div key={item.question} className="border-b border-black/10 pb-5 last:border-b-0 last:pb-0">
              <p className="text-lg font-black uppercase tracking-[-0.05em] text-black">{item.question}</p>
              <p className="mt-3 max-w-3xl text-base leading-8 text-black/70">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 border border-black bg-black px-6 py-8 text-white sm:px-8 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">READY TO BUILD?</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">LET&apos;S MAKE IT OMOROI.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/order/${service.slug}`}
              className="inline-flex items-center justify-center border border-white bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
            >
              ORDER THIS SERVICE
            </Link>
            <Link
              href={`/contact?service=${service.slug}`}
              className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
