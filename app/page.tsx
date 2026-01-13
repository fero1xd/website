import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { IntroSection } from "@/components/home/intro";
import { SkillsSection } from "@/components/home/skills";
import { RecentWritingSection } from "@/components/home/recent-writing";
import { RecentProjectsSection } from "@/components/home/recent-projects";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <IntroSection />
          <SkillsSection />
          <RecentWritingSection />
          <RecentProjectsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
