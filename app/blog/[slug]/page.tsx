import { posts } from "@/.velite";
import { MDXContent } from "@/components/mdx/content";
import { ArrowLeft } from "geist-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";

export async function generateStaticParams() {
  return [
    ...posts.map(({ slug }) => ({ slug })),
    {
      slug: "__dummy__",
    },
  ];
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata | undefined> {
  const slug = (await params).slug;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.date).toISOString(),
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(
            post.title,
          )}&description=${encodeURIComponent(post.description)}`,
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
  const post = posts.find((item) => item.slug === slug);

  if (!post || slug === "__dummy__") notFound();

  const transitionName = `post-${post.slug.replace(/[^a-z0-9-]/gi, "-")}`;

  return (
    <>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="h-3 w-3" aria-hidden="true" />
        All writing
      </Link>

      <article className="mt-8">
        <header className="max-w-2xl">
          <time
            dateTime={new Date(post.date).toISOString()}
            className="text-sm text-muted-foreground"
          >
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <ViewTransition name={transitionName} default="post-title">
            <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              {post.title}
            </h1>
          </ViewTransition>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          {(post.tags || []).length > 0 ? (
            <ul
              className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground"
              aria-label="Topics"
            >
              {post.tags?.map((tag) => <li key={tag}>#{tag}</li>)}
            </ul>
          ) : null}
        </header>

        <div className="prose mt-10 min-w-full dark:prose-invert prose-headings:scroll-mt-6 prose-h1:text-2xl">
          <MDXContent source={post.raw} />
        </div>
      </article>

      <div className="mt-12 border-t border-border pt-6">
        <Link
          href="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          ← Back to all writing
        </Link>
      </div>
    </>
  );
}
