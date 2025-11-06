import Project from "../models/Project";
import { BlurDiv } from "./common/BlurDiv";
interface ProjectItemProps {
  project: Project;
}

export const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <BlurDiv
      className="bg-white dark:bg-transparent 
    rounded-lg py-4 mb-4 max-w-2xl 
    w-full transition-transform duration-300 hover:translate-x-4 "
    >
      <div className="flex justify-between items-center mb-1">
        <span className="font-semibold text-base text-gray-800 dark:text-gray-200">
          {project.title}
        </span>
        <div className="flex gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 flex items-center gap-1 hover:text-black"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          )}
          {project.siteLink && (
            <a
              href={project.siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 flex items-center gap-1 hover:text-black"
            >
              View
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2 text-xs text-gray-400 mt-2">
        {project.techUsed &&
          project.techUsed.map((tech: string, index: number) => (
            <span key={index} className="">
              {tech}
              {index < project.techUsed.length - 1 ? " / " : ""}
            </span>
          ))}
      </div>
    </BlurDiv>
  );
};
