import { findCity } from "@/functions";
import React from "react";
import SearchResultsItem from "./SearchResultsItem";
const SearchResults = (props) => {
  const { query, setQuery } = props;
  const cities = findCity(query);
  return (
    <div className="bg-white p-2 absolute w-full min-h-2 max-h-48 h-auto overflow-y-auto mt-[1px] rounded">
      {cities.length > 0
        ? cities.map((city, index) => <SearchResultsItem key={index} city={city} setQuery={setQuery} />)
        : "No resultados"}
    </div>
  );
};

export default SearchResults;
