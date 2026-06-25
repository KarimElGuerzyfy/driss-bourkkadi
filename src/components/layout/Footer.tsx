import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Driss Bourkkadi. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}