import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from ".";

export const MDXContent = ({ source }: { source: string }) => {
  return (
    <MDXRemote
      source={source}
      components={{
        ...mdxComponents,
        pre: mdxComponents.pre,
        blockquote: mdxComponents.blockquote,
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          format: "mdx",
        },
      }}
    />
  );
};
