import type { Posts } from "@/.velite";
import Link from "next/link";
import { ViewTransition } from "react";

export function BlogCard({ title, description, date, slug, tags }: Posts) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block py-6 border-b border-border"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
            <h3 className="text-base font-medium group-hover:text-primary transition-colors">
              {title}
            </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {(tags || []).length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags?.map((tag) => (
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

          <time className="text-sm text-muted-foreground font-mono shrink-0">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
      </div>
    </Link>
  );
}
