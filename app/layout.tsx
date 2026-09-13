import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OMORO WEB",
  legalName: "OMORO合同会社",
  location: "Osaka, Japan",
  description: "Web design and development studio creating premium, usable digital experiences.",
  areaServed: "Japan",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "OMORO WEB — DESIGN. DEVELOP. LAUNCH.",
    template: "%s | OMORO WEB",
  },
  description:
    "OMORO WEB is a creative digital studio creating premium, usable web experiences for brands and businesses in Japan.",
  alternates: {
    canonical: "/",
    languages: {
      ja: "/",
      en: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "OMORO WEB — DESIGN. DEVELOP. LAUNCH.",
    description: "Creative digital studio building premium, usable web experiences.",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMORO WEB",
    description: "DESIGN. DEVELOP. LAUNCH.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f3ee] text-neutral-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
