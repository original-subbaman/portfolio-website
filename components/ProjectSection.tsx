"use client";

import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { projectList } from "@/constants/project_list";
import { ProjectType } from "@/constants/project_type";
import Project from "@/models/Project";
export const ProjectSection = () => {
  const [projectType, setProject] = useState(ProjectType.Android);
  /**
   * Depending on the 'projectType' state, the currentProjectList
   * will contain only the projects of type 'projectType' from the
   * total list of projects in the constants/project_list.ts file
   */
  const currentProjectList = projectList.filter(
    (project) => project.type === projectType
  );

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center h-screen px-16 gap-8 snap-center"
      id="projects"
    >
      <h1 className="text-4xl mb-4 font-semibold md:hidden text-center">
        Projects
      </h1>
      <div
        className="flex flex-row md:flex-col items-center justify-center gap-16 mt-4 p-2
      max-w-xs px-8 bg-[#E94560] rounded-lg drop-shadow-solid border border-black border-t-2 border-l-2 border-r-4 border-b-4"
      >
        <button
          className={`hover:border-b-2 hover:text-white md:mt-4 ${
            projectType === ProjectType.Android
              ? "border-b-2 text-white"
              : "text-slate-900"
          }`}
          onClick={() => setProject(ProjectType.Android)}
        >
          Android
        </button>
        <button
          className={`hover:border-b-2 hover:text-white ${
            projectType === ProjectType.Flutter
              ? "border-b-2 text-white"
              : "text-slate-900"
          }`}
          onClick={() => setProject(ProjectType.Flutter)}
        >
          Flutter
        </button>
        <button
          className="text-slate-900 hover:border-b-2 hover:text-white md:mb-4"
          onClick={() => setProject(ProjectType.Web)}
        >
          Web
        </button>
      </div>
      <div className="relative w-[100%] md:w-[80%] h-[60%] mt-4 md:my-4 p  ">
        <h1 className="text-4xl mb-4 font-semibold hidden md:block text-center">
          Projects
        </h1>
        <div
          className="relative h-full w-full rounded-lg bg-[#2C74B3] 
        overflow-auto 
        hover:overflow-scrool 
        overflow-x-hidden
        drop-shadow-solid border border-zinc-950 border-t-2 border-l-2 border-r-4 border-b-4"
        >
          {currentProjectList.map((project: Project, index: number) => (
            <ProjectItem
              key={index}
              project={project}
              path={
                projectType === ProjectType.Android ||
                projectType === ProjectType.Flutter
                  ? "/mobile"
                  : "/web"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
