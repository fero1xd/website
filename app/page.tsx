import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";

const posts = [
  {
    title: "On Designing with Constraints",
    excerpt:
      "How limitations can lead to more creative and focused design solutions.",
    date: "Dec 2024",
    slug: "designing-with-constraints",
  },
  {
    title: "The Case for Minimalism in UI",
    excerpt:
      "Why stripping away the unnecessary leads to better user experiences.",
    date: "Nov 2024",
    slug: "minimalism-in-ui",
  },
  {
    title: "Building a Personal Design System",
    excerpt:
      "A practical guide to creating reusable components for your projects.",
    date: "Oct 2024",
    slug: "personal-design-system",
  },
  {
    title: "Typography in Digital Spaces",
    excerpt: "Understanding type hierarchy and readability on screens.",
    date: "Sep 2024",
    slug: "typography-digital-spaces",
  },
  {
    title: "The Art of White Space",
    excerpt: "Embracing emptiness to create breathing room in your designs.",
    date: "Aug 2024",
    slug: "art-of-white-space",
  },
  {
    title: "Responsive Design Patterns",
    excerpt:
      "Modern approaches to building layouts that work across all devices.",
    date: "Jul 2024",
    slug: "responsive-design-patterns",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-xl mx-auto w-full px-6 flex-1 flex flex-col">
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
              {posts.slice(0, 4).map((post) => (
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
