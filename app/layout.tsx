import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OMORO LLC",
  legalName: "OMORO合同会社",
  location: "Osaka, Japan",
  description: "OMORO is an independent company building and operating digital products, brands and businesses.",
  areaServed: "Japan",
  sameAs: [],
};

export const metadata: Metadata = {
  title: {
    default: "OMORO LLC | WE BUILD THINGS.",
    template: "%s | OMORO LLC",
  },
  description:
    "OMORO is an independent company building and operating digital products, brands and businesses in Osaka, Japan.",
  openGraph: {
    title: "OMORO LLC",
    description: "Independent company building and operating digital products, brands and businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OMORO LLC",
    description: "WE BUILD THINGS.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f5f4f0] text-neutral-950">
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
