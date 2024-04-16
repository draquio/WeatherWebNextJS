import React from "react";
import SearchResultsItem from "./SearchResultsItem";
const SearchResults = (props) => {
  const { city, setQuery } = props;
  return (
    <div className="bg-[#02296dad] py-2 px-4 absolute w-full min-h-2 max-h-48 h-auto overflow-y-auto mt-[1px] rounded-3xl text-white backdrop-blur-[10px] z-10">
      {city.length > 0
        ? city.map((city, index) => <SearchResultsItem key={index} city={city} setQuery={setQuery} />)
        : <span className="md:text-base text-xl">No resultados</span>}
    </div>
  );
};

export default SearchResults;
