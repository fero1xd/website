import { posts } from "@/.velite";
import { MDXContent } from "@/components/mdx/content";

export default async function Page() {
  "use cache";
  const post = posts[0]!;

  return (
    <div className="mt-8 prose dark:prose-invert prose-h1:text-2xl">
      <MDXContent source={post.raw} />
    </div>
  );
}
