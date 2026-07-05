import Image from "next/image";
import Link from "next/link";

const EMAIL_ADDRESS = "Drissbourkadi@gmail.com";

const socials = [
  { href: `mailto:${EMAIL_ADDRESS}`, icon: "/images/socials/email-black.svg", label: "Email" },
  { href: "#", icon: "/images/socials/insta-black.svg", label: "Instagram" },
  { href: "#", icon: "/images/socials/facebook-black.svg", label: "Facebook" },
  { href: "#", icon: "/images/socials/behance-black.svg", label: "Behance" },
  { href: "#", icon: "/images/socials/Wtspblack.svg", label: "WhatsApp" },
];

const discussPoints = [
  {
    title: "UI/UX Design",
    body: "Crafting seamless user experiences, responsive interfaces, and scalable design systems.",
  },
  {
    title: "Brand Identity",
    body: "Developing impactful visual languages, typography, and cohesive brand assets.",
  },
  {
    title: "Creative Prototyping",
    body: "Turning early concepts into high-fidelity, interactive realities ready for development.",
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1618px] px-[21.5px] pt-[36.5px] pb-[21.5px] min-[810px]:px-[43px] min-[810px]:pt-[73px] min-[810px]:pb-[43px] min-[1101px]:px-[86px] min-[1101px]:pt-[146px] min-[1101px]:pb-[86px] bg-[#1B1A1A]">
      {/* Heading */}
      <h1 className="font-bold leading-none text-main-blue text-[28px] min-[1101px]:text-[40px]">
        Contact
      </h1>

      {/* Sub-heading */}
      <h2 className="mt-6 font-bold leading-none text-[24px] min-[1101px]:text-[36px]">
        Let&apos;s craft your next experience
      </h2>

      {/* Intro copy */}
      <div className="mt-4 font-bold leading-tight text-justify text-[20px] min-[1101px]:text-[28px]">
        <p>
          I am always open to collaborating with ambitious brands, developers,
          and founders. Whether you are looking to redefine your visual identity
          or build intuitive, user-centric digital products, I&apos;d love to
          help bring your vision to life.
        </p>
        <p className="mt-2">Reach out if you want to discuss:</p>
      </div>

      {/* Discussion bullets */}
      <ul className="mt-8 flex flex-col gap-6 font-bold leading-tight text-[20px] min-[1101px]:text-[28px]">
        {discussPoints.map((point) => (
          <li key={point.title} className="flex items-start gap-3">
            <span className="text-main-blue select-none">&middot;</span>
            <p className="text-justify">
              <span className="text-main-blue">{point.title} :</span> {point.body}
            </p>
          </li>
        ))}
      </ul>

      {/* Let's talk */}
      <h2 className="mt-12 font-bold leading-none text-main-blue text-[24px] min-[810px]:text-[28px] min-[1101px]:text-[36px]">
        Let&apos;s talk.
      </h2>

      {/* Email button */}
      <Link
        href={`mailto:${EMAIL_ADDRESS}`}
        className="mt-3 inline-flex items-center gap-2 rounded-[10px] border border-transparent bg-black px-6 py-2 font-bold transition-transform hover:scale-[1.03] text-[20px] min-[810px]:text-[24px] min-[1101px]:text-[28px] [background:linear-gradient(#000,#000)_padding-box,linear-gradient(to_right,#7DD1E4,#4D00FF)_border-box]"
      >
        <Image
          src="/images/socials/email0border.svg"
          alt=""
          width={24}
          height={24}
          className="shrink-0 w-5 min-[810px]:w-[22px] min-[1101px]:w-6 h-auto"
        />
        {EMAIL_ADDRESS}
      </Link>

      {/* Social icons */}
      <div className="mt-6 flex gap-4">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            aria-label={social.label}
            className="inline-flex shrink-0 transition-transform hover:scale-[1.03]"
          >
            <Image
              src={social.icon}
              alt=""
              width={48}
              height={48}
              className="shrink-0 w-5 min-[810px]:w-[27px] min-[1101px]:w-12 h-auto"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}