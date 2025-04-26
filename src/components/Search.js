import React from "react";

function Search() {
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log("Searching for:", searchTerm);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
