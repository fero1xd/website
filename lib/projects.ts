export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: number;
  href: string;
};

const baseUrl = `https://github.com/fero1xd`;

export const projects: Project[] = [
  {
    title: "UTF-8 parser",
    description:
      "A small UTF-8 parser in C that decodes Unicode code points.",
    tags: ["Misc", "C"],
    year: 2026,
    href: `${baseUrl}/utf8-parser`,
  },
];
