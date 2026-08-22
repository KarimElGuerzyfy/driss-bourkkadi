"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const pillLabels = [
  "THE CHALLENGE",
  "DESIGN & TECH STRATEGY",
  "DESIGN SYSTEM",
  "FINAL PRODUCT & EXECUTION",
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

  const renderPill = (label: string, index: number, extraClassName = "") => (
    <button
      key={label}
      onClick={() => scrollToSection(index)}
      className={`w-full flex items-center text-center font-bold text-[27px] leading-tight rounded-2xl pl-6 py-2 transition-colors [text-box:trim-both_cap_alphabetic] ${
        activeSectionIndex === index
          ? "bg-black text-main-blue"
          : "bg-[#282828] text-[#F1FAFC]/30"
      } ${extraClassName}`}
    >
      {label}
    </button>
  );

  return (
    <section className="relative min-h-screen bg-card-bg">
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
          <nav className="hidden min-[1101px]:flex min-[1101px]:flex-col min-[1101px]:gap-3 min-[1101px]:w-[380px] min-[1101px]:max-w-[380px] min-[1101px]:shrink-0 min-[1101px]:sticky min-[1101px]:top-26">
            {pillLabels.map((label, index) => renderPill(label, index))}
          </nav>

          {/* Content column */}
          <div className="min-[1101px]:w-3/4">
            {/* Section 1 — The Challenge & The Problem */}
            <div
              ref={(el) => {
                sectionRefs.current[0] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[810px]:hidden min-[1101px]:block">
                THE CHALLENGE & THE PROBLEM
              </h2>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                The Need
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                Dr. Amina Bennani, a specialist dentist, needed to establish a
                digital presence that accurately reflected the quality of her
                clinic. Her previous setup lacked a dedicated online
                destination, leading potential patients to rely on
                word-of-mouth or generic directories. She required a modern
                platform to showcase her specialized services (Orthodontics,
                Implantology, Cosmetic Dentistry), display patient
                testimonials, simplify appointment bookings, and provide
                essential clinical information clearly.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                The Target Market
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                The primary audience consists of local patients seeking
                high-end, reliable dental care—ranging from parents looking
                for pediatric care to working professionals interested in
                cosmetic enhancements. Moroccan patients often seek clarity,
                cleanliness, and reassurance when selecting healthcare
                providers.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                Strategic Design Decisions
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                During initial discovery workshops between Dr. Bennani and
                myself, we outlined clear design directions:
              </p>
              <ul className="mt-2 list-disc pl-12 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                <li>
                  Visual Tone: Reassuring, premium, hygienic, and approachable.
                  Dental visits often carry anxiety; the aesthetic needed to
                  feel calm and welcoming rather than sterile and clinical.
                </li>
                <li className="mt-2">
                  Color Palette: A soothing base of soft clinical blues and deep
                  navies paired with crisp whites and warm neutral accents to
                  convey trust, precision, and care.
                </li>
                <li className="mt-2">
                  Imagery & Photography: Moving away from generic stock photos
                  of overly artificial smiles. Instead, we prioritized
                  high-quality shots of the actual clinic, modern equipment, and
                  real doctor-patient interactions to build authentic trust.
                </li>
                <li className="mt-2">
                  Typography: Clean, highly legible sans-serif typography for
                  clear hierarchy, high readability across devices, and an
                  accessible feel for all age demographics.
                </li>
              </ul>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 2 — Design & Tech Strategy */}
            <div
              ref={(el) => {
                sectionRefs.current[1] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[810px]:hidden min-[1101px]:block">
                DESIGN & TECH STRATEGY
              </h2>

              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                As a full-service creative and development workflow, our
                approach was built on bridging high-fidelity visual design with
                clean, performance-first engineering.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                The Design Phase (Figma & UX Architecture)
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                Before jumping into visuals, we mapped out the patient journey:
              </p>
              <ol className="mt-2 list-decimal pl-12 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                <li>
                  Discovery & Frictionless Navigation: Patients must instantly
                  understand services offered, location, and working hours
                  within seconds of landing.
                </li>
                <li className="mt-2">
                  Bilingual UX: Recognizing the local demographic in Morocco,
                  the experience was planned as a seamless multi-language
                  interface in French and Arabic, ensuring intuitive
                  right-to-left (RTL) and left-to-right (LTR) layout switching
                  without breaking visual harmony.
                </li>
                <li className="mt-2">
                  Conversion-Driven CTAs: Prominent &ldquo;Book an
                  Appointment&rdquo; and &ldquo;Call Clinic&rdquo; actions
                  placed strategically across all scroll depth levels.
                </li>
              </ol>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                The Engineering & Dev Aspect
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                To match the speed, cleanliness, and security expected of a
                modern medical platform, we opted for a robust tech stack:
              </p>
              <ul className="mt-2 list-disc pl-12 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                <li>
                  Next.js & TypeScript: Built for lightning-fast server-side
                  rendering, top-tier SEO for local search optimization, and
                  type-safe code architecture.
                </li>
                <li className="mt-2">
                  Tailwind CSS: Allowed us to translate Figma design tokens
                  (spacing, typography scales, color palettes) directly into
                  utility classes for pixel-perfect fidelity.
                </li>
                <li className="mt-2">
                  Interactive Integrations: Embedded Google Maps API for
                  real-time location directions and frictionless WhatsApp/phone
                  call triggers.
                </li>
              </ul>

              {/* Section image — full-width, 48px below the last paragraph */}
              <div className="hidden min-[1101px]:block mt-12 overflow-hidden">
                <Image
                  src="/images/projects/website/section 2 img 1.svg"
                  alt="Design and tech strategy overview"
                  width={1005}
                  height={612}
                  className="w-full h-auto"
                />
              </div>
              <div className="block min-[1101px]:hidden mt-12 overflow-hidden">
                <Image
                  src="/images/projects/website/section 2 img 2.svg"
                  alt="Design and tech strategy overview"
                  width={1005}
                  height={612}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 3 — The Design System & Architecture */}
            <div
              ref={(el) => {
                sectionRefs.current[2] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[810px]:hidden min-[1101px]:block">
                THE DESIGN SYSTEM & ARCHITECTURE
              </h2>

              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                To keep the platform scalable, consistent, and maintainable, I
                established a dedicated component-driven design system in Figma.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                Core Structure & Pages
              </h3>
              <ul className="mt-2 list-disc pl-12 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                <li>
                  Hero & Quick Clinic Info: Immediate value proposition, contact
                  bar, emergency line, and direct booking trigger.
                </li>
                <li className="mt-2">
                  Specialties & Services Grid: Modular cards breaking down
                  treatment categories with clear icons and summary
                  popups/pages.
                </li>
                <li className="mt-2">
                  Doctor Profile & Qualifications: Reassuring bio highlighting
                  credentials, academic background, and philosophy of care.
                </li>
                <li className="mt-2">
                  Interactive Google Map & Location Details: Integrated live
                  location mapping, parking availability notes, and clinic
                  operating hours.
                </li>
                <li className="mt-2">
                  Multi-Language Engine: A unified design system accommodating
                  text expansions between French (LTR) and Arabic (RTL) to
                  maintain optical alignment across both language versions.
                </li>
              </ul>
            </div>

            <div className="border-t border-[#ABE3EE]/30 mt-16 mb-16" />

            {/* Section 4 — Execution & The Final Product */}
            <div
              ref={(el) => {
                sectionRefs.current[3] = el;
              }}
              className="scroll-mt-16 min-[810px]:scroll-mt-96 min-[1101px]:scroll-mt-20"
            >
              <h2 className="text-main-blue font-bold leading-tight text-[24px] min-[810px]:text-[28px] min-[810px]:hidden min-[1101px]:block">
                EXECUTION & THE FINAL PRODUCT
              </h2>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                Phase 1: Wireframing & Concept Validation
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                We started with low-fidelity wireframes to finalize the content
                hierarchy and layout flow. The key focus was eliminating
                clutter: placing critical patient information (address, hours,
                booking buttons) above the fold and structuring medical services
                into bite-sized, digestible visual cards.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                Phase 2: High-Fidelity Design & Prototyping
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                Once the layout structure was validated, I developed the
                component system in Figma—defining atomic elements like primary
                buttons, interactive cards, localized navigation drawers, and
                typography tokens. I created interactive prototypes to simulate
                hover states, mobile navigation behavior, and language
                switching.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                Phase 3: Developer Handoff & Co-Creation
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                Working hand-in-hand with engineering, the handover was
                friction-free. Because the Figma components directly mirrored the
                Tailwind CSS token structure, turning static frames into Next.js
                components was seamless. Any technical adjustments regarding
                mobile responsiveness or font rendering were addressed
                collaboratively in real-time.
              </p>

              <h3 className="text-[#ABE3EE] font-bold leading-tight text-[24px] min-[810px]:text-[28px] mt-5">
                The Final Result
              </h3>
              <p className="mt-2 text-justify leading-tight text-lg min-[810px]:text-2xl min-[810px]:font-bold">
                The final platform is a sleek, highly responsive, bilingual
                medical hub. It bridges the gap between clinical professionalism
                and warm patient care—reducing pre-appointment anxiety and giving
                Dr. Amina Bennani a digital presence that matches the elite
                quality of her practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}