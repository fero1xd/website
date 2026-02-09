import { posts, posts as rawPosts } from "@/.velite";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MDXContent } from "@/components/mdx/content";
import { ArrowLeft } from "geist-icons";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    ...rawPosts.map(({ slug }) => ({
      slug,
    })),
    {
      slug: "__dummy__",
    },
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata | undefined> {
  const slug = (await params).slug;
  const post = posts.find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const publishedTime = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      publishedTime,
      type: "article",
      images: [
        {
          url: `http://localhost:3000/api/og?title=${post.title}&description=${post.description}`,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  "use cache";
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);

  if (!post || slug === "__dummy__") {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-3xl mx-auto w-full px-6 flex-1 flex flex-col">
        <Header />

        <main className="flex-1 py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to blog
          </Link>
          <article className="mt-8">
            <header>
                <time className="text-sm font-mono text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary">
                  {post.title}
                </h1>
            </header>

            <div className="mt-8 prose dark:prose-invert prose-h1:text-2xl min-w-full">
              <MDXContent source={post.raw} />
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
