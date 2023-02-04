import React, { useState } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import { robots } from "./robots.js";
export default function App() {
  const initialState = {
    robots: robots,
    searchField: "bc",
  };
  const [state, setState] = useState(initialState);
  const handleSearchChange = (value) => {
    const filteredRobots = robots.filter((a) =>
      a.name.toLowerCase().includes(value.toLowerCase())
    );
    setState({ robots: filteredRobots, searchField: value });
  };

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox
        searchField={state.searchField}
        searchChange={handleSearchChange}
      />
      <CardList robots={state.robots} />
    </div>
  );
}
