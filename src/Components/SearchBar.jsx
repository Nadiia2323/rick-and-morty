import React, { useState } from "react";

function SearchBar({ apiData, searchFunction }) {
  function handleChange(event) {
    let newValue = event.target.value;
    newValue = newValue.toLowerCase();

    searchFunction(newValue);
  }

  return (
    <>
      <input
        onChange={handleChange}
        className="navbar-input"
        type="search"
        placeholder="Search..."
      />
    </>
  );
}
export default SearchBar;
