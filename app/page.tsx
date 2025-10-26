import { SkillSection } from "@/components/SkillSection";
import { WelcomeSection } from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main className="font-SourceCodePro bg-white min-h-screen w-full">
      {/* <Navbar /> */}
      <div className="flex flex-col container max-w-2xl mx-auto py-10 gap-8">
        <WelcomeSection />
        <SkillSection />
      </div>
    </main>
  );
}
