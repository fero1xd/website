import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-12">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-3 text-3xl font-medium tracking-tight">
        This page doesn’t exist.
      </h1>
      <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
        The link may be outdated, or the page may have moved.
      </p>
      <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <Link
          href="/"
          className="underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Go home
        </Link>
        <Link
          href="/blog"
          className="underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Browse writing
        </Link>
      </div>
    </section>
  );
}
