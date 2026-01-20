import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export function RecentProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-sm text-muted-foreground uppercase tracking-wider">
        Recent Projects
      </h2>
      <div className="mt-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      {projects.length > 3 ? (
        <Link
          href="/projects"
          className="inline-block mt-6 text-sm text-primary hover:underline underline-offset-4"
        >
          View all projects →
        </Link>
      ) : null}
    </section>
  );
}
