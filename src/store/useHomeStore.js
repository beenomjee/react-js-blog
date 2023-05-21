import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { posts } from "../data";

const headerStore = (set, get) => ({
  trendingPosts: [],
  getTrendingPosts: () => {
    set((state) => ({ trendingPosts: posts.slice(0, 7) }));
  },
});

export default create(devtools(headerStore));
