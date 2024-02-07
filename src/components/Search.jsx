"use client";

import { useState } from "react";
import SearchResults from "./SearchResults";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="max-w-80 w-full relative">
      <input
        className="focus-visible:outline-none box-border p-2 w-full"
        type="text"
        placeholder="Ciudad ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query.length > 2 && <SearchResults query={query} setQuery={setQuery} />}
    </div>
  );
};

export default Search;
