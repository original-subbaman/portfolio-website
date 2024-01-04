import { Navbar } from "@/components/Navbar";
import { WelcomeSection } from "@/components/WelcomeSection";
import { BioSection } from "@/components/BioSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillSection } from "@/components/SkillSection";
import { GoToTop } from "@/components/GoToTop";
import { WorkExperience } from "@/components/WorkExperince";

export default function Home() {
  return (
    <main className="font-SourceCodePro bg-[#1B2430] h-full snap-mandatory snap-y">
      <Navbar />
      <WelcomeSection />
      <BioSection />
      <WorkExperience />
      <SkillSection />
      <ProjectSection />
      <GoToTop />
    </main>
  );
}
