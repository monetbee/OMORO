import Link from "next/link";

const footerLinks = [
  { href: "/businesses", label: "BUSINESSES" },
  { href: "/about", label: "ABOUT" },
  { href: "/news", label: "NEWS" },
  { href: "/careers", label: "CAREERS" },
  { href: "/contact", label: "CONTACT" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-300 bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="max-w-4xl">
            <p className="text-4xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-8xl">
              MAKE THE WORLD
            </p>
            <p className="text-4xl font-black uppercase tracking-[-0.08em] sm:text-6xl lg:text-8xl">
              MORE OMORO.
            </p>
          </div>

          <div className="flex flex-col gap-8 border-t border-neutral-700 pt-8 md:flex-row md:items-end md:justify-between">
            <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-300">
              {footerLinks.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-6 text-sm text-neutral-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-neutral-700 pt-8 text-sm text-neutral-400 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-medium uppercase tracking-[0.12em] text-neutral-200">OMORO LLC</p>
              <p>Osaka, Japan</p>
            </div>
            <p>© 2026 OMORO LLC.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
