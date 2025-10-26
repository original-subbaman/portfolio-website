"use client";
import { SectionWrapper } from "./common/SectionWrapper";

import { motion } from "framer-motion";

interface SkillListProps {
  skills: string[];
  title: string;
  ulClassName?: string;
}

export const SkillList = ({
  skills,
  title,
  ulClassName = "",
}: SkillListProps) => (
  <div>
    <p className="font-thin mb-2 text-sm text-gray-500">{title}</p>
    <ul className={`${ulClassName} text-sm`}>
      {skills.map((val: string, key: number) => (
        <motion.li
          key={key}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {val}
        </motion.li>
      ))}
    </ul>
  </div>
);

export const SkillSection = () => {
  const frontEndSkills = [
    "React",
    "Tailwind",
    "Next.js",
    "Vue.js",
    "Flutter",
    "Material UI",
  ];

  const backendSkills = ["Node.js", "Express", "MySQL", "MongoDB"];

  const infraSkills = ["AWS", "Supabase"];

  return (
    <SectionWrapper id="skills" title="Skills">
      <SkillList
        skills={frontEndSkills}
        title="Frontend"
        ulClassName="flex justify-between flex-wrap"
      />
      <SkillList
        skills={backendSkills}
        title="Backend"
        ulClassName="flex justify-between flex-wrap"
      />
      <SkillList
        skills={infraSkills}
        title="Infrastructure"
        ulClassName="flex gap-4 flex-wrap"
      />
    </SectionWrapper>
  );
};
