import { skills } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-muted-foreground tracking-wider">
        SKILLS — <span className="text-primary">learning</span> /{" "}
        <span className="normal-case">known</span>
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {skills
          .filter((skill) => skill.learning)
          .map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm border border-primary/50 rounded-full text-primary hover:bg-primary/10 transition"
            >
              {label}
            </a>
          ))}
        {skills
          .filter((skill) => !skill.learning)
          .map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-sm border border-border rounded-full text-foreground hover:bg-muted transition"
            >
              {label}
            </a>
          ))}
      </div>
    </section>
  );
}
