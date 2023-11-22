import React, { useState } from "react";

const SearchSection = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("");
  };
  return (
    <div>
      <h1 className="font-bold text-3xl text-center py-8">
        View Our Full Menu
      </h1>
      <div className="px-40 py-10">
        <input
          className="px-8 py-1 mr-6 rounded"
          type="text"
          placeholder="Search Items"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <button
          className="rounded bg-red-600 px-8 py-1 text-white"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
