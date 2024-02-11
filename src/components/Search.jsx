"use client";

import { useState } from "react";
import SearchResults from "./SearchResults";
import { SearchIcon } from "@/Icons/Icons";

const Search = () => {
  console.log(process.env.NEXT_PUBLIC_API_Key);
  console.log(process.env.API_Key);
  const [query, setQuery] = useState("");
  return (
    <div className="w-full relative">
      <input
        className="md:text-base text-xl focus-visible:outline-none box-border py-3 w-full rounded-3xl pl-12 bg-[var(--transparent-bg)] text-white placeholder:text-white font-sans"
        type="text"
        placeholder="Buenos aires, Santiago, Bogotá, etc.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute left-0 ml-3 mt-3 text-2xl text-white">
        <SearchIcon />
      </span>
      {query.length > 2 && <SearchResults query={query} setQuery={setQuery} />}
    </div>
  );
};

export default Search;
