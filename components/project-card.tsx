import { Project } from "@/lib/projects";

export function ProjectCard({ title, description, year, href, tags }: Project) {
  return (
    <a
      href={href}
      className="group block border-b border-border py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
      target="_blank"
      rel="noopener noreferrer"
    >
      <article>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
            {title}{" "}
            <span
              aria-hidden="true"
              className="inline-block text-muted-foreground transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
            >
              ↗
            </span>
            <span className="sr-only"> (opens on GitHub in a new tab)</span>
          </h3>
          <span className="shrink-0 text-xs text-muted-foreground">{year}</span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {tags.length > 0 ? (
          <ul
            className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground"
            aria-label="Technologies"
          >
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </article>
    </a>
  );
}
