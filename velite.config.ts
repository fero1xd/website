import { stat } from "fs/promises";
import { defineConfig, defineSchema, s } from "velite";

const timestamp = defineSchema(() =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === "string")
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: "custom",
          message:
            "`s.timestamp()` schema will resolve the file modified timestamp",
        });
      }

      const stats = await stat(meta.path);
      return stats.birthtime.toISOString();
    })
);

const slug = defineSchema(() =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === "string")
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: "custom",
          message:
            "`s.timestamp()` schema will resolve the file modified timestamp",
        });
      }

      const filename = meta.path.split("/").pop()!;
      return filename.replace(/\.(md|mdx)$/, "");
    })
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
        date: timestamp(),
        slug: slug(),
      }),
    },
  },
});
