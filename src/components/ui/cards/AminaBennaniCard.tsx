import Image from "next/image";
import Link from "next/link";
import { aminabennani } from "@/lib/projects";

export default function AminaBennaniCard() {
  return (
    <div className="px-6 min-[1200px]:px-21.5">

      {/* DESKTOP LAYOUT — hidden below 1200px */}
      <div className="hidden min-[1200px]:block">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg min-[1200px]:h-[950px]">
          <div className="flex flex-row items-center h-full">

            {/* Left Column — text + tags + buttons */}
            <div className="flex flex-col justify-center min-[1200px]:w-[36%] min-[1200px]:h-[566px] shrink-0 pt-9">

              {/* Text Area */}
              <div className="flex flex-col ml-6">
                <h3 className="text-3xl font-bold leading-none text-main-blue">
                  <span className="block leading-none">{aminabennani.title}</span>
                  <span className="block leading-none">{aminabennani.subtitle}</span>
                </h3>
                <p className="text-2xl font-bold text-white leading-none mb-3">{aminabennani.description1}</p>
                <p className="text-xl text-white leading-none mb-3">{aminabennani.description2}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6 ml-6">
                {aminabennani.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-white px-3 py-1.5 text-base font-bold text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2.5 ml-6 mt-auto">
                <Link
                  href="/work/aminabennani"
                  className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03]"
                >
                  Read Case Study
                  <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
                </Link>
                <Link
                  href="https://local-business-template-rouge.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl bg-black px-4 py-2 font-bold text-white text-base transition-transform duration-200 hover:scale-[1.03]"
                >
                  View Website
                  <Image src="/icons/r-arrow-light.svg" alt="" width={18} height={18} />
                </Link>
              </div>

            </div>

            {/* Image Area */}
            <div className="relative flex-1 min-[1200px]:h-[800px] mr-12">
              <Image
                src={aminabennani.thumbnail}
                alt={aminabennani.title}
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>

      {/* TABLET LAYOUT — 768px to 1199px */}
      <div className="hidden md:max-[1199px]:flex flex-col">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg">

          {/* Text Area */}
          <div className="flex flex-col px-6 pt-6">
            <h3 className="text-3xl font-bold leading-tight text-main-blue">
              <span className="block leading-none">{aminabennani.title}</span>
              <span className="block leading-none">{aminabennani.subtitle}</span>
            </h3>
            <p className="text-2xl font-bold text-white leading-none mt-4">{aminabennani.description1}</p>
            <p className="text-xl text-white leading-none ">{aminabennani.description2}</p>
          </div>

          {/* Image Area */}
          <div className="relative w-full md:h-[550px]">
            <Image
              src={aminabennani.thumbnail}
              alt={aminabennani.title}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 px-6 pb-6 pr-40">
            {aminabennani.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-xl border border-white px-3 py-1.5 text-base font-bold text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 px-6 pb-8">
            <Link
              href="/work/aminabennani"
              className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
            <Link
              href="https://local-business-template-rouge.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-xl bg-black px-4 py-2 font-bold text-white text-base transition-transform duration-200 hover:scale-[1.03]"
            >
              View Website
              <Image src="/icons/r-arrow-light.svg" alt="" width={18} height={18} />
            </Link>
          </div>

        </div>
      </div>

      {/* PHONE LAYOUT — hidden above 768px */}
      <div className="flex flex-col md:hidden">

        {/* Title — outside container */}
        <h3 className="text-2xl font-bold leading-tight text-main-blue mb-6">
          <span className="block leading-none mb-2">{aminabennani.title}</span>
          <span className="block leading-none">{aminabennani.subtitle}</span>
        </h3>

        {/* Card container */}
        <div className="overflow-hidden rounded-3xl bg-card-bg p-6">

          {/* Image Area */}
          <div className="relative w-full h-[320px]">
            <Image
              src={aminabennani.thumbnail}
              alt={aminabennani.title}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Button */}
          <div className="flex gap-2.5">
            <Link
              href="/work/aminabennani"
              className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-3 py-2 font-bold text-black text-sm transition-transform duration-200 hover:scale-[1.03]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
            <Link
              href="https://local-business-template-rouge.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-xl bg-black px-3 py-2 font-bold text-white text-sm transition-transform duration-200 hover:scale-[1.03]"
            >
              View Website
              <Image src="/icons/r-arrow-light.svg" alt="" width={18} height={18} />
            </Link>
          </div>

        </div>

        {/* Descriptions — outside container, below */}
        <div className="mt-6">
          <p className="text-2xl font-bold text-white leading-none mb-3">{aminabennani.description1}</p>
        </div>

      </div>

    </div>
  );
}