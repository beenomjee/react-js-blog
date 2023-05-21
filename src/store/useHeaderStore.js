import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { debounce } from "../utils";
import { posts } from "../data";

const headerStore = (set, get) => ({
  searchResults: [],
  searchText: "",
  isLoading: false,
  isDark: null,

  setSearchText: (searchText) => {
    set(() => ({ searchText }));
  },
  onSearchTextChange: (e, navigate) => {
    set((state) => ({
      searchText: e.target.value,
      isLoading: Boolean(e.target.value),
    }));
    get().onSearch(navigate);
    if (e.target.value === "") {
      set((state) => ({ searchResults: [] }));
      navigate("/");
    }
  },

  onSearch: debounce((navigate) => {
    if (get().searchText === "") return;
    set((state) => ({
      searchResults: posts.filter((post) =>
        post.title.toLowerCase().startsWith(get().searchText.toLowerCase())
      ),
      isLoading: false,
    }));
    navigate("/search");
  }, 500),

  setIsDark: (isDark) => {
    set(() => ({ isDark: isDark ?? !get().isDark }));
  },
});

export default create(devtools(headerStore));
