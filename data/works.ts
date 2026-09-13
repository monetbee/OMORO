export type Work = {
  title: string;
  label: string;
  category: string;
  description: string;
  note: string;
  accent: string;
  isConcept?: boolean;
};

export const works: Work[] = [
  {
    title: "CONCEPT PROJECT",
    label: "BRAND STORY",
    category: "Editorial interface",
    description: "A brand and product story experience built around a stronger narrative and a slower, more intentional scroll.",
    note: "Self-initiated concept project for an editorial brand landing experience.",
    accent: "#d7d1ca",
    isConcept: true,
  },
  {
    title: "CONCEPT PROJECT",
    label: "PRODUCT LAUNCH",
    category: "Marketing site",
    description: "A conversion-first launch page that balances product clarity, visual confidence, and a distinct brand voice.",
    note: "Concept design focused on a premium product reveal and launch motion.",
    accent: "#bcb7b2",
    isConcept: true,
  },
  {
    title: "CONCEPT PROJECT",
    label: "EXPERIMENTAL UI",
    category: "Digital product",
    description: "An exploratory interface concept using motion, rhythm, and interface systems to express a strong point of view.",
    note: "Design exploration for a future-facing product and service experience.",
    accent: "#c8c2bd",
    isConcept: true,
  },
];
