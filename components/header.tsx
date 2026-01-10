import Link from "next/link";

export function Header() {
  return (
    <header className="py-8 border-b border-border">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight hover:text-primary transition-colors"
        >
          alex.chen
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
