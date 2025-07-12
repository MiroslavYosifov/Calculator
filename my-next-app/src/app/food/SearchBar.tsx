"use client";
import React from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="w-[90%] block mx-auto bg-white">
      <input
        type="text"
        className="w-full text-black"
        onChange={(e) => props.onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
