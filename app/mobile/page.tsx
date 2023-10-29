"use client";
import { DownloadLogo } from "@/components/DownloadLogo";
import { FirebaseLogo } from "@/components/FirebaseLogo";
import { FlutterLogo } from "@/components/FlutterLogo";
import { GitHubLogo } from "@/components/GiitHubLogo";
import { MobileMockUp } from "@/components/MobileMockUp";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

export default function MobileProjectDisplayPage() {
  const searchParams = useSearchParams();
  const techUsed = searchParams.get("techUsed")!.split(",");

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 h-screen">
      <a href="#" className="rounded-full bg-white">
        &#8249; Previous
      </a>
      <div className="mt-96 md:mt-0">
        <MobileMockUp imgLink={searchParams.get("imgLink")!} />
      </div>
      <div className="flex flex-col flex-start h-screen py-8">
        <h1 className="font-semibold text-blue-500 text-4xl ">
          {searchParams.get("title")}
        </h1>
        <div className="flex my-4 gap-2">
          <a href={searchParams.get("githubLink")!} target="_blank">
            <GitHubLogo />
          </a>
          <a href={searchParams.get("apkLink")!} target="_blank">
            <DownloadLogo />
          </a>
        </div>
        <div>
          <h3 className="text-wite text-lg font-semibold">Technologies Used</h3>
          <div className="flex mb-4 mt-2">
            <FlutterLogo isUsed={techUsed.includes("Flutter")} />
            <FirebaseLogo isUsed={techUsed.includes("Firebase")} />
          </div>

          <p className="text-white text-md font-sm max-w-sm">
            {searchParams.get("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
