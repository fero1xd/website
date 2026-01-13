import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { posts } from "@/.velite";
import { getRecentPosts } from "@/lib/posts";

export function RecentWritingSection() {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <h2 className="text-sm text-muted-foreground uppercase tracking-wider">
        Recent Writing
      </h2>
      <div className="mt-6">
        {getRecentPosts().map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
      <Link
        href="/blog"
        className="inline-block mt-6 text-sm text-primary hover:underline underline-offset-4"
      >
        View all posts →
      </Link>
    </section>
  );
}
