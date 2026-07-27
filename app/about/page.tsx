import { skills } from "@/lib/skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Pranjal Butola, a backend-focused computer science student in Uttarakhand, India.",
  openGraph: {
    title: "About · Pranjal Butola",
    description:
      "About Pranjal Butola, a backend-focused computer science student in Uttarakhand, India.",
    type: "website",
    images: ["/api/og?title=About&description=Pranjal%20Butola"],
  },
};

export default function AboutPage() {
  const exploring = skills.filter((skill) => skill.learning);
  const using = skills.filter((skill) => !skill.learning);

  return (
    <>
      <header className="max-w-2xl">
        <p className="text-sm text-muted-foreground">About</p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight">
          A little context about me.
        </h1>
      </header>

      <section className="mt-8 max-w-2xl space-y-5 leading-relaxed text-muted-foreground">
        <p>
          I’m Pranjal Butola, a computer science student based in Uttarakhand,
          India. I started programming during the COVID lockdown and have been
          following technical rabbit holes ever since.
        </p>
        <p>
          I’m most interested in backend engineering, infrastructure, and how
          software behaves below the abstractions. Most of my experience comes
          from self-directed projects, reading documentation, and rebuilding
          things until I understand them.
        </p>
        <p>
          Away from code, I play competitive games, watch anime, and write about
          both technical and non-technical things that hold my attention.
        </p>
      </section>

      <section className="mt-12" aria-labelledby="snapshot-heading">
        <h2 id="snapshot-heading" className="text-sm text-muted-foreground">
          At a glance
        </h2>
        <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
          <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-muted-foreground">Based in</dt>
            <dd>Uttarakhand, India</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-muted-foreground">Focused on</dt>
            <dd>Backend systems and infrastructure</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-muted-foreground">Open to</dt>
            <dd>Internships, early-career roles, and open-source collaboration</dd>
          </div>
        </dl>
      </section>

      <section className="mt-12" aria-labelledby="toolbox-heading">
        <h2 id="toolbox-heading" className="text-sm text-muted-foreground">
          Toolbox
        </h2>
        <div className="mt-4 grid gap-5 text-sm sm:grid-cols-[9rem_1fr] sm:gap-6">
          <p className="text-muted-foreground">Using</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {using.map(({ label }) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">Exploring</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {exploring.map(({ label }) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 border-t border-border pt-8">
        <h2 className="text-xl font-medium tracking-tight">Let’s talk.</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
          If you’re hiring, collaborating on something interesting, or simply
          want to compare notes,{" "}
          <a
            href="mailto:pranjalbutola12@gmail.com"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            send me an email
          </a>{" "}
          or find me on{" "}
          <a
            href="https://github.com/fero1xd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>
          .
        </p>
      </section>
    </>
  );
}
