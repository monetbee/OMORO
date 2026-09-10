export type NewsCategory = "CORPORATE" | "BUSINESS" | "PRODUCT" | "PRESS";

export type NewsItem = {
  id: string;
  date: string;
  category: NewsCategory;
  title: string;
  body: string;
  externalLink?: string;
  published: boolean;
};

export const news: NewsItem[] = [
  {
    id: "omoro-llc-established",
    date: "2026-01-01",
    category: "CORPORATE",
    title: "OMORO LLC established",
    body: "OMORO began as an independent company focused on building and operating digital products, brands and businesses.",
    published: false,
  },
  {
    id: "corporate-website-launched",
    date: "2026-02-01",
    category: "CORPORATE",
    title: "Corporate website launched",
    body: "A company site designed to communicate the portfolio of ideas, brands and services we build and operate.",
    published: false,
  },
  {
    id: "gira-new-collection",
    date: "2026-03-15",
    category: "BUSINESS",
    title: "GIRA new collection",
    body: "A new eyewear release exploring experimentation, identity and bold visual direction.",
    published: false,
  },
  {
    id: "new-omoro-app-released",
    date: "2026-04-10",
    category: "PRODUCT",
    title: "New OMORO App released",
    body: "A new digital product prototype launched as part of the OMORO portfolio of experiments and platforms.",
    published: false,
  },
];
