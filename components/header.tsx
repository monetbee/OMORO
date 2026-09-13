"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#services", label: "SERVICES" },
  { href: "/#work", label: "WORK" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#process", label: "PROCESS" },
  { href: "/contact", label: "CONTACT" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  usePathname();

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
        scrolled ? "bg-[#f5f3ee]/85 backdrop-blur-md" : "bg-[#f5f3ee]/70 backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-base font-black uppercase tracking-[0.14em] text-black">
            OMORO WEB
          </Link>
        </div>

        <nav className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.2em] text-black/70 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-black">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center gap-2 border border-black bg-black px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black">
            START A PROJECT ↗
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <a href="https://omoro.co" target="_blank" rel="noreferrer" className="text-[10px] font-medium uppercase tracking-[0.18em] text-black/70">
            OMORO ↗
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black"
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

        <a href="https://omoro.co" target="_blank" rel="noreferrer" className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-black/70 md:inline-flex">
          OMORO ↗
        </a>
      </div>

      {isOpen ? (
        <div className="border-t border-black/10 bg-[#f5f3ee] md:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-black/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="py-1">
                {item.label}
              </Link>
            ))}
            <a href="https://omoro.co" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-black">
              OMORO ↗
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
