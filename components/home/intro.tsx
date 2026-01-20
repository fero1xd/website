import Link from "next/link";
import { LogoGithub, LogoTwitterX } from "geist-icons";
export function IntroSection() {
  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight">
        Hi, I am <span className="text-primary">Pranjal!</span>
      </h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        I am a 19 year old Computer Science enthusiast from India, currently
        focused on backend engineering, but I enjoy exploring other technologies
        as well. I also enjoy writing blog posts about what I'm learning along
        the way.
      </p>
      <div className="w-max flex items-start justify-center mt-4 gap-4">
        <Link
          href="https://github.com/fero1xd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub Profile"
        >
          <LogoGithub size={18} />
        </Link>
        <Link
          href="https://x.com/pranjal_fxd_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Twitter Profile"
        >
          <LogoTwitterX size={18} />
        </Link>
      </div>
    </section>
  );
}
