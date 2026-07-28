"use client";

import { useLayoutEffect, useRef } from "react";
import { createTimeline, splitText, stagger } from "animejs";
import type { FunctionValue } from "animejs";
import Image from "next/image";
import Link from "next/link";

interface StatItem {
  readonly value: string;
  readonly label: string;
}

const STATS: readonly StatItem[] = [
  { value: "6+", label: "Years of Creative Expertise" },
  { value: "10+", label: "Industries Partnered With" },
  { value: "99+", label: "Projects Delivered Successfully" },
] as const;

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    if (!heading || !paragraph) return;

    const isDesktop = window.matchMedia("(min-width: 1101px)").matches;
    if (!isDesktop) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    heading.classList.add("hero-heading--priming");
    paragraph.classList.add("hero-heading--priming");

    // Odd lines enter from below (100%), even lines from above (-100%).
    // Falls back to -100% if data-line is missing so motion never stalls.
    const lineOffset: FunctionValue<string> = (el) => {
      const line = Number((el as HTMLElement).dataset.line ?? 0);
      return line % 2 ? "100%" : "-100%";
    };

    // --- Title split (words + chars) ---
    const headingSplitter = splitText(heading, {
      words: { wrap: "clip" },
      chars: true,
    });
    const { words: headingWords, chars: headingChars } = headingSplitter;

    // --- Paragraph split (words only -- smoother than per-char for a sentence) ---
    const paragraphSplitter = splitText(paragraph, {
      words: { wrap: "clip" },
    });
    const { words: paragraphWords } = paragraphSplitter;

    const timeline = createTimeline({
      defaults: { ease: "inOut(3)", duration: 650 },
    })
      // Title: words then chars, entrance only, settle at 0%.
      .add(headingWords, { y: [lineOffset, "0%"] }, stagger(125))
      .add(headingChars, { y: [lineOffset, "0%"] }, stagger(10, { from: "random" }))
      // Paragraph: word-based, starts at timeline 0 (same instant as the title
      // on reload). Gentle per-word stagger for a smooth, non-clunky reveal.
      .add(
        paragraphWords,
        { y: ["100%", "0%"], duration: 700, ease: "out(3)", delay: stagger(35) },
      )
      .init();

    heading.classList.remove("hero-heading--priming");
    paragraph.classList.remove("hero-heading--priming");

    return () => {
      timeline.revert();
      headingSplitter.revert();
      paragraphSplitter.revert();
    };
  }, []);

  return (
    // CONTROLS: Dynamic viewport computation prevents layout overflows caused by the navbar frame height
    <section className="bg-black px-6 pt-12 pb-21.5 min-[1101px]:px-21.5 min-h-[calc(100vh-62px)] min-[810px]:max-[1100px]:min-h-175 min-[810px]:max-[1100px]:h-175 grid grid-cols-1 min-[810px]:grid-cols-2 items-start min-[1101px]:items-end min-[1101px]:pb-20 max-w-404.5 mx-auto">

      {/* LEFT COLUMN — title + paragraph + mobile photo */}
      <div className="w-full lg:max-w-2xl flex flex-col justify-end order-1 min-[810px]:col-start-1 min-[810px]:row-start-1 min-[810px]:self-start min-[1101px]:self-end">

        {/* 1. Title + Paragraph */}
        <div>
          <h1
            ref={headingRef}
            className="hero-heading font-extrabold leading-[0.8] min-[1101px]:leading-[1.1] text-[24px] md:text-[clamp(2.75rem,4.5vw,4rem)] max-[1100px]:text-[32px] max-[419px]:text-[24px]"
          >
            <span className="block text-white" data-line="0">Driss Bourakkadi</span>
            <span className="block text-main-blue" data-line="1">Visual Design Specialist</span>
          </h1>
          <p
            ref={paragraphRef}
            className="hero-paragraph max-w-2xl font-semibold text-[24px] max-[419px]:text-[20px] text-white leading-none mt-12 lg:mt-14 min-[1101px]:leading-[1.1] min-[1101px]:text-[clamp(1.5rem,2.2vw,2rem)]"
          >
            Specializing in bridging the gap between high-quality Product
            Photography and digital excellence.
          </p>
        </div>

        {/* 2. Photo — Mobile view only */}
        <div className="mt-8 min-[810px]:hidden">
          <Image
            src="/images/profile/hero-photo.svg"
            alt="Driss Bourakkadi - Visual Design Specialist Portfolio Portrait"
            width={568}
            height={545}
            priority
            className="mx-auto h-auto w-full max-w-100"
          />
        </div>

      </div>

      {/* RIGHT COLUMN — desktop/tablet photo */}
      <div className="hidden min-[810px]:flex min-[810px]:w-full min-[810px]:justify-end order-2 min-[810px]:col-start-2 min-[810px]:row-start-1 min-[810px]:row-span-2 min-[810px]:self-start min-[1101px]:self-end">
        <Image
          src="/images/profile/hero-photo.svg"
          alt="Driss Bourakkadi - Visual Design Specialist Portfolio Portrait"
          width={568}
          height={545}
          priority
          className="h-auto w-full min-w-80 max-w-80 min-[1101px]:min-w-100 min-[1101px]:max-w-142 block min-[1101px]:translate-y-12 min-[1101px]:-mr-7.5 min-[1101px]:max-[1400px]:mb-25 min-[1101px]:max-[1260px]:mb-35"
        />
      </div>

      {/* BOTTOM CONTAINER — buttons + stats, left-aligned, fixed width */}
      <div className="w-full lg:max-w-2xl mt-8 order-3 min-[810px]:col-start-1 min-[810px]:row-start-2 min-[810px]:self-start min-[1101px]:self-end">

        {/* 3. Buttons */}
        <div className="flex flex-col gap-2 min-[810px]:flex-row">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-btn-blue px-6 py-2 text-lg font-bold text-black transition-transform duration-200 ease-out hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
          >
            About Me
            <Image src="/icons/arrow.svg" alt="" width={11} height={11} />
          </Link>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent px-6 py-2 text-lg font-bold text-btn-blue transition-transform duration-200 ease-out hover:scale-[1.03] [background:linear-gradient(#000,#000)_padding-box,linear-gradient(to_right,#7DD1E4,#4D00FF)_border-box] [text-box:trim-both_cap_alphabetic]"
          >
            Download CV
            <Image src="/icons/download-arrow.svg" alt="" width={14} height={14} />
          </a>
        </div>

        {/* 4. Stats */}
        <div className="mt-3 flex flex-col gap-2 min-[810px]:flex-row">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-3 rounded-2xl border-t border-r border-transparent px-3 py-4 [background:linear-gradient(#000,#000)_padding-box,linear-gradient(to_bottom_right,#7DD1E4,#4D00FF)_border-box]"
            >
              <p className="text-[24px] text-white whitespace-nowrap font-bold leading-none [text-box:trim-both_cap_alphabetic]">{stat.value}</p>
              <p className="text-[16px] text-white whitespace-nowrap [text-box:trim-both_cap_alphabetic]">
                <span className="">|</span> {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}