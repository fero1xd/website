import { posts } from "@/.velite";
import { BlogCard } from "@/components/blog-card";
import { EmptyState } from "@/components/empty-state";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on backend engineering, systems, tools, and the occasional non-technical rabbit hole.",
  openGraph: {
    title: "Writing · Pranjal Butola",
    description:
      "Notes on backend engineering, systems, tools, and the occasional non-technical rabbit hole.",
    type: "website",
    images: [
      `/api/og?title=Writing&description=${encodeURIComponent(
        "Notes on backend engineering, systems, tools, and the occasional non-technical rabbit hole.",
      )}`,
    ],
  },
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <header className="max-w-2xl">
        <p className="text-sm text-muted-foreground">Writing</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight">
          Notes from the workbench.
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Technical deep dives, learning notes, and occasional thoughts beyond
          software.
        </p>
      </header>

      <section className="mt-10 border-t border-border" aria-label="All posts">
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => <BlogCard key={post.slug} {...post} />)
        ) : (
          <EmptyState
            title="No writing yet"
            description="The first note is still on the workbench."
          />
        )}
      </section>
    </>
  );
}
