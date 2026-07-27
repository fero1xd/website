"use cache";

export async function Footer() {
  return (
    <footer className="border-t border-border/80 py-8">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pranjal Butola
        </p>
        <div className="flex items-center gap-5" aria-label="Social links">
          <a
            href="https://twitter.com/pranjal_fxd_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            X<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="https://github.com/fero1xd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href="mailto:pranjalbutola12@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
