"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { saoga } from "@/lib/projects";

const saogaSection3Images = [
  "/images/projects/saoga/S3-01.svg",
  "/images/projects/saoga/S3-02.svg",
  "/images/projects/saoga/S3-03.svg",
  "/images/projects/saoga/S3-04.svg",
  "/images/projects/saoga/S3-05.svg",
];

export default function SaogaPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-card-bg min-[810px]:bg-[url('/images/projects/noise%20background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-10 min-[810px]:pt-16 min-[1101px]:pt-16 pb-16">
        {/* Logo wordmark */}
        <Image
          src="/images/projects/saoga/saogapen.svg"
          alt="SAOGA"
          width={280}
          height={64}
          className="w-40 min-[810px]:w-48 min-[1101px]:w-56 h-auto mx-auto"
        />

        {/* Subtitle / title */}
        <h1 className="text-center text-main-blue font-bold leading-tight mt-6 text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          Blending Raw Photography With Design And Generative AI For
          High-Impact Ad Campaigns
        </h1>

        {/* Section 1 image — responsive variants */}
        <div className="mt-4 rounded-3xl overflow-hidden">
          <Image
            src="/images/projects/saoga/saoga-s1-md.svg"
            alt="SAOGA campaign visual"
            width={686}
            height={205}
            className="w-full h-auto min-[810px]:hidden"
          />
          <Image
            src="/images/projects/saoga/saoga-s1-md.svg"
            alt="SAOGA campaign visual"
            width={890}
            height={266}
            className="w-full h-auto hidden min-[810px]:block min-[1101px]:hidden"
          />
          <Image
            src="/images/projects/saoga/saoga-s1-pc.svg"
            alt="SAOGA campaign visual"
            width={1354}
            height={405}
            className="w-full h-auto hidden min-[1101px]:block"
          />
        </div>

        {/* Body copy */}
        <div className="mt-2 space-y-4 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
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

        {/* Tags */}
        <div className="mt-8 min-[810px]:mt-10 flex flex-wrap gap-4 min-[810px]:hidden">
          {saoga.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white rounded-xl px-2 py-2 text-white font-bold text-[14px] min-[810px]:text-base whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        
      </div>
      {/* Divider */}
      <div className="border-t border-[#ABE3EE]/30" />
      {/* Section 2 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 min-[810px]:pt-16 min-[1101px]:pt-16 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          Designed From Scratch
        </h2>
                {/* Body copy */}
        <div className="mt-2 space-y-4 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            Complete structural ownership. Every layout, geometric grid, and
            brand asset was engineered from the ground up, ensuring a unique
            digital footprint tailored specifically to the sportswear market.
          </p>
        </div>

        {/* Section 2 image — responsive variants */}
        <div className="mt-4 rounded-3xl overflow-hidden">
          <Image
            src="/images/projects/saoga/saoga-s2-md.svg"
            alt="SAOGA brand system visual"
            width={890}
            height={266}
            className="w-full h-auto min-[1101px]:hidden"
          />
          <Image
            src="/images/projects/saoga/saoga-s2-pc.svg"
            alt="SAOGA brand system visual"
            width={1354}
            height={405}
            className="w-full h-auto hidden min-[1101px]:block"
          />
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-[#ABE3EE]/30" />
      {/* Section 3 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 min-[810px]:pt-16 min-[1101px]:pt-16 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          Precision Photography
        </h2>
        {/* Body copy */}
        <div className="mt-2 space-y-4 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            Grounding the product in reality. Handled the primary product and
            apparel photography, capturing raw textures, sharp lighting, and
            real-world athletic movement to establish authentic brand assets.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="mt-4 w-full overflow-x-auto select-none scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex w-max gap-4 min-[810px]:gap-6">
            {saogaSection3Images.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`SAOGA product photography ${index + 1}`}
                width={277}
                height={417}
                className="shrink-0 w-40 h-auto min-[810px]:w-55 min-[1101px]:w-69.25 rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ABE3EE]/30" />
      {/* Section 4 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 min-[810px]:pt-16 min-[1101px]:pt-16 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          AI-Powered Scale
        </h2>
        {/* Body copy */}
        <div className="mt-2 space-y-4 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            Infinite variations, instant output. Used generative AI tools to
            expand the core photography into multi-shot action scenes—generating
            diverse environments, lighting angles, and dynamic motion plates for
            social media ads.
          </p>
        </div>

        {/* Section 4 image */}
        <div className="mt-4 overflow-hidden">
          <Image
            src="/images/projects/saoga/S4-01.svg"
            alt="SAOGA AI-generated ad visuals"
            width={738}
            height={361}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Divider */}

{/* Section 5 */}
<div className="relative max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 min-[810px]:pt-16 min-[1101px]:pt-16 pb-16">
  {/* Centered visual */}
  <div className="relative z-10 flex justify-center">
    <Image
      src="/images/projects/saoga/S5-01.svg"
      alt="SAOGA lifestyle visual"
      width={503}
      height={288}
      className="w-64 min-[810px]:w-100 min-[1101px]:w-180 h-auto"
    />
  </div>
</div>
    </section>
  );
}