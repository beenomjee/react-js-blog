import { posts } from "../data";

export default function getAllPlaces() {
  const set = new Set(posts.map((post) => post.place));
  return Array.from(set);
}
