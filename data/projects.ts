export type Project = {
  title: string;
  category: string;
  tags: string[];
  summary: string;
  business: string;
  year: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "GIRA",
    category: "Eyewear / Brand / E-commerce",
    tags: ["Brand", "E-commerce", "Editorial"],
    summary: "Consumer eyewear brand identity and storefront designed to express a bold point of view.",
    business: "GIRA",
    year: "2026",
    href: "https://gira.example.com",
  },
  {
    title: "OMORO WEB",
    category: "Digital Services / Web",
    tags: ["Web design", "Development", "Launch"],
    summary: "Launch-ready digital experiences for brands that need clarity, craft and momentum.",
    business: "OMORO WEB",
    year: "2026",
    href: "https://omoro-web.example.com",
  },
  {
    title: "OMORO Apps",
    category: "Technology / Product",
    tags: ["Apps", "Prototype", "UX"],
    summary: "Small-format experiments turned into digital products with strong product thinking.",
    business: "OMORO APPS",
    year: "2026",
    href: "https://omoro-apps.example.com",
  },
];
