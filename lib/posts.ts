import { posts } from "@/.velite";

export function getRecentPosts() {
  if (posts.length === 0) return [];

  return [...posts]
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    })
    .slice(0, 3);
}
