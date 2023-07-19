import React, { useState } from "react";
import "../CSS/store.css";

function SearchCat({ onSearch }) {
    const [selectedCategory, setSelectedCategory] = useState(0);

    const handleSearchInput = () => {
        onSearch(selectedCategory);
    };

    return (
        <div className="search-cat-container">
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(Number(e.target.value))}
            >
                <option value={0}>All categories</option>
                <option value={1}>Acrylic</option>
                <option value={2}>Oil</option>
                <option value={3}>Graphite</option>
            </select>
            <button onClick={handleSearchInput}>Search</button>
        </div>
    );
}

export default SearchCat;