import { posts } from "../data";
export default function getAllCategories() {
  const set = new Set(posts.map((post) => post.category));
  return Array.from(set);
}
