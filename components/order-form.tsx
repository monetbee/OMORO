"use client";

import type { Service } from "@/data/services";

export function OrderForm({ service, defaultServiceSlug }: { service: Service; defaultServiceSlug?: string }) {
  const selectedService = defaultServiceSlug ?? service.slug;

  return (
    <main className="mx-auto max-w-[1000px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 rounded-[24px] border border-amber-400/50 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        TODO: このフォームはUI実装完了済みです。送信API・バックエンド連携はまだ未実装です。
      </div>

      <div className="rounded-[32px] border border-black/10 bg-[#f8f6f3] p-6 sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">ORDER REQUEST</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl">{service.name}</h1>
        </div>

        <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Name</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="text" name="name" placeholder="Your name" />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Company / Brand</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="text" name="company" placeholder="Brand or company" />
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Email</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="email" name="email" placeholder="name@example.com" />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Selected Service</span>
              <input
                className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black"
                type="text"
                name="selectedService"
                value={selectedService}
                readOnly
              />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Budget</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="text" name="budget" placeholder="例: 200万円〜" />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Desired Launch Date</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="text" name="date" placeholder="例: 2026年12月" />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Current Website</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="url" name="currentWebsite" placeholder="https://" />
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Project Description</span>
              <textarea className="min-h-[140px] w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" name="description" placeholder="What is the project goal?" />
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Required Features</span>
              <textarea className="min-h-[100px] w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" name="features" placeholder="Required features and requests" />
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Reference Websites</span>
              <textarea className="min-h-[100px] w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" name="references" placeholder="Example websites or inspiration" />
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              SEND REQUEST
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
