import type { Posts } from "@/.velite";
import Link from "next/link";
import { ViewTransition } from "react";

export function BlogCard({ title, description, date, slug }: Posts) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block py-6 border-b border-border"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <ViewTransition name={`title-${slug}`}>
            <h3 className="text-base font-medium group-hover:text-primary transition-colors">
              {title}
            </h3>
          </ViewTransition>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        <ViewTransition name={`time-${slug}`}>
          <time className="text-sm text-muted-foreground font-mono shrink-0">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </ViewTransition>
      </div>
    </Link>
  );
}
