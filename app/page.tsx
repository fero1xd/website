import { IntroSection } from "@/components/home/intro";
import { RecentProjectsSection } from "@/components/home/recent-projects";
import { RecentWritingSection } from "@/components/home/recent-writing";

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <RecentWritingSection />
      <RecentProjectsSection />
    </>
  );
}
