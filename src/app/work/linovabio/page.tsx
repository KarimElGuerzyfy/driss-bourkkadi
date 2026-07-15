"use client";

import Image from "next/image";

const palette = [
  "/images/projects/linova/100.svg",
  "/images/projects/linova/200.svg",
  "/images/projects/linova/300.svg",
  "/images/projects/linova/400.svg",
  "/images/projects/linova/100-1.svg",
  "/images/projects/linova/200-1.svg",
  "/images/projects/linova/300-1.svg",
  "/images/projects/linova/400-1.svg",
];

const paletteMarquee = [...palette, ...palette, ...palette, ...palette];

export default function LinovaBioPage() {
  return (
    <section className="relative min-h-screen bg-card-bg min-[810px]:bg-[url('/images/projects/noise%20background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-10 min-[810px]:pt-16 pb-16">
        {/* Logo wordmark */}
        <Image
          src="/images/projects/linova/linova-pen.svg"
          alt="Linova Bio"
          width={166}
          height={116}
          className="w-40 min-[810px]:w-48 min-[1101px]:w-56 h-auto mx-auto"
        />

        {/* Body copy */}
        <div className="mt-6 space-y-4 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            Discover the pure essence of Linova. We engineered a complete
            brand ecosystem from the ground up, seamlessly blending organic
            wellness with premium cosmetic aesthetics to deliver a cohesive,
            vibrant, and unforgettable visual experience.
          </p>
          {/* TODO: replace placeholder copy */}
          <p>
            To scale SAOGA&apos;s digital presence across social media
            channels, I developed a modern asset pipeline. I designed the
            entire brand system from scratch, handled the primary product
            photography, and then integrated advanced generative AI tools to
            rapidly prototype and generate hyper-realistic, multi-shot
            variations for targeted visual ads.
            This workflow allowed the brand to maintain high-end creative
            direction while instantly generating diverse marketing layouts.
          </p>
        </div>

        {/* Color palette marquee */}
        <div className="relative overflow-hidden mt-8 min-[810px]:mt-10">
          <div
            className="relative z-0 flex w-max"
            style={{ animation: "marquee 25s linear infinite" }}
          >
            {paletteMarquee.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt=""
                width={189}
                height={206}
                className="shrink-0 w-20 min-[810px]:w-28 min-[1101px]:w-32 h-auto"
              />
            ))}
          </div>

          {/* Left block end cap */}
          <div
            className="absolute left-0 top-0 h-full z-10 pointer-events-none"
            style={{ aspectRatio: "66 / 289" }}
          >
            <Image
              src="/images/projects/linova/block.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Right block end cap */}
          <div
            className="absolute right-0 top-0 h-full z-10 pointer-events-none scale-x-[-1]"
            style={{ aspectRatio: "66 / 289" }}
          >
            <Image
              src="/images/projects/linova/block.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ABE3EE]/30" />
    </section>
  );
}
