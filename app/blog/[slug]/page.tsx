import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const posts: Record<string, { title: string; date: string; content: string }> =
  {
    "designing-with-constraints": {
      title: "On Designing with Constraints",
      date: "December 15, 2024",
      content: `Constraints are often seen as limitations, obstacles that prevent us from achieving our creative vision. But in my experience, constraints are actually one of the most powerful tools in a designer's arsenal.

When you're given unlimited freedom, the possibilities become paralyzing. Where do you start? What direction should you take? The blank canvas stretches infinitely in every direction.

But add a constraint—a limited color palette, a specific grid, a tight deadline—and suddenly the path forward becomes clearer. The constraint acts as a filter, eliminating thousands of possibilities and allowing you to focus on the ones that remain.

Some of the most iconic designs in history were born from constraints. The five-color limitation of the original Macintosh led to creative solutions that defined an era of computing. Twitter's 140-character limit forced users to distill their thoughts to their essence.

Next time you feel stuck, try adding a constraint. Limit yourself to two fonts. Design with only black and white. Give yourself an hour instead of a day. You might be surprised at what emerges.`,
    },
    "minimalism-in-ui": {
      title: "The Case for Minimalism in UI",
      date: "November 28, 2024",
      content: `In an age of information overload, minimalism isn't just an aesthetic choice—it's a functional necessity. Every element on screen competes for the user's attention. The more elements you add, the harder each one has to fight to be noticed.

Minimalist UI design isn't about making things look "clean" for its own sake. It's about ruthlessly prioritizing what matters. Every pixel should earn its place. Every interaction should have a purpose.

This doesn't mean interfaces should be boring or lack personality. Some of the most memorable designs are minimalist. They achieve more with less, using negative space, typography, and subtle motion to create experiences that feel both simple and sophisticated.

The goal is clarity. When users look at your interface, they should immediately understand what they can do and how to do it. If they have to think too hard, you've already lost them.

Strip away the unnecessary. What remains will be stronger for it.`,
    },
    "personal-design-system": {
      title: "Building a Personal Design System",
      date: "October 12, 2024",
      content: `A design system isn't just for large teams and enterprise companies. Even as a solo designer or developer, having a personal design system can dramatically improve your workflow and the consistency of your work.

Start small. You don't need dozens of components on day one. Begin with the fundamentals: a type scale, a spacing scale, and a color palette. These three elements will inform everything else you build.

For typography, define a clear hierarchy. I typically use 4-6 sizes that scale harmoniously. For spacing, stick to a consistent base unit (I use 4px or 8px) and derive all other values from it.

Colors are where personality comes in, but resist the urge to use too many. A primary color, a couple of neutrals, and perhaps one accent is usually enough. You can always add more later.

Document as you go. Even simple notes about why you made certain decisions will be invaluable when you revisit the system months later. Your future self will thank you.`,
    },
    "typography-digital-spaces": {
      title: "Typography in Digital Spaces",
      date: "September 5, 2024",
      content: `Typography on screens is fundamentally different from typography on paper. The medium changes everything—how letters are rendered, how they're read, and how they feel.

Line length is crucial. On screens, our eyes tire more quickly. Keep body text between 45-75 characters per line. Much longer and readers lose their place; much shorter and the constant line breaks become jarring.

Line height needs to be more generous than in print. I typically set body text at 1.5-1.7x the font size. This extra breathing room makes long-form reading more comfortable.

Contrast matters, but maximum contrast isn't always best. Pure black text on pure white can be harsh, especially in low-light environments. Consider using a very dark gray instead—it's easier on the eyes while maintaining readability.

Finally, test on real devices. The font that looks perfect on your retina display might fall apart on a lower-resolution screen. Good digital typography works everywhere.`,
    },
  };

export async function generateStaticParams() {
  return Object.keys(posts).map((post) => ({
    slug: post,
  }));
}

export default async function BlogPostPage({
  params,
}: PageProps<'/blog/[slug]'>) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="max-w-xl mx-auto w-full px-6 flex-1 flex flex-col">
          <Header />
          <main className="flex-1 py-16">
            <p className="text-muted-foreground">Post not found.</p>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <article className="mt-8">
            <header>
              <time className="text-sm font-mono text-muted-foreground">
                {post.date}
              </time>
              <h1 className="mt-2 text-2xl font-medium tracking-tight">
                {post.title}
              </h1>
            </header>

            <div className="mt-8 prose prose-neutral">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-muted-foreground leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
