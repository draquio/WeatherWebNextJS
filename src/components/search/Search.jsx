"use client";

import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import { SearchIcon } from "@/Icons/Icons";
import { searchCity } from "@/services/weather";

const Search = () => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState([]);
  
  useEffect(() => {
    (async () => {
      if (query.length > 3) {
        setCity(await searchCity(query));
      }
    })();
  }, [query]);
  return (
    <div className="w-full relative">
      <input
        className="md:text-base text-xl focus-visible:outline-none box-border py-3 w-full rounded-3xl pl-12 bg-[var(--transparent-bg)] text-white placeholder:text-white font-sans placeholder:opacity-40"
        type="search"
        placeholder="Buenos Aires, Santiago, Bogotá .."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-white">
        <SearchIcon />
      </span>
      {city && query.length > 3 && <SearchResults city={city} setQuery={setQuery} setCity={setCity} />}
    </div>
  );
};

export default Search;
