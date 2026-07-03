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
  const top2TextRef = useRef<HTMLParagraphElement>(null);
  const desktop2TextRef = useRef<HTMLParagraphElement>(null);
  const image2ColRef = useRef<HTMLDivElement>(null);

  const handleLayout2AndOverflow = () => {
    if (mobile2TextRef.current) {
      const el = mobile2TextRef.current;
      if (!isMobile2Expanded) {
        setMobile2HasOverflow(el.scrollHeight > el.clientHeight);
      }
    }

    if (image2ColRef.current && top2TextRef.current) {
      const totalImgHeight = image2ColRef.current.offsetHeight;
      const topPartHeight = top2TextRef.current.offsetHeight;
      
      const introductionOccupiedSpace = topPartHeight + 24;
      
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

  return (
    <>
      <section className="w-full max-w-[1618px] mx-auto text-white leading-none pt-[36.5px] pb-[21.5px] px-[21.5px] min-[810px]:pt-[73px] min-[810px]:pb-[43px] min-[810px]:px-[43px] min-[1101px]:pt-[146px] min-[1101px]:pb-[86px] min-[1101px]:px-[86px]">
        {/* =========================================================================
            PHONE LAYOUT (< 810px)
            ========================================================================= */}
        <div className="flex flex-col gap-6 min-[810px]:hidden ">
          <h2 className="text-[32px] font-bold text-main-blue">About</h2>

          <p className="text-[24px] text-justify font-bold">
            Hi, I&apos;m Driss , I am a{" "}
            <span className="text-main-blue">
              dynamic and innovative Visual Designer
            </span>
            , with over <span className="text-main-blue">6 years</span> of
            experience transforming ideas into visually stunning realities.
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
              My journey into design began with a background in computer informatics
              and hardware repair a technical foundation that shaped my
              problem-solving mindset and attention to detail. Since pivoting to
              creative work in 2021, I have established{" "}
              <span className="text-main-blue">
                Driss Bourakkadi Creative Studio
              </span>
              , where I lead a dedicated team in crafting compelling visual
              identities and marketing materials. I specialize in helping businesses
              build their presence from the ground up, delivering high-impact
              solutions across diverse industries including cosmetics, advertising,
              education, and construction. Combining a Diploma in Informatics
              (2021) with advanced creative skills in the Adobe Creative Suite, I
              bridge the gap between technical precision and artistic expression. I
              am also Goethe-Zertifikat B1 certified, enabling effective
              communication in multicultural environments. For me, design is not
              just a profession it is the element where I feel most focused,
              inspired, and driven to create value for my clients
            </p>
            
            {!isMobileExpanded && mobileHasOverflow && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            )}
          </div>

          {mobileHasOverflow && (
            <button
              onClick={() => setIsMobileExpanded(!isMobileExpanded)}
              className="text-main-blue font-bold text-left self-start flex items-center gap-1 cursor-pointer text-[20px]"
            >
              {isMobileExpanded ? "view less" : "read more"}
            </button>
          )}

          <div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex font-bold items-center justify-center gap-2 rounded-xl bg-btn-blue px-4 py-1.5 text-base text-black transition-transform duration-200 ease-out hover:scale-[1.03]"
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
        <h2 className="hidden min-[810px]:block text-[28px] min-[1101px]:text-[40px] mb-4 font-bold text-main-blue">About</h2>
        <div className="font-bold hidden min-[810px]:grid grid-cols-[1fr_auto] gap-8 min-[1101px]:gap-12 items-start">
          <div className="flex flex-col">
            {/* Top description reference added here to measure offset correctly */}
            <p ref={topTextRef} className="text-[24px] min-[1101px]:text-[30px] text-justify mb-6 leading-tight">
              Hi, I&apos;m Driss , I am a{" "}
              <span className="text-main-blue">
                dynamic and innovative Visual Designer
              </span>
              , with over <span className="text-main-blue">6 years</span> of
              experience transforming ideas into visually stunning realities.
            </p>

            <div className="relative mb-6">
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: computedDesktopHeight }}
              >
                <p ref={desktopTextRef} className="text-[20px] min-[1101px]:text-[24px] text-justify leading-tight">
                  My journey into design began with a background in computer
                  informatics and hardware repair a technical foundation that shaped
                  my problem-solving mindset and attention to detail. Since pivoting
                  to creative work in 2021, I have established{" "}
                  <span className="text-main-blue">
                    Driss Bourakkadi Creative Studio
                  </span>
                  , where I lead a dedicated team in crafting compelling visual
                  identities and marketing materials. I specialize in helping
                  businesses build their presence from the ground up, delivering
                  high-impact solutions across diverse industries including cosmetics,
                  advertising, education, and construction. Combining a Diploma in
                  Informatics (2021) with advanced creative skills in the Adobe
                  Creative Suite, I bridge the gap between technical precision and
                  artistic expression. I am also Goethe-Zertifikat B1 certified,
                  enabling effective communication in multicultural environments. For
                  me, design is not just a profession it is the element where I feel
                  most focused, inspired, and driven to create value for my clients
                </p>
              </div>

              {!isDesktopExpanded && desktopHasOverflow && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              )}
            </div>

            {desktopHasOverflow && (
              <button
                onClick={() => setIsDesktopExpanded(!isDesktopExpanded)}
                className="text-main-blue font-bold text-[24px] text-left self-start flex items-center gap-1 mb-6 cursor-pointer"
              >
                {isDesktopExpanded ? "view less" : "read more"}
              </button>
            )}

            <div>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-btn-blue px-4 py-3 text-[18px] min-[1101px]:text-[24px] text-black transition-transform duration-200 ease-out hover:scale-[1.03]"
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
      <div className="w-full max-w-[1618px] mx-auto px-[21.5px] min-[810px]:px-[43px] min-[1101px]:px-[86px]">
        <hr className="border-t border-[#ABE3EE]" />
      </div>

      {/* =========================================================================
          SECTION 2: BRIDGING DESIGN AND CODE
          ========================================================================= */}
      <section className="w-full max-w-[1618px] mx-auto text-white leading-none pt-[36.5px] pb-[21.5px] px-[21.5px] min-[810px]:pt-[73px] min-[810px]:pb-[43px] min-[810px]:px-[43px] min-[1101px]:pt-[146px] min-[1101px]:pb-[86px] min-[1101px]:px-[86px]">
        {/* Phone Layout (< 810px) */}
        <div className="flex flex-col gap-6 min-[810px]:hidden ">
          <h2 className="text-[32px] font-bold text-main-blue">Bridging Design and Code</h2>

          <p className="text-[24px] text-justify font-bold">
            &ldquo;Great design is only as good as the code behind it.&rdquo;
          </p>

          <div className="w-full">
            <Image
              src="/images/profile/drisskarim.svg"
              alt="Driss and Karim"
              width={320}
              height={320}
              priority
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
              As a UI/UX Designer, I focus on crafting intuitive layouts, seamless user journeys, and pixel-perfect interfaces. But a great design truly comes to life when it meets a brilliant mind on the development side—and that is exactly what happens when I team up with my friend and developer, Karim. When we collaborate on projects, we bridge the gap between creative vision and technical execution. While I map out the visual strategy and interactive experiences, Karim brings those concepts to life with clean, efficient, and scalable code. Our workflow is built on continuous feedback, mutual problem-solving, and a shared goal of delivering seamless digital products. As captured in team.png, our partnership is all about turning ideas into high-performance web and mobile solutions where form and function meet perfectly.
            </p>
            
            {!isMobile2Expanded && mobile2HasOverflow && (
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none" />
            )}
          </div>

          {mobile2HasOverflow && (
            <button
              onClick={() => setIsMobile2Expanded(!isMobile2Expanded)}
              className="text-main-blue font-bold text-left self-start flex items-center gap-1 cursor-pointer text-[20px]"
            >
              {isMobile2Expanded ? "view less" : "read more"}
            </button>
          )}
        </div>

        {/* Tablet & Desktop Layout (>= 810px) */}
        <h2 className="hidden min-[810px]:block text-[28px] min-[1101px]:text-[40px] mb-4 font-bold text-main-blue">Bridging Design and Code</h2>
        <div className="font-bold hidden min-[810px]:grid grid-cols-[1fr_auto] gap-8 min-[1101px]:gap-12 items-start">
          <div className="flex flex-col">
            <p ref={top2TextRef} className="text-[24px] min-[1101px]:text-[30px] text-justify mb-6 leading-tight">
              &ldquo;Great design is only as good as the code behind it.&rdquo;
            </p>

            <div className="relative mb-6">
              <div
                className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                style={{ maxHeight: computedDesktop2Height }}
              >
                <p ref={desktop2TextRef} className="text-[20px] min-[1101px]:text-[24px] text-justify leading-tight">
                  As a UI/UX Designer, I focus on crafting intuitive layouts, seamless user journeys, and pixel-perfect interfaces. But a great design truly comes to life when it meets a brilliant mind on the development side—and that is exactly what happens when I team up with my friend and developer, Karim. When we collaborate on projects, we bridge the gap between creative vision and technical execution. While I map out the visual strategy and interactive experiences, Karim brings those concepts to life with clean, efficient, and scalable code. Our workflow is built on continuous feedback, mutual problem-solving, and a shared goal of delivering seamless digital products. As captured in team.png, our partnership is all about turning ideas into high-performance web and mobile solutions where form and function meet perfectly.
                </p>
              </div>

              {!isDesktop2Expanded && desktop2HasOverflow && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" />
              )}
            </div>

            {desktop2HasOverflow && (
              <button
                onClick={() => setIsDesktop2Expanded(!isDesktop2Expanded)}
                className="text-main-blue font-bold text-[24px] text-left self-start flex items-center gap-1 mb-6 cursor-pointer"
              >
                {isDesktop2Expanded ? "view less" : "read more"}
              </button>
            )}
          </div>

          <div ref={image2ColRef} className="shrink-0">
            <div className="block min-[1101px]:hidden">
              <Image
                src="/images/profile/drisskarim.svg"
                alt="Driss and Karim"
                width={250}
                height={250}
                priority
                onLoad={handleImage2Load}
              />
            </div>
            <div className="hidden min-[1101px]:block">
              <Image
                src="/images/profile/drisskarim.svg"
                alt="Driss and Karim"
                width={500}
                height={500}
                priority
                onLoad={handleImage2Load}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}