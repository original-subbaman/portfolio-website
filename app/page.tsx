import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { WorkExperience } from "@/components/WorkExperince";
import { Navbar } from "@/components/Navbar";
import CertificationSection from "@/components/sections/CertificationSection";

const Divider = () => (
  <hr className="border-t border-gray-300 my-2 px-16 mx-auto" />
);

export default function Home() {
  return (
    <main className="font-SourceCodePro bg-white min-h-screen w-full py-4">
      <Navbar />
      <div className="flex flex-col container max-w-2xl mx-auto py-10 gap-8">
        <WelcomeSection />

        <Divider />

        <SkillSection />

        <Divider />

        <WorkExperience />

        <Divider />

        <ProjectSection />

        <Divider />

        <CertificationSection />

        <Divider />

        <EducationSection />

        <Divider />
      </div>
      <footer className="container max-w-2xl flex justify-between px-16 mx-auto pb-4 ">
        <p className="text-xs text-gray-500">Straight out of Sikkim ❤️</p>
        <p className="text-xs text-gray-500">
          Built with Next.js & <br /> Tailwind CSS & Framer Motion
        </p>
      </footer>
    </main>
  );
}
