import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <div className="search-container">
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name, country, or vehicle type"
      />
    </div>
  );
};

export default Search;