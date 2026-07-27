const skills = [
  "Visual Design",
  "Corporate Identity",
  "Brand Strategy",
  "Web Design",
  "Print Material",
  "Editorial Design",
  "Strategic Integration of Generative AI",
  "High-Quality Product Photography",
  "Rapid Prototyping & Workflow Automation",
];

const allSkills = [...skills, ...skills, ...skills, ...skills];

export default function SkillsMarquee() {
  return (
    <div
      className="w-full overflow-x-hidden py-12 min-[1101px]:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] min-[1101px]:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)]"
      dir="ltr"
    >
      <div
        className="flex items-center gap-12"
        style={{
          width: "max-content",
          animation: "marquee 50s linear infinite",
        }}
      >
        {allSkills.map((skill, index) => (
          <span
            key={index}
            className="whitespace-nowrap text-base font-bold capitalize text-text-marquee/50 [text-box:trim-both_cap_alphabetic]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}