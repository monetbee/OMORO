export type BusinessStatus = "ACTIVE" | "COMING SOON";

export type Business = {
  slug: string;
  title: string;
  category: string;
  description: string;
  shortCopy: string;
  status: BusinessStatus;
  website: string;
  externalUrl: string;
};

export const businesses: Business[] = [
  {
    slug: "omoro-web",
    title: "OMORO WEB",
    category: "DIGITAL SERVICES",
    description: "Web Design / Development / Digital Solutions",
    shortCopy: "Design. Develop. Launch.",
    status: "ACTIVE",
    website: "/businesses#omoro-web",
    externalUrl: "https://omoro-web.example.com",
  },
  {
    slug: "gira",
    title: "GIRA®",
    category: "CONSUMER / E-COMMERCE",
    description: "Independent eyewear brand.",
    shortCopy: "GO INSANE. REJECT AVERAGE.",
    status: "ACTIVE",
    website: "https://gira.example.com",
    externalUrl: "https://gira.example.com",
  },
  {
    slug: "omoro-apps",
    title: "OMORO APPS",
    category: "TECHNOLOGY / DIGITAL PRODUCTS",
    description: "Mobile applications, games and experimental digital products.",
    shortCopy: "Small apps. Big ideas.",
    status: "ACTIVE",
    website: "https://omoro-apps.example.com",
    externalUrl: "https://omoro-apps.example.com",
  },
  {
    slug: "omoro-media",
    title: "OMORO MEDIA",
    category: "MEDIA / ADVERTISING",
    description: "Advertising opportunities across digital products operated by OMORO.",
    shortCopy: "Audience. Attention. Momentum.",
    status: "COMING SOON",
    website: "/businesses#omoro-media",
    externalUrl: "https://omoro-media.example.com",
  },
];
