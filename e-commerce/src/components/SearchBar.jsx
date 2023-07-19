import React from "react";
import '../CSS/store.css'

function SearchBar({ onSearch }) {
  const handleSearchInput = event => {
    const searchQuery = event.target.value.toLowerCase();
    onSearch(searchQuery);
  };

  return (
    <div className="search-input-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Products"
        onChange={handleSearchInput}
      />
      <i className="bi bi-search search-icon"></i>
    </div>
  );
}

export default SearchBar;