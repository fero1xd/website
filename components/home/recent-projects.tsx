import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import Link from "next/link";

export function RecentProjectsSection() {
  if (projects.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="recent-projects-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2
          id="recent-projects-heading"
          className="text-sm text-muted-foreground"
        >
          Selected work
        </h2>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          All projects <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-3 border-t border-border">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
