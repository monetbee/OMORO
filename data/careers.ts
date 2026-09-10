export type CareerCategory = "ENGINEERING" | "DESIGN" | "BUSINESS" | "CREATIVE";

export type CareerOpening = {
  id: string;
  title: string;
  category: CareerCategory;
  location: string;
  type: string;
  description: string;
  status: "OPEN" | "DRAFT";
};

export const careerOpenings: CareerOpening[] = [];

export const futureOpportunities = [
  "Engineering",
  "Design",
  "Business",
  "Creative",
];
