"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function DeukaPage() {
  return (
    <section className="relative min-h-screen bg-card-bg">

      {/* Section 1 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 pb-16">
        {/* Title */}
        <h1 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          Case Study: Deuka App
        </h1>

        {/* Subtitle */}
        <h2 className="mt-8 text-main-blue font-bold leading-tight text-lg min-[810px]:text-2xl">
          Designing a Distraction-Free German Vocabulary App
        </h2>

        {/* Bullets */}
        <ul className="mt-4 flex flex-col gap-2 list-disc pl-12 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
        <li><span className="font-bold">Role:</span> Lead UI/UX &amp; Brand Designer</li>
        <li><span className="font-bold">Concept:</span> Jointly conceived &amp; created with Karim</li>
        <li><span className="font-bold">Focus:</span> Mobile-First UI/UX, Gamified Learning Flow, Bilingual System (LTR/RTL)</li>
        </ul>

        {/* Divider — contained, respects padding */}
        <div className="mt-12 border-t border-[#ABE3EE]/30" />
      </div>

      {/* Section 2 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          1. The Idea &amp; Concept
        </h2>

        {/* Subtitle */}
        <h3 className="mt-8 text-main-blue font-bold leading-tight text-lg min-[810px]:text-2xl">
          Engineering the Physical Touchpoints: From Print Production to 3D Visualization
        </h3>

        {/* Paragraph */}
        <div className="mt-4 flex flex-col gap-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            Deuka was born from a shared vision between myself and Karim to solve a real problem: traditional language apps are often too distracting, while paper flashcards get messy fast.
          </p>
          <p>
            We brainstormed an app specifically tailored for students learning German, built around the strict Centurion System&mdash;mastering 4,500+ words in 10-word &rdquo;buckets&rdquo; where progress requires a perfect 10/10 score. My challenge as a designer was to turn this intense, zero-tolerance learning method into an encouraging, clean, and frictionless user interface.
          </p>
        </div>
        {/* Images */}
        <div className="mt-8 flex flex-col min-[1101px]:flex-row gap-6">
          {/* desktop sketch — top on tablet/phone, right on pc */}
          <div className="order-first min-[1101px]:order-last flex-1">
            <Image
              src="/images/projects/deuka/desktop%20sketch.svg"
              alt=""
              width={755}
              height={473}
              className="w-full h-auto aspect-[755/473] rounded-3xl object-contain"
            />
          </div>
          {/* desktop — bottom on tablet/phone, left on pc */}
          <div className="flex-1">
            <Image
              src="/images/projects/deuka/desktop.svg"
              alt=""
              width={755}
              height={473}
              className="w-full h-auto aspect-[755/473] rounded-3xl object-contain"
            />
          </div>
        </div>

        {/* Divider — contained, respects padding */}
        <div className="mt-12 border-t border-[#ABE3EE]/30" />
      </div>

      {/* Section 3 */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          2. Core UI/UX Decisions
        </h2>

        {/* Body */}
        <div className="mt-8 flex flex-col gap-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            <span className="font-bold">Distraction-Free Layout:</span> Stripped away unnecessary visual noise (no ads, no floating banners) so the learner&apos;s entire focus stays on word retention.
          </p>
          <p>
            <span className="font-bold">One-Thumb Ergonomics:</span> Designed the mobile interface so all primary actions&mdash;Generate, Translate, Hint, and Next&mdash;are within easy reach of the thumb for comfortable single-handed use.
          </p>
          <p>
            <span className="font-bold">Clear Two-Phase Flow:</span>
          </p>
          <ol className="list-decimal pl-12 flex flex-col gap-2">
            <li><span className="font-bold">Review Mode:</span> A clean flashcard focal container for active recall.</li>
            <li><span className="font-bold">Quiz Gate:</span> Simple multiple-choice screens with clear visual feedback (Success, Fail, and a subtle 5-second timer bar).</li>
          </ol>
          <p>
            <span className="font-bold">Bilingual Flexibility:</span> Engineered the design components to flip effortlessly between English (LTR) and Arabic (RTL) without disrupting spatial balance or typography scale.
          </p>
        </div>

        {/* Images 01 · 06 · 04 · 05 */}
        <Section3Carousel />

        {/* Divider — contained, respects padding */}
        <div className="mt-12 border-t border-[#ABE3EE]/30" />
      </div>

      {/* Section 4 — final, no divider */}
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pb-16">
        {/* Title */}
        <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
          3. Visual System &amp; Final Execution
        </h2>

        {/* Body */}
        <div className="mt-8 mb-8 flex flex-col gap-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
          <p>
            <span className="font-bold">Color Palette:</span> A soothing deep navy and emerald base that reduces eye strain during long study sessions, paired with high-contrast text and warm feedback accents.
          </p>
          <p>
            <span className="font-bold">Cross-Device Adaptability:</span> Designed responsive wireframes to ensure the core learning interface stays intuitive whether opened on a phone, tablet, or desktop.
          </p>
        </div>

        {/* Images — stacked on all breakpoints, 24px gap */}
        <div className="flex flex-col gap-8">
            <Image
            src="/images/projects/deuka/section4%2001.svg"
            alt=""
            width={755}
            height={473}
            className="w-full h-auto rounded-3xl"
            />
            <Image
            src="/images/projects/deuka/section4%2002.svg"
            alt=""
            width={755}
            height={473}
            className="w-full h-auto rounded-3xl"
            />
        </div>
      </div>

    </section>
  );
}

function Section3Carousel() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  const imgClass =
    "shrink-0 object-contain w-[166px] h-[361px] min-[810px]:w-[221px] min-[810px]:h-[481px] min-[1101px]:w-[295px] min-[1101px]:h-[641px]";

  return (
    <div
      ref={ref}
      className="mt-8 overflow-x-auto select-none scrollbar-hide"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
    >
      <div className="flex w-max min-w-min justify-center mx-auto gap-4 min-[810px]:gap-8">
        <Image src="/images/projects/deuka/01.svg" alt="" width={295} height={650} className={`${imgClass} rounded-3xl `} />
        <Image src="/images/projects/deuka/02.svg" alt="" width={295} height={641} className={`${imgClass} rounded-3xl`} />
        <Image src="/images/projects/deuka/03.svg" alt="" width={295} height={650} className={`${imgClass} rounded-3xl`} />
        <Image src="/images/projects/deuka/04.svg" alt="" width={295} height={641} className={`${imgClass} rounded-3xl`} />
      </div>
    </div>
  );
}