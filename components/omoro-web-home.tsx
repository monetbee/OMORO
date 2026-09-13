"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ServiceOrbit } from "@/components/service-orbit";
import { services } from "@/data/services";
import { works } from "@/data/works";

const capabilities = ["Design", "Development", "E-commerce", "AI", "Brand Experience"];
const technologies = ["Figma", "TypeScript", "React", "Next.js", "Shopify", "Vercel"];

export function OmoroWebHome() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <main className="bg-[#f5f3ee] text-black">
      <section className="mx-auto max-w-[1440px] px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        <div className="rounded-[32px] border border-black/10 bg-[#f7f5f2] p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.25em] text-black/55">
            <span>OMORO WEB</span>
            <span>Creative × Experimental × Premium × Usable</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex min-h-[620px] flex-col justify-between">
              <div className="max-w-[660px] pt-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/55">DESIGN. DEVELOP. LAUNCH.</p>
                <h1 className="mt-4 text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.09em] text-black sm:text-[9vw] lg:text-[7.5vw]">
                  IS IT <span className="block">OMOROI?</span>
                </h1>
              </div>

              <div className="mt-8 max-w-xl text-base leading-8 text-black/72 sm:text-lg">
                見た目だけじゃない。ちゃんと使えるWebをつくる。
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
                >
                  DISCOVER SERVICES
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-black/15 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-black transition hover:bg-black hover:text-white"
                >
                  START A PROJECT
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <ServiceOrbit services={services} />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">SERVICE</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl">WE DON&apos;T JUST MAKE WEBSITES.</h2>
          </div>
          <p className="max-w-md text-base leading-8 text-black/70">
            目的と体験とブランドの価値を一つにして、使いやすく、伝わりやすく、依頼者にとって次の一歩になるWebを設計します。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group block rounded-[28px] border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/50">{service.category}</span>
                <span className="rounded-full border border-black/10 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-black/60">
                  {service.shortName}
                </span>
              </div>
              <p className="mt-5 text-2xl font-black uppercase tracking-[-0.06em] text-black">{service.name}</p>
              <p className="mt-4 text-base leading-7 text-black/70">{service.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 text-[10px] font-medium uppercase tracking-[0.2em] text-black/60">
                <span>VIEW SERVICE</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">SELECTED WORK</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl">CONCEPT PROJECTS</h2>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {works.map((work, index) => (
            <motion.div
              key={`${work.title}-${index}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex h-full flex-col rounded-[28px] border border-black/10 p-5"
              style={{ background: work.accent }}
            >
              <div className="flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-black/55">
                <span>{work.label}</span>
                {work.isConcept ? <span>CONCEPT</span> : null}
              </div>
              <div className="mt-8 text-4xl font-black uppercase tracking-[-0.08em] text-black">{work.title}</div>
              <div className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-black/60">{work.category}</div>
              <p className="mt-6 text-base leading-8 text-black/70">{work.description}</p>
              <p className="mt-auto pt-8 text-sm leading-7 text-black/60">{work.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-black/10 bg-[#f3f0eb] p-6 sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">CAPABILITIES</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl">DESIGN. DEVELOP. SHIP.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {capabilities.map((item) => (
                <span key={item} className="rounded-full border border-black/10 bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">PROCESS</p>
          <h2 className="mt-3 text-5xl font-black uppercase tracking-[-0.08em] text-black sm:text-7xl">THINK. DESIGN. BUILD. SHIP.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["THINK", "課題と狙いを整理し、何を作るべきかを定義します。"],
            ["DESIGN", "情報設計と視覚設計を並走させ、伝わる体験をつくります。"],
            ["BUILD", "実装し、動きと品質を整えながら、使いやすさを磨きます。"],
            ["SHIP", "公開前の確認を終え、目的を達成するWebをリリースします。"],
          ].map(([title, copy]) => (
            <motion.div
              key={title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-[24px] border border-black/10 bg-white p-6"
            >
              <div className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">0{title === "THINK" ? 1 : title === "DESIGN" ? 2 : title === "BUILD" ? 3 : 4}</div>
              <p className="mt-6 text-3xl font-black uppercase tracking-[-0.07em] text-black">{title}</p>
              <p className="mt-4 text-base leading-8 text-black/70">{copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-black/10 bg-[#171717] p-6 text-white sm:p-8 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">TECHNOLOGY</p>
              <h2 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl">BUILT WITH INTENT.</h2>
            </div>
            <div className="flex max-w-xl flex-wrap gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/75">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-[#f4f1ec] p-6 sm:p-8 lg:p-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">PHILOSOPHY</p>
          <h2 className="mt-5 text-[18vw] font-black uppercase leading-[0.82] tracking-[-0.09em] text-black sm:text-[10vw]">
            それ、<span className="block">おもろい？</span>
          </h2>
          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">IS IT OMOROI?</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <p className="text-xl leading-9 text-black/75 md:text-2xl">
              Webサイトは情報を置く場所ではなく、人が触って、動いて、記憶するもの。
              その体験の質が、ブランドの価値を決めます。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
            >
              HAVE AN IDEA?
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1280px] px-4 pb-24 pt-8 sm:px-6 lg:px-8 lg:pb-32">
        <div className="rounded-[32px] border border-black bg-black px-5 py-8 text-white sm:px-8 lg:px-12 lg:py-12">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">FINAL CTA</p>
          <h2 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-white sm:text-6xl lg:text-[7rem]">
            LET&apos;S MAKE IT
            <span className="block">OMOROI.</span>
          </h2>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-white/70">Webがただあるのではなく、伝わる体験として機能すること。そこに価値があります。</p>
            <Link href="/contact" className="inline-flex items-center justify-center border border-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black">
              START A PROJECT ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
