"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { SectionWrapper } from "./common/SectionWrapper";
const ExperienceHistory = [
  {
    id: 2,
    title: "Junior Software Developer",
    company: "Reyan Consultancy Services",
    description:
      "Built an employee tracker application with the agent built in Python, web app front end in React and backend in Node/Express",
    date: "June 2024 - Present",
    location: "Remote",
    technologies: ["React", "Node.js", "Express", "MySQL", "Python"],
  },
  {
    id: 1,
    title: "Java Developer Intern",
    company: "Reyan Consultancy Services",
    description:
      "Built an employee tracker application with the agent built in Python, web app front end in React and backend in Node/Express",
    date: "November 2023 - June 2024",
    location: "Remote",
    technologies: ["React", "Node.js", "Express", "MySQL", "Python"],
  },
  {
    id: 0,
    title: "Flutter Developer",
    company: "ByteRays",
    description: "Worked on building the UI for a hotel booking app",
    date: "March 2022 - May 2022",
    location: "Remote",
    technologies: ["Flutter", "Dart"],
  },
];
export const WorkExperience = () => {
  return (
    <SectionWrapper title="Work Experience">
      {ExperienceHistory.map((element) => (
        <ExperienceCard
          key={element.id}
          role={element.title}
          description={element.description}
          company={element.company}
          date={element.date}
          location={element.location}
          technologies={element.technologies}
        />
      ))}
    </SectionWrapper>
  );
};
