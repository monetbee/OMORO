"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/businesses", label: "BUSINESSES" },
  { href: "/about", label: "ABOUT" },
  { href: "/news", label: "NEWS" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-[#f5f4f0]/80 backdrop-blur-md" : "bg-[#f5f4f0]/60 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-black tracking-[0.14em] text-neutral-950 uppercase">
          OMORO®
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-neutral-950">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 border border-neutral-900 px-3 py-2 text-[10px] tracking-[0.2em] uppercase text-neutral-950 transition hover:bg-neutral-900 hover:text-white"
          >
            LET&apos;S TALK ↗
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
            <span className="block h-px w-4 bg-current" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-neutral-300 bg-[#f5f4f0] md:hidden">
          <nav className="mx-auto flex max-w-[1600px] flex-col gap-4 px-4 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-800">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-1">
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center gap-2 text-neutral-950"
            >
              LET&apos;S TALK ↗
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
