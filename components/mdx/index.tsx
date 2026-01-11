import { cn } from "@/lib/utils";
import { MDXComponents } from "mdx/types";
import { Children, isValidElement, type ReactNode } from "react";
import { codeToHtml } from "shiki";

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

// const code = ({ children }: { children: ReactNode }) => (
//   <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
//     {children}
//   </code>
// );

async function pre({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLPreElement>) {
  // Extract className from the children code tag
  const codeElement = Children.toArray(children).find(
    (child) => isValidElement(child) && child.type === "code"
  ) as React.ReactElement<HTMLPreElement> | undefined;

  const className = codeElement?.props?.className ?? "";
  const isCodeBlock =
    typeof className === "string" && className.startsWith("language-");

  if (isCodeBlock) {
    const lang = className.split(" ")[0]?.split("-")[1] ?? "";

    if (!lang) {
      return <code {...props}>{children}</code>;
    }

    const html = await codeToHtml(String(codeElement?.props.children), {
      lang,
      theme: "vesper",
    });

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  // If not, return the component as is
  return <pre {...props}>{children}</pre>;
}

export const mdxComponents = {
  h2,
  p,
  ul,
  li,
  blockquote,
  pre,
} satisfies MDXComponents;
