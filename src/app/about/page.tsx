"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function AboutSection() {
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);

  const [mobileHasOverflow, setMobileHasOverflow] = useState(false);
  const [desktopHasOverflow, setDesktopHasOverflow] = useState(false);

  const [desktopScrollHeight, setDesktopScrollHeight] = useState(0);
  const [allowedTextHeight, setAllowedTextHeight] = useState(0);

  const mobileTextRef = useRef<HTMLParagraphElement>(null);
  const topTextRef = useRef<HTMLParagraphElement>(null);
  const desktopTextRef = useRef<HTMLParagraphElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  const handleLayoutAndOverflow = () => {
    if (mobileTextRef.current) {
      const el = mobileTextRef.current;
      if (!isMobileExpanded) {
        setMobileHasOverflow(el.scrollHeight > el.clientHeight);
      }
    }

    if (imageColRef.current && topTextRef.current) {
      const totalImgHeight = imageColRef.current.offsetHeight;
      const topPartHeight = topTextRef.current.offsetHeight;
      
      // The introductory paragraph has a mb-6 margin (24px)
      const introductionOccupiedSpace = topPartHeight + 24;
      
      // The max remaining height allowed for the text block to match the image baseline
      const exactRemainingHeight = totalImgHeight - introductionOccupiedSpace;
      setAllowedTextHeight(exactRemainingHeight);

      if (desktopTextRef.current) {
        const el = desktopTextRef.current;
        setDesktopHasOverflow(el.scrollHeight > exactRemainingHeight);
        setDesktopScrollHeight(el.scrollHeight);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    handleLayoutAndOverflow();
    window.addEventListener("resize", handleLayoutAndOverflow);
    return () => window.removeEventListener("resize", handleLayoutAndOverflow);
  }, [isMobileExpanded, isDesktopExpanded]);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget) {
      handleLayoutAndOverflow();
    }
  };

  // The collapsible container will now strictly terminate at the calculated baseline
  const computedDesktopHeight = isDesktopExpanded
    ? `${desktopScrollHeight || 9999}px`
    : `${allowedTextHeight || 250}px`;

  // =========================================================================
  // SECTION 2 STATE & REFS
  // =========================================================================
  const [isMobile2Expanded, setIsMobile2Expanded] = useState(false);
  const [isDesktop2Expanded, setIsDesktop2Expanded] = useState(false);

  const [mobile2HasOverflow, setMobile2HasOverflow] = useState(false);
  const [desktop2HasOverflow, setDesktop2HasOverflow] = useState(false);

  const [desktop2ScrollHeight, setDesktop2ScrollHeight] = useState(0);
  const [allowed2TextHeight, setAllowed2TextHeight] = useState(0);

  const mobile2TextRef = useRef<HTMLParagraphElement>(null);
  const desktop2TextRef = useRef<HTMLParagraphElement>(null);
  const image2ColRef = useRef<HTMLDivElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);

  const handleLayout2AndOverflow = () => {
    if (mobile2TextRef.current) {
      const el = mobile2TextRef.current;
      if (!isMobile2Expanded) {
        setMobile2HasOverflow(el.scrollHeight > el.clientHeight);
      }
    }

    if (image2ColRef.current) {
      const totalImgHeight = image2ColRef.current.offsetHeight;
      const headingHeight = heading2Ref.current ? heading2Ref.current.offsetHeight : 0;
      // heading has mb-6 (24px)
      const introductionOccupiedSpace = headingHeight + 24;
      const exactRemainingHeight = totalImgHeight - introductionOccupiedSpace;
      setAllowed2TextHeight(exactRemainingHeight);

      if (desktop2TextRef.current) {
        const el = desktop2TextRef.current;
        setDesktop2HasOverflow(el.scrollHeight > exactRemainingHeight);
        setDesktop2ScrollHeight(el.scrollHeight);
      }
    }
  };

  useIsomorphicLayoutEffect(() => {
    handleLayout2AndOverflow();
    window.addEventListener("resize", handleLayout2AndOverflow);
    return () => window.removeEventListener("resize", handleLayout2AndOverflow);
  }, [isMobile2Expanded, isDesktop2Expanded]);

  const handleImage2Load = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget) {
      handleLayout2AndOverflow();
    }
  };

  const computedDesktop2Height = isDesktop2Expanded
    ? `${desktop2ScrollHeight || 9999}px`
    : `${allowed2TextHeight || 250}px`;

  // =========================================================================
  // SECTION 4 TOOL STACK DATA
  // =========================================================================
  const toolIcons = [
    "/icons/toolsicons 1.svg",
    "/icons/toolsicons 2.svg",
    "/icons/toolsicons 3.svg",
    "/icons/toolsicons 4.svg",
    "/icons/toolsicons 5.svg",
    "/icons/toolsicons 6.svg",
    "/icons/toolsicons 7.svg",
    "/icons/toolsicons 8.svg",
    "/icons/toolsicons 9.svg",
    "/icons/toolsicons 10.svg",
    "/icons/toolsicons 11.svg",
  ];

  const allToolIcons = [...toolIcons, ...toolIcons, ...toolIcons, ...toolIcons];

  // =========================================================================
  // SECTION 5 CAROUSEL HOOKS
  // =========================================================================
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
    <>
      <section className="w-full max-w-404.5 mx-auto text-white leading-none p-6 pt-12 pb-12 min-[810px]:pt-12 min-[810px]:pb-12 min-[810px]:px-10.75 min-[1101px]:pt-12 min-[1101px]:pb-12 min-[1101px]:px-21.5">
        {/* =========================================================================
            PHONE LAYOUT (< 810px)
            ========================================================================= */}
        <div className="flex flex-col gap-6 min-[810px]:hidden ">
          <p className="text-[24px] text-justify font-bold">
            Hi, I&apos;m <span className="text-main-blue">Driss</span>—<span className="text-main-blue">a Visual Design Specialist</span> driven by the craft of turning complex ideas into powerful visual stories.
          </p>

          <div className="w-full">
            <Image
              src="/images/profile/aboutdriss.svg"
              alt="Driss Bourakkadi"
              width={320}
              height={320}
              priority
              className="w-full h-auto aspect-square object-contain"
            />
          </div>

          <div className="relative">
            <p
              ref={mobileTextRef}
              className={`text-[18px] text-justify leading-tight transition-all duration-300 ease-in-out ${
                !isMobileExpanded ? "line-clamp-3" : ""
              }`}
            >
              My background in computer informatics gave me a sharp engineering
              mindset, but design is where I truly belong. Over the past 6+
              years, through{" "}
              <span className="text-main-blue">
                Driss Bourakkadi Creative Studio
              </span>
              , I&apos;ve been helping brands—from cosmetics to education—build
              their visual identity from the ground up. I bridge technical
              precision with creative art direction, crafting high-impact
              imagery and digital experiences that don&apos;t just look good,
              but deliver real value.
              <br />
              <br />
              For me, design isn&apos;t just a profession—it&apos;s an
              obsession that consumes 90% of my day. Whether I&apos;m at my
              studio or diving into a new tutorial at home, I&apos;m
              constantly pushing to stay ahead of the curve.
              <br />
              <br />
              My journey evolved from a technical background into founding
              Driss Bourakkadi Creative Studio in 2021, where I don&apos;t
              just push pixels—I build brands from the ground up. From
              product photography and packaging to full visual identities and
              digital strategies, I partner with businesses like{" "}
              <span className="text-main-blue">Linova Bio</span> and{" "}
              <span className="text-main-blue">Saoga</span> to help them
              stand out and scale. I&apos;m a relentless learner; if a
              project demands a new tool or skill, I master it. At my core,
              I&apos;m not just a designer executing software—I&apos;m a
              creative partner invested in the big picture.
            </p>
            
            {!isMobileExpanded && mobileHasOverflow && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-black to-transparent pointer-events-none" />
            )}
          </div>

          {mobileHasOverflow && (
            <button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className="text-main-blue font-bold text-left self-start flex items-center gap-1 cursor-pointer text-[20px] [text-box:trim-both_cap_alphabetic]"
            >
              {isMobileExpanded ? "view less" : "read more"}
            </button>
          )}

          <div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex font-bold items-center justify-center gap-2 rounded-xl bg-btn-blue px-4 py-1.5 text-base text-black transition-transform duration-200 ease-out hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
            >
              Download CV
              <Image
                src="/icons/download-arrowbl.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>

        {/* =========================================================================
            TABLET & DESKTOP LAYOUT (>= 810px)
            ========================================================================= */}
        <div className="font-bold hidden min-[810px]:grid grid-cols-[1fr_auto] gap-8 min-[1101px]:gap-12 items-start">
          <div className="flex flex-col">
            {/* Top description reference added here to measure offset correctly */}
            <p ref={topTextRef} className="text-[24px] min-[1101px]:text-[30px] text-justify mb-6 leading-tight">
              Hi, I&apos;m <span className="text-main-blue">Driss</span>—<span className="text-main-blue">a Visual Design Specialist</span> driven by the craft of turning complex ideas into powerful visual stories.
            </p>

            <div className="relative mb-6">
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: computedDesktopHeight }}
              >
                <p ref={desktopTextRef} className="text-[20px] min-[1101px]:text-[24px] text-justify leading-tight">
                  My background in computer informatics gave me a sharp
                  engineering mindset, but design is where I truly belong.
                  Over the past 6+ years, through{" "}
                  <span className="text-main-blue">
                    Driss Bourakkadi Creative Studio
                  </span>
                  , I&apos;ve been helping brands—from cosmetics to
                  education—build their visual identity from the ground up. I
                  bridge technical precision with creative art direction,
                  crafting high-impact imagery and digital experiences that
                  don&apos;t just look good, but deliver real value.
                  <br />
                  <br />
                  For me, design isn&apos;t just a profession—it&apos;s an
                  obsession that consumes 90% of my day. Whether I&apos;m at
                  my studio or diving into a new tutorial at home, I&apos;m
                  constantly pushing to stay ahead of the curve.
                  <br />
                  <br />
                  My journey evolved from a technical background into
                  founding Driss Bourakkadi Creative Studio in 2021, where I
                  don&apos;t just push pixels—I build brands from the ground
                  up. From product photography and packaging to full visual
                  identities and digital strategies, I partner with
                  businesses like{" "}
                  <span className="text-main-blue">Linova Bio</span> and{" "}
                  <span className="text-main-blue">Saoga</span> to help them
                  stand out and scale. I&apos;m a relentless learner; if a
                  project demands a new tool or skill, I master it. At my
                  core, I&apos;m not just a designer executing software—I&apos;m
                  a creative partner invested in the big picture.
                </p>
              </div>

              {!isDesktopExpanded && desktopHasOverflow && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black to-transparent pointer-events-none" />
              )}
            </div>

            {desktopHasOverflow && (
              <button
                onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
                className="text-main-blue font-bold text-[24px] text-left self-start flex items-center gap-1 mb-6 cursor-pointer [text-box:trim-both_cap_alphabetic]"
              >
                {isDesktopExpanded ? "view less" : "read more"}
              </button>
            )}

            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-btn-blue px-4 py-3 text-[18px] min-[1101px]:text-[24px] text-black transition-transform duration-200 ease-out hover:scale-[1.03] [text-box:trim-both_cap_alphabetic]"
              >
                Download CV
                <Image
                  src="/icons/download-arrowbl.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </a>
            </div>
          </div>

          <div ref={imageColRef} className="shrink-0">
            <div className="block min-[1101px]:hidden">
              <Image
                src="/images/profile/aboutdriss.svg"
                alt="Driss Bourakkadi"
                width={250}
                height={250}
                priority
                onLoad={handleImageLoad}
              />
            </div>
            <div className="hidden min-[1101px]:block">
              <Image
                src="/images/profile/aboutdriss.svg"
                alt="Driss Bourakkadi"
                width={500}
                height={500}
                priority
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL DIVIDER
          ========================================================================= */}
      <div className="w-full max-w-404.5 mx-auto min-[1101px]:px-21.5">
        <hr className="border-t border-[#ABE3EE]" />
      </div>

      {/* =========================================================================
          SECTION 2: BRIDGING DESIGN AND CODE
          ========================================================================= */}
      <section className="w-full max-w-404.5 mx-auto text-white leading-none p-6 pt-12 pb-12 min-[810px]:pt-12 min-[810px]:pb-12 min-[810px]:px-10.75 min-[1101px]:pt-12 min-[1101px]:pb-12 min-[1101px]:px-21.5">
        {/* Phone Layout (< 810px) */}
        <div className="flex flex-col gap-6 min-[810px]:hidden ">
          <h2 className="text-[32px] font-bold text-main-blue">Bridging Design and Code</h2>

          <div className="w-full">
            <Image
              src="/images/profile/section 2 img 2.svg"
              alt="Bridging design and code"
              width={320}
              height={320}
              className="w-full h-auto aspect-square object-contain"
            />
          </div>

          <div className="relative">
            <p
              ref={mobile2TextRef}
              className={`text-[18px] text-justify leading-tight transition-all duration-300 ease-in-out ${
                !isMobile2Expanded ? "line-clamp-3" : ""
              }`}
            >
              Great products are built through collaboration, not ego. In
              late 2025, software developer Karim joined the studio,
              turning our workflow into a full-stack operation—taking
              projects in Figma all the way to production-ready code.
              <br />
              <br />
              More than just building websites from scratch, this synergy
              gave me a transferable blueprint for working with engineering
              teams. I learned to speak developer, understand code
              constraints, and take technical feedback constructively
              without personal bias. Today, whether collaborating with
              in-house tech partners or external engineering teams, I
              deliver design systems built with technical empathy—ensuring
              seamless handoffs and friction-free execution.
            </p>
            
            {!isMobile2Expanded && mobile2HasOverflow && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-black to-transparent pointer-events-none" />
            )}
          </div>

          {mobile2HasOverflow && (
            <button
              onClick={() => setIsMobile2Expanded(!isMobile2Expanded)}
              className="text-main-blue font-bold text-left self-start flex items-center gap-1 cursor-pointer text-[20px] [text-box:trim-both_cap_alphabetic]"
            >
              {isMobile2Expanded ? "view less" : "read more"}
            </button>
          )}
        </div>

        {/* Tablet & Desktop Layout (>= 810px) */}
        <div className="font-bold hidden min-[810px]:grid grid-cols-[1fr_auto] gap-8 min-[1101px]:gap-12 items-start">
          <div className="flex flex-col">
            <h2 ref={heading2Ref} className="text-[28px] min-[1101px]:text-[40px] mb-6 font-bold text-main-blue">Bridging Design and Code</h2>

            <div className="relative mb-6">
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: computedDesktop2Height }}
              >
                <p ref={desktop2TextRef} className="text-[20px] min-[1101px]:text-[24px] text-justify leading-tight">
                  Great products are built through collaboration, not ego.
                  In late 2025, software developer Karim joined the studio,
                  turning our workflow into a full-stack operation—taking
                  projects in Figma all the way to production-ready code.
                  <br />
                  <br />
                  More than just building websites from scratch, this
                  synergy gave me a transferable blueprint for working with
                  engineering teams. I learned to speak developer,
                  understand code constraints, and take technical feedback
                  constructively without personal bias. Today, whether
                  collaborating with in-house tech partners or external
                  engineering teams, I deliver design systems built with
                  technical empathy—ensuring seamless handoffs and
                  friction-free execution.
                </p>
              </div>

              {!isDesktop2Expanded && desktop2HasOverflow && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-black to-transparent pointer-events-none" />
              )}
            </div>

            {desktop2HasOverflow && (
              <button
                onClick={() => setIsDesktop2Expanded(!isDesktop2Expanded)}
                className="text-main-blue font-bold text-[24px] text-left self-start flex items-center gap-1 mb-6 cursor-pointer [text-box:trim-both_cap_alphabetic]"
              >
                {isDesktop2Expanded ? "view less" : "read more"}
              </button>
            )}
          </div>

          <div ref={image2ColRef} className="shrink-0">
            <div className="block min-[1101px]:hidden">
              <Image
                src="/images/profile/section 2 img 2.svg"
                alt="Bridging design and code"
                width={250}
                height={250}
                onLoad={handleImage2Load}
              />
            </div>
            <div className="hidden min-[1101px]:block">
              <Image
                src="/images/profile/section 2 img 1.svg"
                alt="Bridging design and code"
                width={500}
                height={500}
                onLoad={handleImage2Load}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL DIVIDER
          ========================================================================= */}
      <div className="w-full max-w-404.5 mx-auto min-[1101px]:px-21.5">
        <hr className="border-t border-[#ABE3EE]" />
      </div>

      {/* =========================================================================
          SECTION 3: EXPERIENCE
          ========================================================================= */}
      <section className="w-full max-w-404.5 mx-auto text-white leading-none p-6 pt-12 pb-12 min-[810px]:pt-12 min-[810px]:pb-12 min-[810px]:px-10.75 min-[1101px]:pt-12 min-[1101px]:pb-12 min-[1101px]:px-21.5">
        {/* Phone Layout Heading (< 810px) */}
        <h2 className="text-[32px] font-bold text-main-blue min-[810px]:hidden mb-6">Experience</h2>
        
        {/* Tablet & Desktop Layout Heading (>= 810px) */}
        <h2 className="hidden min-[810px]:block text-[28px] min-[1101px]:text-[40px] mb-8 font-bold text-main-blue">Experience</h2>

        <div className="flex flex-col font-bold gap-16">
          {/* Entry 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] min-[1101px]:text-[30px] text-justify leading-tight text-[#C7EDF3]">
              Designer & Owner
            </h3>
            <div className="flex flex-col min-[810px]:flex-row min-[810px]:justify-between min-[810px]:items-baseline gap-1 text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-white">
              <span>Bureau Creative Studio By DRISS BOURAKKADI</span>
              <span className="shrink-0 text-left min-[810px]:text-right text-[#C7EDF3]">2021 - present</span>
            </div>
            <p className="text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-justify leading-tight text-white font-bold">
              Founded and manage an independent design studio, specializing in bespoke graphic solutions for startups and established businesses. Designed complete brand identities, including logos, color palettes, and visual guidelines.
            </p>
          </div>

          {/* Entry 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] min-[1101px]:text-[30px] text-justify leading-tight text-[#C7EDF3]">
              Web & UI/UX Designer
            </h3>
            <div className="flex flex-col min-[810px]:flex-row min-[810px]:justify-between min-[810px]:items-baseline gap-1 text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-white">
              <span>Independent Web Projects</span>
              <span className="shrink-0 text-left min-[810px]:text-right text-[#C7EDF3]">2025 - present</span>
            </div>
            <p className="text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-justify leading-tight text-white font-bold">
              Spearheaded end-to-end web design projects, crafting comprehensive digital experiences. Key projects include a full website design for Dr. Mohamed Taher and an extensive design and marketing case study for the sports brand Saoga. Utilized Figma and the Adobe Creative Suite to build structured, high-end user interfaces that translate brand identities into seamless web experiences.
            </p>
          </div>

          {/* Entry 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] min-[1101px]:text-[30px] text-justify leading-tight text-[#C7EDF3]">
              Brand Identity Lead
            </h3>
            <div className="flex flex-col min-[810px]:flex-row min-[810px]:justify-between min-[810px]:items-baseline gap-1 text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-white">
              <span>Linova Bio Cosmetics</span>
              <span className="shrink-0 text-left min-[810px]:text-right text-[#C7EDF3]">2022 – Present</span>
            </div>
            <p className="text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-justify leading-tight text-white font-bold">
              Led full brand identity overhaul, including logo, social media kits, and promotional imagery, praised for exceptional quality and alignment with eco-friendly brand values.
            </p>
          </div>

          {/* Entry 4 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-[24px] min-[1101px]:text-[30px] text-justify leading-tight text-[#C7EDF3]">
              Creative Partner
            </h3>
            <div className="flex flex-col min-[810px]:flex-row min-[810px]:justify-between min-[810px]:items-baseline gap-1 text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-white">
              <span>Khalifi Pub Advertising Agency</span>
              <span className="shrink-0 text-left min-[810px]:text-right text-[#C7EDF3]">2024 – Present</span>
            </div>
            <p className="text-[18px] min-[810px]:text-[20px] min-[1101px]:text-[24px] text-justify leading-tight text-white font-bold">
              Partnered on logos, visual identities, social designs, and high-value graphic projects, delivering creative solutions that boosted client print and visual communication campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL DIVIDER
          ========================================================================= */}
      <div className="w-full max-w-404.5 mx-auto min-[1101px]:px-21.5">
        <hr className="border-t border-[#ABE3EE]" />
      </div>

      {/* =========================================================================
          SECTION 4: TOOL STACK
          ========================================================================= */}
      <section className="w-full max-w-404.5 mx-auto text-white leading-none pt-12 pb-12 min-[810px]:pt-12 min-[810px]:pb-12 min-[1101px]:pt-12 min-[1101px]:pb-12">
        {/* Phone Layout Heading (< 810px) */}
        <h2 className="text-[32px] font-bold text-main-blue min-[810px]:hidden mb-6 px-6">
          Tool stack
        </h2>
        
        {/* Tablet & Desktop Layout Heading (>= 810px) */}
        <h2 className="hidden min-[810px]:block text-[28px] min-[1101px]:text-[40px] mb-8 font-bold text-main-blue px-6 min-[810px]:px-10.75 min-[1101px]:px-21.5">
          Tool stack
        </h2>

        <p className="text-[24px] min-[1101px]:text-[30px] text-justify font-bold mb-8 leading-tight px-6 min-[810px]:px-10.75 min-[1101px]:px-21.5">
          My work is built on a refined combination of Adobe Creative Suite expertise and advanced UI/UX tools, allowing me to craft visually compelling, highly functional interfaces. I blend systems thinking and creativity to produce designs that communicate clarity and strong visual identity. Here is a bit of my current rotation.
        </p>

        <div className="w-full overflow-x-hidden py-4" dir="ltr">
          <div
            className="flex items-center gap-3 min-[1101px]:gap-12"
            style={{
              width: "max-content",
              animation: "marquee 50s linear infinite",
            }}
          >
            {allToolIcons.map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt=""
                width={90}
                height={90}
                className="w-11.25 h-11.25 min-[1101px]:w-22.5 min-[1101px]:h-22.5 shrink-0 object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HORIZONTAL DIVIDER
          ========================================================================= */}
      <div className="w-full max-w-404.5 mx-auto min-[1101px]:px-21.5">
        <hr className="border-t border-[#ABE3EE]" />
      </div>

      {/* =========================================================================
          SECTION 5: OFF-SCREEN & INSPIRATION
          ========================================================================= */}
      <section className="w-full max-w-404.5 mx-auto text-white leading-none p-6 pt-12 pb-12 min-[810px]:pt-12 min-[810px]:pb-12 min-[810px]:px-10.75 min-[1101px]:pt-12 min-[1101px]:pb-12 min-[1101px]:px-21.5">
        {/* Responsive Heading Setup matching structure of earlier sections */}
        <h2 className="text-[32px] min-[810px]:text-[28px] min-[1101px]:text-[40px] font-bold text-main-blue mb-6 min-[810px]:mb-8">
          Off-Screen & Inspiration
        </h2>

        <p className="text-[24px] min-[1101px]:text-[30px] text-justify font-bold mb-8 leading-tight">
          When I am not deep into a project, my most important title isn&apos;t Founder or Designer—it&apos;s Dad. I love spending my free time exploring the digital space with my son, showing him the creative side of the web, and watching him discover how things work. Seeing the digital world through his eyes keeps my perspective fresh and reminds me exactly why I design: to create experiences that are engaging and full of wonder.
        </p>

        {/* PHONE IMAGE VIEW: Single vertical column stack (< 810px) */}
        <div className="flex flex-col gap-6 min-[810px]:hidden">
          <Image
            src="/images/profile/bachir 1.svg"
            alt="Inspiration 1"
            width={523}
            height={394}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/profile/bachir 2.svg"
            alt="Inspiration 2"
            width={523}
            height={394}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/images/profile/bachir 3.svg"
            alt="Inspiration 3"
            width={523}
            height={394}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* TABLET & DESKTOP IMAGE VIEW: Horizontal flex row track with centered container layout and scroll constraints (>= 810px) */}
        <div 
          ref={carouselRef}
          className="hidden min-[810px]:block w-full overflow-x-auto select-none scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch"
          }}
        >
          <div className="flex justify-center min-w-min w-max mx-auto gap-6">
            <Image
              src="/images/profile/bachir 1.svg"
              alt="Inspiration 1"
              width={523}
              height={394}
              className="shrink-0 w-98.25 h-74 min-[1101px]:w-130.75 min-[1101px]:h-98.5 object-cover"
            />
            <Image
              src="/images/profile/bachir 2.svg"
              alt="Inspiration 2"
              width={523}
              height={394}
              className="shrink-0 w-98.25 h-74 min-[1101px]:w-130.75 min-[1101px]:h-98.5 object-cover"
            />
            <Image
              src="/images/profile/bachir 3.svg"
              alt="Inspiration 3"
              width={523}
              height={394}
              className="shrink-0 w-98.25 h-74 min-[1101px]:w-130.75 min-[1101px]:h-98.5 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}