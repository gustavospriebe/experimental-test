"use client";

import { search, searchProviderProps } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const searchContext = createContext<search>({
  search: "",
  setSearch: () => {},
});

export const SearchProvider = ({ children }: searchProviderProps) => {
  const [search, setSearch] = useState("");

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};

export const useSearch = () => {
  const { search, setSearch } = useContext(searchContext);
  return { search, setSearch };
};
