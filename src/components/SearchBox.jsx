import React from "react";

export default function SearchBox({ searchField, searchChange }) {
  return (
    <div className="pa2 tc">
      <input
        type="search"
        placeholder="Search robots"
        className="pa3 ba b--green bg-lightest-blue"
        value={searchField}
        onChange={(e) => searchChange(e.target.value)}
      ></input>
    </div>
  );
}
