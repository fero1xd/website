import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { posts } from "@/.velite";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <section>
            <h1 className="text-2xl font-bold tracking-tight">
              Hi, I am <span className="text-primary">Pranjal!</span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              I craft digital experiences with a focus on simplicity and
              clarity. Currently building products at{" "}
              <span className="text-primary">Studio</span>.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-sm text-muted-foreground uppercase tracking-wider">
              Recent Writing
            </h2>
            <div className="mt-6">
              {posts.slice(0, 3).map((post) => (
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
        </main>

        <Footer />
      </div>
    </div>
  );
}
