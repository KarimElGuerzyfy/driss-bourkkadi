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
    <section className="bg-black px-6 pt-12 pb-21.5 md:px-21.5 min-h-[calc(100vh-62px)] flex items-center lg:items-end lg:pb-20">
      
      <div className="w-full flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        
        {/* LEFT COLUMN CONTAINER */}
        <div className="w-full lg:max-w-2xl flex flex-col justify-end order-1">
          
          {/* 1. Title + Paragraph */}
          <div>
            <h1 className="font-extrabold leading-[0.8] text-[24px] md:text-[64px]">
              <span className="block text-white">Driss Bourakkadi</span>
              <span className="block text-main-blue">Visual Design Specialist</span>
            </h1>

            <p className="max-w-2xl font-semibold text-[24px] text-white md:text-[32px] leading-none mt-12 lg:mt-14">
              Specializing in bridging the gap between high-quality Product
              Photography and digital excellence.
            </p>
          </div>

          {/* 2. Photo — Mobile view only */}
          <div className="mt-8 lg:hidden">
            <Image
              src="/images/profile/hero-photo.svg"
              alt="Driss Bourakkadi - Visual Design Specialist Portfolio Portrait"
              width={568}
              height={545}
              priority
              className="mx-auto h-auto w-full max-w-[400px]"
            />
          </div>

          {/* 3. Buttons */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row lg:mt-21.5">
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
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
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

        {/* RIGHT COLUMN CONTAINER */}
        <div className="hidden lg:flex lg:w-1/2 lg:justify-end order-2">
          <Image
            src="/images/profile/hero-photo.svg"
            alt="Driss Bourakkadi - Visual Design Specialist Portfolio Portrait"
            width={568}
            height={545}
            priority
            className="h-auto w-full max-w-[568px] block lg:translate-y-12"
          />
        </div>

      </div>
    </section>
  );
}