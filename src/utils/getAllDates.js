import { posts } from "../data";

export default function getAllDates() {
  const set = new Set(posts.map((post) => post.date));
  return Array.from(set);
}
