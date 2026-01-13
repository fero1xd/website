import { Project } from "@/lib/projects";
import Link from "next/link";

export function ProjectCard({ title, description, year, href, tags }: Project) {
  return (
    <Link href={href} className="group block py-6 border-b border-border">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-base font-medium group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm border border-border rounded-full text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-sm text-muted-foreground font-mono shrink-0">
          {year}
        </span>
      </div>
    </Link>
  );
}
