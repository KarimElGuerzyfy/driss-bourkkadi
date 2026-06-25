import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "example-project",
    title: "Example Project",
    category: "Branding",
    year: "2025",
    thumbnail: "/images/projects/example-thumb.jpg",
    description: "A short one-line summary of the project.",
    client: "Client Name",
    role: "Art Direction, Identity",
    content: "Longer case-study text goes here.",
    images: [
      "/images/projects/example-1.jpg",
      "/images/projects/example-2.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}