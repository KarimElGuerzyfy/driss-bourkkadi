import Link from "next/link";
import Image from "next/image";

export default function CaseStudyNav() {
  return (
    <header className="sticky top-0 z-50 bg-black h-16">
      <div className="flex items-center justify-between h-16 px-6 min-[810px]:px-10 min-[1101px]:px-21.5 max-w-404.5 mx-auto min-[1101px]:relative min-[1101px]:justify-start">
        <Link
          href="/#work"
          aria-label="Back to work portfolio"
          className="flex items-center gap-1 text-main-blue font-bold text-sm min-[810px]:text-base"
        >
          BACK
          <Image
            src="/icons/left-arrow.svg"
            alt=""
            width={16}
            height={16}
          />      
        </Link>

        <Image
          src="/images/logo.svg"
          alt="Driss Bourakkadi"
          width={164}
          height={32}
          className="min-[1101px]:absolute min-[1101px]:left-1/2 min-[1101px]:-translate-x-1/2"
        />
      </div>
    </header>
  );
}