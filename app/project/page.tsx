"use client";
import { DownloadLogo } from "@/components/DownloadLogo";
import { FirebaseLogo } from "@/components/FirebaseLogo";
import { FlutterLogo } from "@/components/FlutterLogo";
import { GitHubLogo } from "@/components/GiitHubLogo";
import { MobileMockUp } from "@/components/MobileMockUp";
import { ProjectType } from "@/constants/project_type";
import { DesktopMockUp } from "@/components/DesktopMockUp";
import { TechType } from "@/constants/tech_type";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {
  const searchParams = useSearchParams();
  const techUsed = searchParams.get("techUsed")!.split(",");
  const type = searchParams.get("type");
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-20 h-screen font-SourceCodePro">
      <button
        onClick={() => router.replace("/#projects")}
        className="rounded-full bg-orange-500 text-white items-center justify-center 
        inline-flex fixed top-0 left-0 m-8 p-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </button>
      {type === ProjectType.Android || type === ProjectType.Flutter ? (
        <MobileMockUp imgLink={searchParams.get("imgLink")!} />
      ) : (
        <DesktopMockUp imgLink={searchParams.get("imgLink")!} />
      )}
      <div className="flex flex-col flex-start h-full py-8">
        <h1 className="font-semibold text-blue-500 text-3xl md:text-4xl">
          {searchParams.get("title")}
        </h1>
        <div className="flex my-4 gap-2">
          <a href={searchParams.get("githubLink")!} target="_blank">
            <GitHubLogo />
          </a>
          {(type === ProjectType.Android || type === ProjectType.Flutter) && (
            <a href={searchParams.get("apkLink")!} target="_blank">
              <DownloadLogo />
            </a>
          )}
          {type === ProjectType.Web && (
            <a
              className="rounded-lg px-4 border border-white hover:text-blue-400 hover:border-blue-400"
              href={searchParams.get("siteLink")!}
              target="_blank"
            >
              Go to site
            </a>
          )}
        </div>
        <div>
          <h3 className="text-wite text-lg font-semibold">Technologies Used</h3>
          <ul className="flex mb-4 mt-2">
            {techUsed.map((tech, index) => (
              <li className="mr-4" key={index}>
                {tech}
              </li>
            ))}
          </ul>
          <p className="text-white text-md font-sm max-w-sm">
            {searchParams.get("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
