"use cache";

export async function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://twitter.com/pranjal_fxd_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            X
          </a>
          <a
            href="https://github.com/fero1xd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:pranjalbutola12@gmail.com"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
