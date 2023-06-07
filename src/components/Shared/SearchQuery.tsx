import React from "react";

const SearchQuery = () => {
    return (
        <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search query..."
          className="rounded-xl shadow border p-4"
        />
      </div>
    );
};

export default SearchQuery;