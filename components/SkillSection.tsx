import { SkillPebble } from "./SkillPebble";

export const SkillSection = () => {
  const skillList = [
    "Java",
    "Android",
    "Kotlin",
    "Flutter",
    "React",
    "HTML/CSS",
    "Tailwind",
    "SpringBoot",
    "Next.js",
  ];
  return (
    <section
      className="flex items-center justify-center h-screen snap-center"
      id="skills"
    >
      <div>
        <h1 className="text-4xl mb-16 font-semibold md:block text-center">
          Skills
        </h1>
        <div className="flex gap-2 flex-wrap justify-center text-lg md:w-[53rem]">
          {skillList.map((val: string, key: number) => {
            return <SkillPebble skill={val} key={key} />;
          })}
        </div>
      </div>
    </section>
  );
};
