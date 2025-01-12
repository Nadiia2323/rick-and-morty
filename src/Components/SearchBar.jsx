import React, { useState } from "react";

function SearchBar({apiData, searchFunction }) {
 
  // const [filteredData, setFilteredData] = useState(apiData);
  function handleChange(event) {
    let newValue = event.target.value;
    console.log(newValue)
    newValue = newValue.toLowerCase();

    searchFunction(newValue)

    // setSearchValue(newValue);
    
    // console.log("newValue :>> ", newValue);
    
  }
  // const filtered = apiData.filter((character) => {
  //     return character.name.toLowerCase().includes(newValue);
  //   });

  //   setFilteredData(filtered);
  
  return (
    <>
      <input
        onChange={handleChange}
        // value={searchValue}
        className="navbar-input"
        type="search"
        placeholder="Search..."
      />
    </>
  );
}
export default SearchBar;



