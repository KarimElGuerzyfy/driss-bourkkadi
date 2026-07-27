"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { deuka } from "@/lib/projects";

function DeukaCarousel({ className }: { className: string }) {
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
    <div
      ref={carouselRef}
      className={`overflow-x-auto select-none scrollbar-hide ${className}`}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="flex w-max min-w-min h-full justify-center mx-auto gap-4 min-[1200px]:gap-6">
        {deuka.images?.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${deuka.title} ${i + 1}`}
            width={523}
            height={394}
            className="shrink-0 h-full w-auto rounded-2xl object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default function DeukaCard() {
  return (
    <div className="px-6 min-[1200px]:px-21.5">

      {/* DESKTOP LAYOUT — hidden below 1200px */}
      <div className="hidden min-[1200px]:block">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg min-[1200px]:h-237.5">
          <div className="flex flex-row items-center h-full px-6 min-[1200px]:px-12">

            {/* Left Column — text + tags + buttons */}
            <div className="flex flex-col min-[1200px]:w-[40%] min-[1200px]:h-141.5 shrink-0 pt-10">

              {/* Text Area */}
              <div className="flex flex-col">
                <h3 className="text-[28px] font-bold leading-none text-main-blue mb-2">
                  <span className="block leading-none">{deuka.title}</span>
                  <span className="block leading-none">{deuka.subtitle}</span>
                </h3>
                <p className="text-2xl font-bold text-white leading-none mb-12">{deuka.description1}</p>
                {deuka.description2 && (
                  <p className="text-xl text-white leading-none mb-3">{deuka.description2}</p>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {deuka.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-white px-3 py-3 text-base font-bold text-white [text-box:trim-both_cap_alphabetic]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-2.5 mt-35">
                <Link
                  href="/work/deuka"
                  className="inline-flex items-center gap-1 rounded-lg bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
                >
                  Read Case Study
                  <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
                </Link>
                {/* TODO: placeholder URL — replace with the real Deuka website link */}
                <Link
                  href="https://deuka.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg bg-black px-4 py-2 font-bold text-white text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
                >
                  View Website
                  <Image src="/icons/r-arrow-light.svg" alt="" width={18} height={18} />
                </Link>
              </div>

            </div>

            {/* Image Area — carousel */}
            <DeukaCarousel className="flex-1 min-[1200px]:h-[714px]" />

          </div>
        </div>
      </div>

      {/* TABLET LAYOUT — 768px to 1199px */}
      <div className="hidden md:max-[1199px]:flex flex-col">
        <div className="w-full overflow-hidden rounded-3xl bg-card-bg px-6">

          {/* Text Area */}
          <div className="flex flex-col pt-6">
            <h3 className="text-3xl font-bold leading-tight text-main-blue">
              <span className="block leading-none">{deuka.title}</span>
              <span className="block leading-none">{deuka.subtitle}</span>
            </h3>
            <p className="text-2xl font-bold text-white leading-none mt-2 mb-6">{deuka.description1}</p>
            {deuka.description2 && (
              <p className="text-xl text-white leading-none">{deuka.description2}</p>
            )}
          </div>

          {/* Image Area — carousel */}
          <DeukaCarousel className="w-full md:h-[422px]" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2.5 pb-6 pt-8">
            {deuka.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-lg border border-white px-3 py-3 text-base font-bold text-white [text-box:trim-both_cap_alphabetic]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 pb-8">
            <Link
              href="/work/deuka"
              className="inline-flex items-center gap-1 rounded-lg bg-btn-blue px-4 py-2 font-bold text-black text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
            {/* TODO: placeholder URL — replace with the real Deuka website link */}
            <Link
              href="https://deuka.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-black px-4 py-2 font-bold text-white text-base transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
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
          <span className="block leading-none mb-2">{deuka.title}</span>
          <span className="block leading-none">{deuka.subtitle}</span>
        </h3>

        {/* Card container */}
        <div className="overflow-hidden rounded-3xl bg-card-bg p-6">

          {/* Image Area — carousel */}
          <DeukaCarousel className="w-full h-[400px]" />

          {/* Buttons — side by side, each half width, filling the row */}
          <div className="flex gap-2 mt-6">
            <Link
              href="/work/deuka"
              className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-btn-blue px-3 py-2 font-bold text-black text-sm transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              Read Case Study
              <Image src="/icons/r-arrow.svg" alt="" width={18} height={18} />
            </Link>
            {/* TODO: placeholder URL — replace with the real Deuka website link */}
            <Link
              href="https://deuka.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-black px-3 py-2 font-bold text-white text-sm transition-transform duration-200 hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              View Website
              <Image src="/icons/r-arrow-light.svg" alt="" width={18} height={18} />
            </Link>
          </div>

        </div>

        {/* Descriptions — outside container, below */}
        <div className="mt-6">
          <p className="text-2xl font-bold text-white leading-none mb-3">{deuka.description1}</p>
        </div>

      </div>

    </div>
  );
}
