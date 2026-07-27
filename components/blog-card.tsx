import type { Posts } from "@/.velite";
import Link from "next/link";
import { ViewTransition } from "react";

export function BlogCard({ title, description, date, slug, tags }: Posts) {
  const transitionName = `post-${slug.replace(/[^a-z0-9-]/gi, "-")}`;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block border-b border-border py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring"
    >
      <article>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <ViewTransition name={transitionName} default="post-title">
            <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
          </ViewTransition>
          <time
            dateTime={new Date(date).toISOString()}
            className="shrink-0 text-xs text-muted-foreground"
          >
            {new Date(date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {(tags || []).length > 0 ? (
          <ul
            className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground"
            aria-label="Topics"
          >
            {tags?.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        ) : null}
      </article>
    </Link>
  );
}
