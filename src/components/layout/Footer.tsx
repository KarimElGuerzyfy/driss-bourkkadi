import Image from "next/image";

const socials = [
  { href: "mailto:hello@example.com", label: "Email", icon: "/images/socials/email.svg" },
  { href: "https://instagram.com", label: "Instagram", icon: "/images/socials/instagram.svg" },
  { href: "https://facebook.com", label: "Facebook", icon: "/images/socials/facebook.svg" },
  { href: "https://behance.net", label: "Behance", icon: "/images/socials/behance.svg" },
  { href: "https://wa.me/", label: "WhatsApp", icon: "/images/socials/whatsapp.svg" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg w-full">
      <div className="max-w-[1618px] mx-auto px-6 min-[1101px]:px-21.5 py-24 flex flex-col items-center">

        {/* Logo */}
        <Image
          src="/images/logo-footer.svg"
          alt="Driss Bourakkadi"
          width={116}
          height={116}
          className="w-[80px] md:w-[116px]"
        />

        {/* Tagline */}
        <p className="text-white text-[27px] md:text-4xl font-bold text-center leading-none mt-6">
          Thanks for taking a look.
        </p>
        <p className="text-main-blue font-bold text-[21px] md:text-[28px] text-center leading-none">
          © 2026 Driss Bourakkadi
        </p>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="transition-opacity hover:opacity-75"
            >
              <Image
                src={s.icon}
                alt={s.label}
                width={30}
                height={30}
                className="w-[36px] md:w-[30px]"
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}