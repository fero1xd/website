import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { EmptyState } from "@/components/empty-state";
import { posts } from "@/.velite";

export const metadata: Metadata = {
  title: "Blog",
  description: "My thoughts on tech and stuff.",
  openGraph: {
    title: "Blog · Pranjal Butola",
    description: "My thoughts on tech and stuff.",
    type: "website",
    images: [
      `/api/og?title=Blog&description=${encodeURIComponent("My thoughts on tech and stuff.")}`,
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            {/* Made heading bolder with font-bold */}
            <h1 className="text-2xl font-bold tracking-tight text-primary">
              Blog
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Just writing about whatever I'm into at the moment.
            </p>
          </section>

          <section className="mt-12">
            <div>
              {posts.length > 0 ? (
                posts
                  .sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime(),
                  )
                  .map((post) => <BlogCard key={post.slug} {...post} />)
              ) : (
                <EmptyState
                  title="No blog posts yet"
                  description="Check back soon for thoughts on design and development"
                />
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
