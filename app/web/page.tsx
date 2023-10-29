"use client";
import { DesktopMockUp } from "@/components/DesktopMockUp";
import { GitHubLogo } from "@/components/GiitHubLogo";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function MobileProjectPage() {
  const searchParams = useSearchParams();
  const techUsed = searchParams.get("techUsed")!.split(",");

  return (
    <div className="flex flex-col md:flex-row justify-center gap-12 h-full">
      <div className="">
        <DesktopMockUp imgLink={searchParams.get("imgLink")!} />
      </div>
      <div className="flex flex-col h-full p-8 md:mt-8">
        <h1 className="font-semibold text-blue-500 text-4xl ">
          {searchParams.get("title")}
        </h1>
        <div className="flex my-4 gap-2">
          <GitHubLogo />
        </div>
        <div>
          <h3 className="text-wite text-lg font-semibold">Technologies Used</h3>
          <div className="flex mb-4 mt-2">Tech Used</div>
            as;dlfkjasd;flkj

          <p className="text-white text-md font-sm max-w-sm">
            asdfasdfasdf
            {searchParams.get("description")}
          </p>
        </div>
      </div>
    </div>
  );
}
