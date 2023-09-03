"use client";

import { searchContext } from "@/context/searchContext";
import { FormEvent, useContext, useState } from "react";

export default function SearchInput() {
  const [value, setValue] = useState("");
  const { setSearch } = useContext(searchContext);

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    setSearch(value);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        className="border-2 hover:border-gray-600"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
