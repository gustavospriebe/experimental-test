"use client";

import { createContext, useState } from "react";

interface search {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface searchProviderProps {
  children: React.ReactNode;
}

export const searchContext = createContext<search>({
  search: "",
  setSearch: () => {},
});

export const SearchProvider = ({ children }: searchProviderProps) => {
  const [search, setSearch] = useState("");

  // console.log(search);

  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};
