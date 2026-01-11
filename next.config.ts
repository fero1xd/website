import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
};

const withMdx = createMdx({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [require.resolve("./plugins/rehype.js")],
  },
});

export default withMdx(nextConfig);
