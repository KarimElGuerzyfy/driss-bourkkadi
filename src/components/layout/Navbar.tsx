"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#work", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "mailto:hello@example.com", label: "Email", icon: "/images/socials/email.svg" },
  { href: "https://instagram.com", label: "Instagram", icon: "/images/socials/instagram.svg" },
  { href: "https://facebook.com", label: "Facebook", icon: "/images/socials/facebook.svg" },
  { href: "https://behance.net", label: "Behance", icon: "/images/socials/behance.svg" },
  { href: "https://wa.me/", label: "WhatsApp", icon: "/images/socials/whatsapp.svg" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return href === "/"
      ? pathname === "/"
      : !href.includes("#") && pathname.startsWith(base);
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="relative mx-auto flex h-15.5 max-w-[1618px] items-center justify-between px-6 min-[1101px]:px-21.5">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.svg"
            alt="Driss Bourkkadi"
            width={200}
            height={32}
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-15 font-display text-xl font-bold md:flex lg:gap-20">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isActive(link.href)
                    ? "text-main-blue"
                    : "text-white transition-colors hover:text-main-blue"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex flex-col items-center justify-center gap-1.25 md:hidden"
        >
          {open ? (
            // 3 horizontal small dashes
            <div className="flex flex-col items-center gap-1">
              <span className="h-0.5 w-2 bg-white rounded-sm" />
              <span className="h-0.5 w-2 bg-white rounded-sm" />
              <span className="h-0.5 w-2 bg-white rounded-sm" />
            </div>
          ) : (
            // burger
            <>
              <span className="h-0.5 w-6.5 bg-white" />
              <span className="h-0.5 w-6.5 bg-white" />
              <span className="h-0.5 w-6.5 bg-white" />
            </>
          )}
        </button>
      </nav>

        {/* Mobile fog — hidden when menu is open */}
        {!open && (
        <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-15.5 z-10 h-5 w-full -translate-x-1/2 md:hidden"
            style={{
            background:
                "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(115,209,226,0.55), rgba(115,209,226,0.2) 40%, transparent 70%)",
            }}
        />
        )}

        {/* Desktop fog */}
        <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-15.5 z-10 hidden h-10 w-full -translate-x-1/2 md:block"
        style={{
            background:
            "radial-gradient(ellipse 80% 80% at 50% 0%, rgba(115,209,226,0.55), rgba(115,209,226,0.2) 40%, transparent 70%)",
        }}
        />

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 top-15.5 z-40 flex flex-col bg-black md:hidden">
          {/* Stacked links */}
          <ul className="flex flex-1 flex-col items-center gap-12 pt-12 font-display text-base font-bold">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    isActive(link.href)
                      ? "text-main-blue"
                      : "text-white transition-colors hover:text-main-blue"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social links using SVGs */}
          <div className="flex items-center justify-center gap-4 pb-10">
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
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}