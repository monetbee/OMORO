import Link from "next/link";

const footerLinks = [
  { href: "/#services", label: "SERVICES" },
  { href: "/#work", label: "WORK" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#process", label: "PROCESS" },
  { href: "/contact", label: "CONTACT" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#171717] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="max-w-4xl">
            <p className="text-4xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-[7rem]">MAKE IT</p>
            <p className="text-4xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-[7rem]">OMOROI.</p>
          </div>

          <div className="flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-6 text-sm text-white/65">
              <a href="https://omoro.co" target="_blank" rel="noreferrer" className="transition hover:text-white">
                OMORO ↗
              </a>
              <Link href="/contact" className="transition hover:text-white">
                CONTACT
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium uppercase tracking-[0.12em] text-white/80">OMORO WEB</p>
              <p>Osaka, Japan</p>
            </div>
            <p>© 2026 OMORO CONTRACT LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
