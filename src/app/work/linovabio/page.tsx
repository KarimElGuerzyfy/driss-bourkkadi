"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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
  const [isExpandedS2, setIsExpandedS2] = useState(false);
  const [hasOverflowS2, setHasOverflowS2] = useState(false);
  const textRefS2 = useRef<HTMLParagraphElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = textRefS2.current;
    if (!el) return;

    const checkOverflow = () => {
      if (!isExpandedS2) {
        setHasOverflowS2(el.scrollHeight > el.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [isExpandedS2]);

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
        <div className="relative mt-8 min-[810px]:mt-10 h-28 min-[810px]:h-36 min-[1101px]:h-40">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 z-0 flex w-max items-center"
              style={{ animation: "marquee 45s linear infinite" }}
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
          </div>

          {/* Left block end cap */}
          <div className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-[29px] h-[127px] min-[810px]:w-[37px] min-[810px]:h-[159px] min-[1101px]:w-[45px] min-[1101px]:h-[175px] z-10 pointer-events-none">
            <Image
              src="/images/projects/linova/block.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          {/* Right block end cap */}
          <div className="absolute -right-[10px] top-1/2 -translate-y-1/2 w-[29px] h-[127px] min-[810px]:w-[37px] min-[810px]:h-[159px] min-[1101px]:w-[45px] min-[1101px]:h-[175px] z-10 pointer-events-none scale-x-[-1]">
            <Image
              src="/images/projects/linova/block.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#ABE3EE]/30" />

      {/* Section 2 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 pb-16">
        <div className="relative z-10">
          {/* Title */}
          <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
            Precise Production
          </h2>

          {/* Subtitle */}
          <p className="text-[#C7EDF3] font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[28px]">
            Engineering the Physical Touchpoints: From Print Production to 3D
            Visualization
          </p>

          {/* Desktop-only body copy — between subtitle and image */}
          <p className="hidden min-[1101px]:block mt-4 text-justify leading-tight text-2xl font-bold">
            To bring Linova Bio from a concept to a retail-ready luxury
            brand, I took complete ownership of both the physical packaging
            and the digital product staging. This involved precision print
            label design, advanced 3D modeling for photorealistic product
            mockups, and a studio photography pipeline enhanced by
            generative AI. This holistic approach ensured absolute visual
            consistency from the physical store shelf to the digital
            e-commerce grid.
          </p>
        </div>

        {/* Image overlay */}
        <div className="relative z-0 w-[442px] max-w-full min-[810px]:w-[590px] min-[1101px]:w-[785px] mx-auto mt-6 min-[810px]:mt-8 min-[1101px]:-mt-24">
          <Image
            src="/images/projects/linova/S4-02.svg"
            alt="Linova Bio 3D product visualization"
            width={746}
            height={707}
            className="w-full h-auto object-contain opacity-30"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/projects/linova/linova-logo.svg"
              alt=""
              width={462}
              height={389}
              className="w-[260px] min-[810px]:w-[347px] min-[1101px]:w-[462px] h-auto"
            />
          </div>
        </div>

        {/* Tablet/phone-only body copy — under image, keeps read-more on phone */}
        <div className="relative mt-4 min-[1101px]:hidden">
          <p
            ref={textRefS2}
            className={`text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold transition-all duration-300 ease-in-out ${
              !isExpandedS2 ? "line-clamp-3 min-[810px]:line-clamp-none" : ""
            }`}
          >
            To bring Linova Bio from a concept to a retail-ready luxury
            brand, I took complete ownership of both the physical packaging
            and the digital product staging. This involved precision print
            label design, advanced 3D modeling for photorealistic product
            mockups, and a studio photography pipeline enhanced by
            generative AI. This holistic approach ensured absolute visual
            consistency from the physical store shelf to the digital
            e-commerce grid.
          </p>

          {!isExpandedS2 && hasOverflowS2 && (
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-card-bg to-transparent pointer-events-none min-[810px]:hidden" />
          )}
        </div>

        {hasOverflowS2 && (
          <button
            onClick={() => setIsExpandedS2(!isExpandedS2)}
            className="mt-2 text-main-blue font-bold text-left self-start flex items-center gap-1 cursor-pointer text-[20px] min-[810px]:hidden"
          >
            {isExpandedS2 ? "view less" : "read more"}
          </button>
        )}
      </div>
    </section>
  );
}