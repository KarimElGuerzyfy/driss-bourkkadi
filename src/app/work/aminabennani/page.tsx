"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const pillLabels = [
  "UI/UX Design System",
  "The Problem",
  "Responsive Design Execution",
  "The Design Solution",
];

const s4Images = [
  "/images/projects/website/s4-01.svg",
  "/images/projects/website/s4-02.svg",
  "/images/projects/website/s4-03.svg",
];

export default function AminaBennaniPage() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll(); // set initial state on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (el) => el === entry.target
            );
            if (index !== -1) setActiveSectionIndex(index);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-96px 0px -40% 0px" }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const [isExpandedS2Problem, setIsExpandedS2Problem] = useState(false);
  const [hasOverflowS2Problem, setHasOverflowS2Problem] = useState(false);
  const textRefS2Problem = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = textRefS2Problem.current;
    if (!el) return;

    const checkOverflow = () => {
      if (!isExpandedS2Problem) {
        setHasOverflowS2Problem(el.scrollHeight > el.clientHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [isExpandedS2Problem]);

  const carouselRefS4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRefS4.current;
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

  const renderPill = (label: string, index: number, extraClassName = "") => (
    <button
      key={label}
      onClick={() => scrollToSection(index)}
      className={`w-full flex items-center text-left font-bold text-[27px] leading-tight rounded-2xl px-3 py-2 transition-colors [text-box:trim-both_cap_alphabetic] ${
        activeSectionIndex === index
          ? "bg-black text-main-blue"
          : "bg-[#282828] text-[#F1FAFC]/30"
      } ${extraClassName}`}
    >
      {label}
    </button>
  );

  return (
    <section className="relative min-h-screen bg-[url('/images/projects/noise%20background.svg')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-404.5 mx-auto px-6 min-[810px]:px-12 min-[1101px]:px-32 pt-16 min-[810px]:pt-16 min-[1101px]:pt-10 pb-16">
        {/* Tablet-only vertical pill stack, full width — collapses to active pill only on scroll */}
        <nav className="hidden min-[810px]:flex min-[1101px]:hidden flex-col gap-3 sticky top-32 z-30 mb-6">
          {isScrolled
            ? renderPill(pillLabels[activeSectionIndex], activeSectionIndex)
            : pillLabels.map((label, index) => renderPill(label, index))}
        </nav>

        {/* Desktop layout: sidebar + content */}
        <div className="min-[1101px]:flex min-[1101px]:gap-6 min-[1101px]:items-start">
          {/* Desktop-only vertical sidebar */}
          <nav className="hidden min-[1101px]:flex min-[1101px]:flex-col min-[1101px]:gap-3 min-[1101px]:w-1/4 min-[1101px]:max-w-[380px] min-[1101px]:shrink-0 min-[1101px]:sticky min-[1101px]:top-26">
            {pillLabels.map((label, index) => renderPill(label, index))}
          </nav>

          {/* Content column */}
          <div className="min-[1101px]:w-3/4">
            {/* Section 1 — UI/UX Design System */}
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <h1 className="text-main-blue font-bold leading-tight text-[32px] min-[810px]:text-[36px] min-[1101px]:text-[40px]">
                Dr. Amina Bennani – Specialist Dentist
              </h1>

              <h2 className="mt-4 text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px] min-[810px]:hidden min-[1101px]:block">
                UI/UX Design System
              </h2>

              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                The Dr. Amina Bennani digital platform is a premium,
                user-centric website designed to bridge the gap between
                compassionate dental care and modern patient convenience. The
                goal was to build a clean, authoritative, and highly
                responsive landing page that communicates professional
                excellence, showcases specialized services, and optimizes
                the patient appointment booking funnel.
              </p>

              <div className="mt-4 rounded-2xl overflow-hidden">
                <Image
                  src="/images/projects/website/s1-01.svg"
                  alt="Dr. Amina Bennani website design preview"
                  width={738}
                  height={487}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 2 — The Problem */}
            <div
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              {/* Title — hidden on tablet, visible on phone and desktop */}
              <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px] min-[810px]:hidden min-[1101px]:block">
                The Problem
              </h2>

              {/* Phone: image comes right after title, before text */}
              <div className="mt-4 rounded-2xl overflow-hidden min-[810px]:hidden">
                <Image
                  src="/images/projects/website/s2-01.svg"
                  alt="Nos Services section design preview"
                  width={1005}
                  height={612}
                  className="w-full h-auto"
                />
              </div>

              {/* Phone: combined clamped text block */}
              <div className="relative mt-4 min-[810px]:hidden">
                <div
                  ref={textRefS2Problem}
                  className={`text-justify leading-tight text-lg transition-all duration-300 ease-in-out ${
                    !isExpandedS2Problem ? "line-clamp-3" : ""
                  }`}
                >
                  <p>
                    Modern dental patients seek trust, clarity, and instant
                    accessibility. Traditional medical websites often suffer
                    from confusing navigation, cold aesthetic choices, and
                    friction-heavy contact methods.
                  </p>
                  <p className="font-bold mt-2">Identified Pain Points</p>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>
                      High Friction in Booking: Patients find it tedious to
                      jump through multiple pages just to make an inquiry or
                      find contact information.
                    </li>
                    <li>
                      Lack of Immediate Trust: Patients hesitate to choose a
                      specialist without visible social proof, clear
                      credentials, or transparent location details.
                    </li>
                    <li>
                      Poor Mobile Disconnect: Healthcare sites frequently
                      fail to translate complex grid elements (like
                      multi-service cards or map embeds) into intuitive
                      single-column smartphone layouts.
                    </li>
                  </ul>
                </div>

                {!isExpandedS2Problem && hasOverflowS2Problem && (
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-card-bg to-transparent pointer-events-none" />
                )}
              </div>

              {hasOverflowS2Problem && (
                <button
                  onClick={() =>
                    setIsExpandedS2Problem(!isExpandedS2Problem)
                  }
                  className="mt-2 text-main-blue font-bold text-left flex items-center gap-1 cursor-pointer text-[20px] min-[810px]:hidden [text-box:trim-both_cap_alphabetic]"
                >
                  {isExpandedS2Problem ? "view less" : "read more"}
                </button>
              )}

              {/* Tablet/Desktop: paragraph, image, pain points — full order, no clamping */}
              <p className="hidden min-[810px]:block mt-2 text-justify leading-tight text-2xl font-bold">
                Modern dental patients seek trust, clarity, and instant
                accessibility. Traditional medical websites often suffer
                from confusing navigation, cold aesthetic choices, and
                friction-heavy contact methods.
              </p>

              <div className="hidden min-[810px]:block mt-4 rounded-2xl overflow-hidden">
                <Image
                  src="/images/projects/website/s2-01.svg"
                  alt="Nos Services section design preview"
                  width={1005}
                  height={612}
                  className="w-full h-auto"
                />
              </div>

              <div className="hidden min-[810px]:block mt-4 text-justify leading-tight text-2xl font-bold">
                <p className="font-bold">Identified Pain Points</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>
                    High Friction in Booking: Patients find it tedious to
                    jump through multiple pages just to make an inquiry or
                    find contact information.
                  </li>
                  <li>
                    Lack of Immediate Trust: Patients hesitate to choose a
                    specialist without visible social proof, clear
                    credentials, or transparent location details.
                  </li>
                  <li>
                    Poor Mobile Disconnect: Healthcare sites frequently fail
                    to translate complex grid elements (like multi-service
                    cards or map embeds) into intuitive single-column
                    smartphone layouts.
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 3 — Responsive Design Execution */}
            <div
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              {/* Desktop: title + S3-01 + paragraph (left) / S3-02 (right) */}
              <div className="hidden min-[1101px]:grid min-[1101px]:grid-cols-[1fr_auto] min-[1101px]:justify-between min-[1101px]:gap-6 min-[1101px]:items-start">
                <div className="flex flex-col">
                  <h2 className="text-main-blue font-bold leading-tight text-[32px]">
                    Responsive Design Execution
                  </h2>

                  <div className="overflow-hidden mt-4">
                    <Image
                      src="/images/projects/website/s3-01.svg"
                      alt="Responsive navigation bar states preview"
                      width={615}
                      height={96}
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="mt-4 text-justify leading-tight text-2xl font-bold">
                    A minimalist, high-contrast digital platform built on a
                    deep navy and medical blue palette, punctuated with a
                    high-conversion golden-yellow accent color. The design
                    minimizes cognitive load by using a single-page
                    storytelling layout that effortlessly guides users from
                    initial value proposition to immediate action.
                  </p>
                </div>

                <div className="overflow-hidden flex justify-start">
                  <Image
                    src="/images/projects/website/s3-02.svg"
                    alt="Expanded navigation menu design preview"
                    width={341}
                    height={393}
                    className="w-auto h-auto max-h-[380px] object-contain"
                  />
                </div>
              </div>

              {/* Tablet: S3-02 (left) / S3-01 + paragraph (right, no title) */}
              <div className="hidden min-[810px]:grid min-[1101px]:hidden grid-cols-[auto_1fr] justify-between gap-6 items-start">
                <div className="overflow-hidden flex justify-start">
                  <Image
                    src="/images/projects/website/s3-02.svg"
                    alt="Expanded navigation menu design preview"
                    width={341}
                    height={393}
                    className="w-auto h-auto max-h-[288px] object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/projects/website/s3-01.svg"
                      alt="Responsive navigation bar states preview"
                      width={615}
                      height={96}
                      className="w-full h-auto"
                    />
                  </div>

                  <p className="mt-4 text-justify leading-tight text-2xl font-bold">
                    A minimalist, high-contrast digital platform built on a
                    deep navy and medical blue palette, punctuated with a
                    high-conversion golden-yellow accent color. The design
                    minimizes cognitive load by using a single-page
                    storytelling layout that effortlessly guides users from
                    initial value proposition to immediate action.
                  </p>
                </div>
              </div>

              {/* Phone: title → S3-01 → S3-02 → paragraph, fully visible */}
              <div className="min-[810px]:hidden flex flex-col">
                <h2 className="text-main-blue font-bold leading-tight text-[24px]">
                  Responsive Design Execution
                </h2>

                <div className="mt-4 overflow-hidden">
                  <Image
                    src="/images/projects/website/s3-01.svg"
                    alt="Responsive navigation bar states preview"
                    width={615}
                    height={96}
                    className="w-full h-auto"
                  />
                </div>

                <div className="mt-4 overflow-hidden">
                  <Image
                    src="/images/projects/website/s3-02.svg"
                    alt="Expanded navigation menu design preview"
                    width={341}
                    height={393}
                    className="w-full h-auto"
                  />
                </div>

                <p className="mt-4 text-justify leading-tight text-lg">
                  A minimalist, high-contrast digital platform built on a
                  deep navy and medical blue palette, punctuated with a
                  high-conversion golden-yellow accent color. The design
                  minimizes cognitive load by using a single-page
                  storytelling layout that effortlessly guides users from
                  initial value proposition to immediate action.
                </p>
              </div>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 4 — The Design Solution */}
            <div
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <div className="flex flex-col">
                <h2 className="order-1 min-[810px]:hidden min-[1101px]:block text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[32px]">
                  The Design Solution
                </h2>

                <p className="order-3 min-[1101px]:order-2 mt-4 min-[1101px]:mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                  Design Note on Mobile Optimization: On mobile devices, user
                  attention spans decrease. To counter this, the primary
                  action buttons (&ldquo;Prendre RDV&rdquo;) were moved to
                  stand out prominently against the hero image, and the
                  complex insurance partnership banner (&ldquo;CNOPS, CNSS,
                  CIMR…&rdquo;) was simplified into a fluid, edge-to-edge
                  secondary slider. Elements like the interactive location
                  map maintain a strict full-width container on mobile to
                  prevent accidental page borders and clipping.
                </p>

                {/* Manual-scroll carousel — no auto-play */}
                <div
                  ref={carouselRefS4}
                  className="order-2 min-[810px]:order-1 min-[1101px]:order-3 mt-4 min-[810px]:mt-0 min-[1101px]:mt-6 w-full overflow-x-auto select-none scrollbar-hide"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <div className="flex w-max gap-[12px] min-[810px]:gap-[24px] min-[810px]:mx-auto min-[1101px]:gap-[48px]">
                    {s4Images.map((src, index) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`Dr. Amina Bennani mobile design preview ${index + 1}`}
                        width={279}
                        height={564}
                        className="shrink-0 w-auto h-[500px] min-[810px]:w-[209px] min-[810px]:h-[423px] min-[1101px]:w-auto min-[1101px]:h-[560px] object-contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
