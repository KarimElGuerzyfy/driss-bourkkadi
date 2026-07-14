"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyNav from "@/components/layout/CaseStudyNav";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/work/");

  return (
    <>
      {isCaseStudy ? <CaseStudyNav /> : <Navbar />}
      <main>{children}</main>
      <Footer />
    </>
  );
}