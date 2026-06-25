import { notFound } from "next/navigation";
import Image from "next/image";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Driss Bourkkadi`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-5xl px-6 py-24">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-2 text-4xl font-bold md:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-8 text-sm">
          {project.client && (
            <div>
              <span className="block text-neutral-400">Client</span>
              <span>{project.client}</span>
            </div>
          )}
          {project.role && (
            <div>
              <span className="block text-neutral-400">Role</span>
              <span>{project.role}</span>
            </div>
          )}
          {project.liveUrl && (
            <div>
              <span className="block text-neutral-400">Live</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Visit site
              </a>
            </div>
          )}
        </div>
      </header>

      {project.content && (
        <div className="max-w-2xl text-neutral-700">
          <p>{project.content}</p>
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="mt-16 space-y-8">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-neutral-100"
            >
              <Image
                src={src}
                alt={`${project.title} image ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}