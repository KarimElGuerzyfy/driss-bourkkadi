import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <section id="work" className="py-16 px-6 min-[810px]:px-12 min-[1101px]:px-[86px]">
      <h2 className="text-main-blue text-4xl font-bold mb-8">Work</h2>
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}