import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}