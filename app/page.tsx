import { EducationSection } from "@/components/EducationSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillSection } from "@/components/SkillSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { WorkExperience } from "@/components/WorkExperince";

const Divider = () => (
  <hr className="border-t border-gray-300 my-2 px-16 mx-auto" />
);

export default function Home() {
  return (
    <main className="font-SourceCodePro bg-white min-h-screen w-full">
      {/* <Navbar /> */}
      <div className="flex flex-col container max-w-2xl mx-auto py-10 gap-8">
        <WelcomeSection />

        <Divider />

        <SkillSection />

        <Divider />

        <WorkExperience />

        <Divider />

        <ProjectSection />

        <Divider />

        <EducationSection />
      </div>
    </main>
  );
}
