const learningSkills = [
  { label: "OpenGL", href: "https://www.opengl.org/" },
  { label: "Effect.ts", href: "https://effect.website/" },
  { label: "Linux + Hyprland", href: "https://hyprland.org/" },
];

const knownSkills = [
  { label: "TypeScript", href: "https://www.typescriptlang.org/" },
  { label: "React", href: "https://react.dev/" },
  { label: "Next.js", href: "https://nextjs.org/" },
  {
    label: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
];

export function SkillsSection() {
  return (
    <section className="mt-16">
      <h2 className="text-sm text-muted-foreground tracking-wider">
        SKILLS — <span className="text-primary">learning</span> /{" "}
        <span className="normal-case">known</span>
      </h2>
      <div className="mt-5 flex flex-wrap gap-2">
        {learningSkills.map(({ label, href }) => (
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
        {knownSkills.map(({ label, href }) => (
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
