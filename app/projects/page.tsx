import { EmptyState } from "@/components/empty-state";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects and experiments in backend, systems, and developer tooling.",
  openGraph: {
    title: "Work · Pranjal Butola",
    description:
      "Selected projects and experiments in backend, systems, and developer tooling.",
    type: "website",
    images: [
      `/api/og?title=Work&description=${encodeURIComponent(
        "Selected projects and experiments in backend, systems, and developer tooling.",
      )}`,
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="max-w-2xl">
        <p className="text-sm text-muted-foreground">Work</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight">
          Things I’m building.
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Small tools and experiments that help me understand systems by making
          them.
        </p>
      </header>

      <section
        className="mt-10 border-t border-border"
        aria-label="Selected projects"
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))
        ) : (
          <EmptyState
            title="No public projects yet"
            description="Current experiments are still being prepared for release."
          />
        )}
      </section>
    </>
  );
}
