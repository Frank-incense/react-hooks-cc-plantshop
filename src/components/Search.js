import React from "react";

function Search({onSearch}) {
  function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log("Searching for:", searchTerm);
    onSearch(searchTerm);
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
