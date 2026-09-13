"use client";

import { services } from "@/data/services";

export function ContactForm({ selectedServiceSlug }: { selectedServiceSlug?: string }) {
  const selectedService = services.find((service) => service.slug === selectedServiceSlug);

  return (
    <main className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-black/10 bg-[#f8f6f3] p-6 sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-black/45">CONTACT</p>
          <h1 className="mt-3 text-4xl font-black uppercase tracking-[-0.08em] text-black sm:text-6xl">LET&apos;S TALK.</h1>
        </div>

        <div className="mb-8 rounded-[20px] border border-amber-400/50 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          TODO: この問い合わせフォームはUI実装完了済みで、送信API連携はまだ未実装です。
        </div>

        <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Name</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="text" placeholder="Your name" />
            </label>
            <label className="block text-sm text-black/70">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Email</span>
              <input className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" type="email" placeholder="name@example.com" />
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Service</span>
              <select className="w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" defaultValue={selectedService?.slug ?? ""}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.slug}>
                    {service.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-black/70 md:col-span-2">
              <span className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-black/45">Project Overview</span>
              <textarea className="min-h-[160px] w-full border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-black" placeholder="Tell us about your project" />
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center border border-black bg-black px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
