import { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

// Reusable MDX-style components
const h2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-xl font-bold tracking-tight mt-8 mb-4">{children}</h2>
);

const p = ({ children }: { children: ReactNode }) => (
  <p className="text-muted-foreground leading-relaxed mb-6">{children}</p>
);

const ul = ({ children }: { children: ReactNode }) => (
  <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
    {children}
  </ul>
);

const li = ({ children }: { children: ReactNode }) => (
  <li className="leading-relaxed">{children}</li>
);

const blockquote = ({ children }: { children: ReactNode }) => (
  <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground mb-6">
    {children}
  </blockquote>
);

const code = ({ children }: { children: ReactNode }) => (
  <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
    {children}
  </code>
);

const pre = ({ children }: { children: string }) => (
  <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-6 text-sm">
    <code>{children}</code>
  </pre>
);

export const mdxComponents = {
  h2,
  p,
  ul,
  li,
  blockquote,
  code,
  pre,
} satisfies MDXComponents;
