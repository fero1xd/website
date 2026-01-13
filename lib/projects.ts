export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: number;
  href: string;
};
export const projects: Project[] = [
  {
    title: "Minimal Design System",
    description:
      "A comprehensive design system built for scalability and consistency across products.",
    year: 2024,
    href: "#",
    tags: ["React", "TypeScript", "Storybook", "Figma"],
  },
  {
    title: "Focus — Productivity App",
    description:
      "A distraction-free writing and task management application for creative professionals.",
    year: 2024,
    href: "#",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
  },
  {
    title: "Drift Music Player",
    description:
      "A minimal music streaming interface with gesture-based controls and ambient visuals.",
    year: 2023,
    href: "#",
    tags: ["React", "Web Audio API", "Framer Motion"],
  },
];
