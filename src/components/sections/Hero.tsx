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
  return (
    // CONTROLS: Dynamic viewport computation prevents layout overflows caused by the navbar frame height
    <section className="bg-black px-6 pt-12 pb-21.5 min-[1101px]:px-21.5 min-h-[calc(100vh-62px)] min-[810px]:max-[1100px]:min-h-[700px] min-[810px]:max-[1100px]:h-[700px] grid grid-cols-1 min-[810px]:grid-cols-2 items-start min-[1101px]:items-end min-[1101px]:pb-20 max-w-[1618px] mx-auto">

      {/* LEFT COLUMN — title + paragraph + mobile photo */}
      <div className="w-full lg:max-w-2xl flex flex-col justify-end order-1 min-[810px]:col-start-1 min-[810px]:row-start-1 min-[810px]:self-start min-[1101px]:self-end">

        {/* 1. Title + Paragraph */}
        <div>
          <h1 className="font-extrabold leading-[0.8] text-[24px] md:text-[clamp(2.75rem,4.5vw,4rem)] max-[1100px]:text-[32px] max-[419px]:text-[24px]">
            <span className="block text-white">Driss Bourakkadi</span>
            <span className="block text-main-blue">Visual Design Specialist</span>
          </h1>
          <p className="max-w-2xl font-semibold text-[24px] max-[419px]:text-[20px] text-white leading-none mt-12 lg:mt-14 min-[1101px]:text-[clamp(1.5rem,2.2vw,2rem)]">
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
            className="mx-auto h-auto w-full max-w-[400px]"
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
          className="h-auto w-full min-w-[320px] max-w-[320px] min-[1101px]:min-w-[400px] min-[1101px]:max-w-[568px] block min-[1101px]:translate-y-12 min-[1101px]:-mr-[30px] min-[1101px]:max-[1400px]:mb-25 min-[1101px]:max-[1260px]:mb-35"
        />
      </div>

      {/* BOTTOM CONTAINER — buttons + stats, left-aligned, fixed width */}
      <div className="w-full lg:max-w-2xl mt-8 order-3 min-[810px]:col-start-1 min-[810px]:row-start-2 min-[810px]:self-start min-[1101px]:self-end">

        {/* 3. Buttons */}
        <div className="flex flex-col gap-2 min-[810px]:flex-row">
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-btn-blue px-6 py-2 text-lg font-bold text-black transition-transform duration-200 ease-out hover:scale-[1.03]"
          >
            About Me
            <Image src="/icons/arrow.svg" alt="" width={16} height={16} />
          </Link>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-btn-blue bg-transparent px-6 py-2 text-lg font-bold text-btn-blue transition-transform duration-200 ease-out hover:scale-[1.03]"
          >
            Download CV
            <Image src="/icons/download-arrow.svg" alt="" width={16} height={16} />
          </a>
        </div>

        {/* 4. Stats */}
        <div className="mt-3 flex flex-col gap-2 min-[810px]:flex-row">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-btn-blue px-4 py-2"
            >
              <p className="text-[24px] font-bold text-white whitespace-nowrap leading-none">{stat.value}</p>
              <p className="text-[16px] font-bold text-white whitespace-nowrap">
                <span className="text-main-blue">|</span> {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}