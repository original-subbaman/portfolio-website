"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
const ExperienceHistory = [
  {
    id: 1,
    title: "Java Developer Intern",
    company: "Reyan Consultancy Services",
    description:
      "Built an employee tracker application with the agent built in Python, web app front end in React and backend in Node/Express",
    date: "November 2023 - April 2024",
  },
  {
    id: 2,
    title: "Flutter Developer",
    company: "ByteRays",
    description: "Worked on building the UI for a hotel booking app",
    date: "March 2022 - May 2022",
  },
];
export const WorkExperience = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen snap-center">
      <h1 className="text-4xl">Work Experience</h1>
      <div className="mt-20 w-full">
        <VerticalTimeline lineColor="#fff" animate={true}>
          {ExperienceHistory.map((element) => (
            <ExperienceCard
              key={element.id}
              role={element.title}
              description={element.description}
              company={element.company}
              date={element.date}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};
