import React from "react";
import SearchBar from "./SearchBar";

function Nav({ searchFunction }) {
  return (
    <div className="navbar">
      <SearchBar searchFunction={searchFunction} />
    </div>
  );
}

export default Nav;
