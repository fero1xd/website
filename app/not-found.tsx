import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        {/* Large 404 with accent color */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary tracking-tighter mb-4">
            404
          </h1>
          <p className="text-xl text-muted-foreground font-mono mb-8">
            page not found.
          </p>
        </div>

        {/* Description */}
        <p className="text-base text-foreground mb-12 leading-relaxed max-w-md mx-auto">
          looks like this route doesn't exist. maybe you took a wrong turn, or
          the page wandered off somewhere.
        </p>

        {/* Navigation links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-md font-mono text-sm"
          >
            go home
          </Link>
          <Link
            href="/blog"
            className="px-6 py-2 text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
          >
            explore blog
          </Link>
        </div>
      </div>
    </div>
  );
}
