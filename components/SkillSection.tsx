"use client";
import { motion } from "framer-motion";

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
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      className="flex items-center justify-center h-screen snap-center"
      id="skills"
    >
      <div>
        <h1 className="text-4xl mb-16 font-semibold md:block text-center">
          Skills
        </h1>
        <ul className="flex gap-2 flex-wrap justify-center text-lg md:w-[53rem]">
          {skillList.map((val: string, key: number) => {
            return (
              <motion.li
                className="rounded-3xl border border-white px-8 py-2 text-center"
                key={key}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                custom={key}
                viewport={{ once: true }}
              >
                {val}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
