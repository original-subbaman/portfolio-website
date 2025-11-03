"use client";

import { projectList } from "@/constants/project_list";
import Project from "@/models/Project";
import { SectionWrapper } from "../common/SectionWrapper";
import { ProjectItem } from "../ProjectItem";

export const ProjectSection = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div>
        {projectList.map((project: Project, index: number) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};
