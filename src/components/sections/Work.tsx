import SaogaCard from "@/components/ui/cards/SaogaCard";
import LianovaBioCard from "@/components/ui/cards/LianovaBioCard";
import AminaBennaniCard from "@/components/ui/cards/AminaBennaniCard";
import SkillsMarquee from "@/components/ui/SkillsMarquee";

export default function Work() {
  return (
    <section id="work" className="pb-16 max-w-[1618px] mx-auto">
      <h2 className="text-main-blue text-4xl font-bold mb-8 px-6 min-[1101px]:px-21.5">Work</h2>
      <div className="flex flex-col">
        <SaogaCard />
        <SkillsMarquee />
        <LianovaBioCard />
        <SkillsMarquee />
        <AminaBennaniCard />
        <SkillsMarquee />
      </div>
    </section>
  );
}