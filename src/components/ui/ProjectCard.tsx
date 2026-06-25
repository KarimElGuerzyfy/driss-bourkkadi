import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm text-neutral-500">
          {project.category} · {project.year}
        </p>
      </div>
    </Link>
  );
}