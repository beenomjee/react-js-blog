import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { posts } from "../data";

const headerStore = (set, get) => ({
  date: "all",
  category: "all",
  place: "all",

  onChangeFilter: (name, value) => {
    set((state) => ({ [name]: value }));
  },
});

export default create(devtools(headerStore));
