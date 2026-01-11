import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";

const projects = [
  {
    title: "Minimal Design System",
    description:
      "A comprehensive design system built for scalability and consistency across products.",
    year: "2024",
    href: "#",
  },
  {
    title: "Focus — Productivity App",
    description:
      "A distraction-free writing and task management application for creative professionals.",
    year: "2024",
    href: "#",
  },
  {
    title: "Drift Music Player",
    description:
      "A minimal music streaming interface with gesture-based controls and ambient visuals.",
    year: "2023",
    href: "#",
  },
  {
    title: "Archetype Portfolio Theme",
    description:
      "An open-source portfolio template for designers and developers.",
    year: "2023",
    href: "#",
  },
  {
    title: "Clarity Notes App",
    description:
      "A markdown-based note-taking app with cloud sync and offline support.",
    year: "2023",
    href: "#",
  },
  {
    title: "Wave Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets and data visualization.",
    year: "2022",
    href: "#",
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              Work
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A collection of projects spanning design systems, applications,
              and open-source contributions.
            </p>
          </section>

          <section className="mt-12">
            <div>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
