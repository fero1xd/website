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
      "A simple utf-8 parser written in C that parses unicode codepoints",
    tags: ["Misc", "C"],
    year: 2026,
    href: `${baseUrl}/utf8-parser`,
  },
];
