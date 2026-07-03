import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full max-w-[1618px] mx-auto text-white leading-none pt-[36.5px] pb-[21.5px] px-[21.5px] min-[810px]:pt-[73px] min-[810px]:pb-[43px] min-[810px]:px-[43px] min-[1101px]:pt-[146px] min-[1101px]:pb-[86px] min-[1101px]:px-[86px]">
      {/* =========================================================================
          PHONE LAYOUT (< 810px)
          Stacked Order: Title -> Description -> Image -> Button -> Body
          ========================================================================= */}
      <div className="flex flex-col gap-6 min-[810px]:hidden ">
        {/* Heading */}
        <h2 className="text-[32px] font-bold">About</h2>

        {/* Description */}
        <p className="text-[24px] text-justify font-bold">
          Hi, I&apos;m Driss , I am a{" "}
          <span className="text-main-blue">
            dynamic and innovative Visual Designer
          </span>
          , with over <span className="text-main-blue">6 years</span> of
          experience transforming ideas into visually stunning realities.
        </p>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/images/profile/aboutdriss.svg"
            alt="Driss Bourakkadi"
            width={320}
            height={320}
            priority
          />
        </div>

        {/* Download CV Button */}
        <div>
          <a
            href="/cv.pdf"
            download
            className="inline-flex font-bold items-center justify-center gap-2 rounded-xl bg-btn-blue px-6 py-2 text-lg text-black transition-transform duration-200 ease-out hover:scale-[1.03]"
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

        {/* Body Paragraph */}
        <p className="text-base text-justify">
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
      </div>

      {/* =========================================================================
          TABLET & DESKTOP LAYOUT (>= 810px)
          Two Columns: Left (Text + Button) | Right (Image Only)
          ========================================================================= */}
      <h2 className="hidden min-[810px]:block text-[28px] min-[1101px]:text-[40px] mb-4 font-bold text-main-blue">About</h2>
      <div className="font-bold hidden min-[810px]:grid grid-cols-[1fr_auto] gap-8 min-[1101px]:gap-12 items-start">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Heading */}
          
          {/* Description */}
          <p className="text-[24px] min-[1101px]:text-[30px] text-justify mb-6 leading-tight">
            Hi, I&apos;m Driss , I am a{" "}
            <span className="text-main-blue">
              dynamic and innovative Visual Designer
            </span>
            , with over <span className="text-main-blue">6 years</span> of
            experience transforming ideas into visually stunning realities.
          </p>

          {/* Body Paragraph */}
          <p className="text-[20px] min-[1101px]:text-[24px] text-justify mb-6 leading-tight">
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

          {/* Download CV Button */}
          <div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-btn-blue px-6 py-2 text-lg text-black transition-transform duration-200 ease-out hover:scale-[1.03]"
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

        {/* Right Column (Image container with size switching) */}
        <div className="shrink-0">
          {/* Tablet Size Image */}
          <div className="block min-[1101px]:hidden">
            <Image
              src="/images/profile/aboutdriss.svg"
              alt="Driss Bourakkadi"
              width={300}
              height={300}
              priority
            />
          </div>
          {/* Desktop Size Image */}
          <div className="hidden min-[1101px]:block">
            <Image
              src="/images/profile/aboutdriss.svg"
              alt="Driss Bourakkadi"
              width={550}
              height={550}
              priority
              style={{
                width: "clamp(380px, calc(380px + (100vw - 1101px) * 0.3407), 500px)",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}