import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Project from "../models/Project";
import { title } from "process";
import { arrayBuffer } from "stream/consumers";
interface ProjectItemProps {
  path: string;
  project: Project;
}

export const ProjectItem = ({ path, project }: ProjectItemProps) => {
  const router = useRouter();

  return (
    <Link
      href={{
        pathname: "/project",
        query: {
          title: project.title,
          type: project.type,
          githubLink: project.githubLink,
          apkLink: project.apkLink,
          siteLink: project.siteLink,
          description: project.description,
          imgLink: project.imgLink,
          techUsed: project.techUsed.toString(),
        },
      }}
    >
      <div
        className="relative 
        flex 
        cursor-pointer
        p-4 gap-4 
        rounded-lg
        hover:bg-white/30 
        hover:rounded-md 
        hover:backdrop-filter 
        hover:bg-opacity-10
        hover:border
        hover:shadow-xl
        hover:border-white/40
        hover:text-[#533483]
        hover:font-bold"
      >
        <div>
          <Image
            src={project.imgLink}
            width={100}
            height={100}
            alt="project home"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-xl mr-2">{project.title}</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
          <p className="text-white font-normal md:truncate w-[200px] sm:w-[800px] overflow-hidden">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
