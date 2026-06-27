import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "saoga",
    title: "Bold & Action-Oriented -",
    subtitle: "focuses on speed and endurance",
    description1: "Building a high-impact identity for SAOGA and designing an elite digital ecosystem built for speed and endurance.",
    description2: "Redesigning a performance sportswear brand – and engineering a digital experience that matches the raw power of the athletes.",
    tags: ["Mar – May 2024 · 2 Months", "Lead UI/UX & Brand Designer", "D2C Sportswear & E-Commerce", "Figma · Adobe Suit · Design System"],
    thumbnail: "/images/projects/saoga.svg",
    // FIXED: Added missing strictly required type properties
    category: "D2C Sportswear & E-Commerce", 
    year: "2024",
    description: "Building a high-impact identity for SAOGA and designing an elite digital ecosystem built for speed and endurance.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}