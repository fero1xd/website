import { BlogCard } from "@/components/blog-card";
import { recentPosts } from "@/lib/posts";
import { posts } from "@/.velite";
import Link from "next/link";

export function RecentWritingSection() {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16" aria-labelledby="recent-writing-heading">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="recent-writing-heading" className="text-sm text-muted-foreground">
          Recent writing
        </h2>
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          All writing <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mt-3 border-t border-border">
        {recentPosts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </section>
  );
}
