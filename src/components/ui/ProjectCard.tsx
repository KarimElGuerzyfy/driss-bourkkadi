import Image from "next/image";
import Link from "next/link";

interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  tags: string[];
  thumbnail: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex items-center px-6 min-[810px]:px-12 min-[1101px]:px-[86px]">
      <div className="my-1.5 w-full overflow-hidden rounded-3xl bg-card-bg min-[1101px]:h-[870px]">
        <div className={`flex flex-col min-[1101px]:flex-row ${isEven ? "" : "min-[1101px]:flex-row-reverse"} items-stretch`}>

          {/* Text Area */}
          <div className="flex flex-col justify-center gap-6 p-8 min-[810px]:p-12 min-[1101px]:w-[45%] shrink-0">
            <h3 className="text-3xl font-bold leading-tight text-main-blue">
              <span className="block">{project.title}</span>
              <span className="block">{project.subtitle}</span>
            </h3>
            <p className="text-lg font-bold text-white">{project.description1}</p>
            <p className="text-base text-white/70">{project.description2}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/40 px-3 py-1.5 text-xs font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <div className="pt-2">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-btn-blue px-6 py-3 font-bold text-black transition-transform duration-200 hover:scale-[1.03]"
              >
                Read Case Study
                <Image src="/icons/r-arrow.svg" alt="" width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative w-full min-[1101px]:w-[55%]" style={{ aspectRatio: "900/550" }}>
            <Image
              src={project.thumbnail}
              alt={`${project.title} - Case Study Preview`}
              fill
              sizes="(max-width: 1101px) 100vw, 55vw"
              priority={index === 0}
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}