import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import SkillsMarquee from "@/components/ui/SkillsMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <Work />
      <SkillsMarquee />
    </>
  );
}