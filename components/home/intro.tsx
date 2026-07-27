import Link from "next/link";

export function IntroSection() {
  return (
    <section aria-labelledby="intro-heading">
      <p className="text-sm text-muted-foreground">
        Computer science student · Backend engineering
      </p>
      <h1
        id="intro-heading"
        className="mt-4 max-w-xl text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-foreground sm:text-4xl"
      >
        Hi, I’m Pranjal, a computer science student focused on{" "}
        <span className="text-primary">backend engineering</span>.
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
        Based in Uttarakhand, India, I’m currently exploring backend systems,
        infrastructure, and lower-level programming through small, practical
        projects.
      </p>
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        <Link
          href="/blog"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Read my writing <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/projects"
          className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          See what I’m building <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
