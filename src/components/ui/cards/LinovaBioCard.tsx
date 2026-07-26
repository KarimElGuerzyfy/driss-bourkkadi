import Image from "next/image";
import Link from "next/link";
import { linovabio } from "@/lib/projects";

export default function LinovaBioCard() {
  return (
    <div className="px-6 min-[1200px]:px-21.5">

      {/* DESKTOP LAYOUT — hidden below 1200px */}
      <div className="hidden min-[1200px]:block">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg min-[1200px]:h-217.5">
          <div className="flex flex-row items-center h-full">

            {/* Image Area — Left Column on Desktop */}
            <div className="relative min-[1200px]:w-231 min-[1200px]:max-w-231 min-[1200px]:h-154 ml-12">
              <Image
                src={linovabio.thumbnail}
                alt={linovabio.title}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Right Column — text + tags + button */}
            <div className="flex flex-col justify-center min-[1200px]:w-[36%] min-[1200px]:h-141.5 shrink-0 pt-9">

              {/* Text Area */}
              <div className="flex flex-col ml-6">
                <h3 className="text-3xl font-bold leading-tight text-main-blue mb-12">
                  <span className="block leading-none mb-2">{linovabio.title}</span>
                  <span className="block leading-none mb-2">{linovabio.subtitle}</span>
                  {linovabio.subtitle2 && <span className="block leading-none">{linovabio.subtitle2}</span>}
                </h3>
                <p className="text-2xl font-bold text-white leading-none mb-3">{linovabio.description1}</p>
                <p className="text-xl text-white leading-none mb-3">{linovabio.description2}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-6 ml-6">
                {linovabio.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-xl border border-white px-3 py-1.5 text-base font-bold text-white [text-box:trim-both_cap_alphabetic]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="ml-6 mt-auto">
                <Link
                  href="/work/linovabio"
                  className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
                >
                  Read Case Study
                  <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* TABLET LAYOUT — 768px to 1199px */}
      <div className="hidden md:max-[1199px]:flex flex-col">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg">

          {/* Text Area */}
          <div className="flex flex-col p-6 md:px-6 md:py-9">
            <h3 className="text-3xl font-bold leading-tight text-main-blue mb-12">
              <span className="block leading-none mb-2">{linovabio.title}</span>
              <span className="block leading-none mb-2">{linovabio.subtitle}</span>
              {linovabio.subtitle2 && <span className="block leading-none">{linovabio.subtitle2}</span>}
            </h3>
            <p className="text-2xl font-bold text-white leading-none mb-3">{linovabio.description1}</p>
            <p className="text-xl text-white Landau-none mb-3">{linovabio.description2}</p>
          </div>

          {/* Image Area */}
          <div className="relative w-full md:h-105.75">
            <Image
              src={linovabio.thumbnail}
              alt={linovabio.title}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 px-6 py-6">
            {linovabio.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-xl border border-white px-3 py-1.5 text-base font-bold text-white [text-box:trim-both_cap_alphabetic]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="px-6 pb-8">
            <Link
              href="/work/linovabio"
              className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
          </div>

        </div>
      </div>

      {/* PHONE LAYOUT — hidden above 768px */}
      <div className="flex flex-col md:hidden">

        {/* Title — outside container */}
        <h3 className="text-2xl font-bold leading-tight text-main-blue mb-6">
          <span className="block leading-none mb-2">{linovabio.title}</span>
          <span className="block leading-none mb-2">{linovabio.subtitle}</span>
          {linovabio.subtitle2 && <span className="block leading-none">{linovabio.subtitle2}</span>}
        </h3>

        {/* Card container */}
        <div className="overflow-hidden rounded-3xl bg-card-bg p-6">

          {/* Image Area */}
          <div className="relative w-full h-80">
            <Image
              src={linovabio.thumbnail}
              alt={linovabio.title}
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Button */}
          <div className="">
            <Link
              href="/work/linovabio"
              className="inline-flex items-center gap-1 rounded-xl bg-btn-blue px-3 py-2 font-bold text-black text-sm transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
          </div>

        </div>

        {/* Descriptions — outside container, below */}
        <div className="mt-6">
          <p className="text-2xl font-bold text-white leading-none mb-3">{linovabio.description1}</p>
        </div>

      </div>

    </div>
  );
}