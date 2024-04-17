import React from "react";
import Search from "../search/Search";

const Nav = () => {
  return (
    <nav className="bg-slate-150 max-w-5xl m-auto h-16 flex items-center px-4 justify-center">
      <Search />
    </nav>
  );
};

export default Nav;
