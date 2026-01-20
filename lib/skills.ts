export type Skill = {
  label: string;
  href: string;
  learning?: boolean;
};

export const skills: Skill[] = [
  { label: "OpenGL", href: "https://www.opengl.org/", learning: true },
  { label: "Effect.ts", href: "https://effect.website/", learning: true },
  { label: "Linux + Hyprland", href: "https://hyprland.org/", learning: true },

  { label: "TypeScript", href: "https://www.typescriptlang.org/" },
  { label: "React", href: "https://react.dev/" },
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "Go", href: "https://go.dev/" },
  { label: "Zig", href: "https://ziglang.org/", learning: true },
  { label: "Java", href: "https://www.oracle.com/java/" },
  {
    label: "Jujutsu",
    href: "https://github.com/martinvonz/jj",
    learning: true,
  },
  { label: "Docker", href: "https://www.docker.com/" },
  { label: "AWS", href: "https://aws.amazon.com/" },
  {
    label: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
];
