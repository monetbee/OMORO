"use client";

import { useState } from "react";

const inquiryTypes = ["BUSINESS", "PARTNERSHIP", "PRESS", "CAREERS", "OTHER"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    inquiryType: "BUSINESS",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) nextErrors.name = "Name is required.";
    if (!formData.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = "Please enter a valid email.";
    if (!formData.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    console.info("TODO: connect this form to a real backend or email service.");
  };

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">CONTACT</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[7rem]">
          LET&apos;S
          <span className="block">TALK.</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 grid gap-8 border border-neutral-300 bg-[#f9f8f5] p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">INQUIRY</p>
          <p className="mt-6 text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">Let&apos;s make it real.</p>
          <p className="mt-5 text-base leading-7 text-neutral-700">
            This UI is implemented as a frontend-ready contact form. A backend integration is still TODO.
          </p>
        </div>

        <div className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
              {errors.name ? <span className="mt-1 block text-xs text-red-600">{errors.name}</span> : null}
            </label>

            <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
              Company
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
              />
            </label>
          </div>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
            />
            {errors.email ? <span className="mt-1 block text-xs text-red-600">{errors.email}</span> : null}
          </label>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            Inquiry Type
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="mt-2 w-full border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          <label className="block text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="mt-2 w-full resize-none border border-neutral-300 bg-white px-3 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-900"
            />
            {errors.message ? <span className="mt-1 block text-xs text-red-600">{errors.message}</span> : null}
          </label>

          <div className="flex items-center justify-between gap-4 pt-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 border border-neutral-900 bg-neutral-950 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-neutral-950"
            >
              SEND MESSAGE ↗
            </button>
            {submitted ? <span className="text-xs uppercase tracking-[0.14em] text-neutral-600">Submitted</span> : null}
          </div>
        </div>
      </form>
    </main>
  );
}
