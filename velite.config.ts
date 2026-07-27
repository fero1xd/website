import { defineConfig, defineSchema, s } from "velite";

const slug = defineSchema(() =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === "string")
    .transform<string>(async (_value, { meta }) => {
      const filename = meta.path.replaceAll("\\", "/").split("/").pop()!;
      return filename.replace(/\.(md|mdx)$/, "");
    }),
);

export default defineConfig({
  collections: {
    posts: {
      name: "Posts",
      pattern: "*.mdx", // content files glob pattern
      schema: s.object({
        title: s.string().max(99), // Zod primitive type
        description: s.string(),

        raw: s.raw(),
        date: s.isodate(),
        slug: slug(),

        tags: s.array(s.string()).optional(),
      }),
    },
  },
});
