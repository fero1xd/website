import createMdx from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMdx = createMdx({});

export default withMdx(nextConfig);
