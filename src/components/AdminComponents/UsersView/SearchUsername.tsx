import React from "react";

const SearchUsername = () => {
    return (
        <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search username..."
          className="rounded-xl shadow border p-4"
        />
      </div>
    );
};

export default SearchUsername;