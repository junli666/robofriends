import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

import "./App.css";
import Scroll from "../components/Scroll";
export default function App(props) {
  const [state, setState] = useState({
    robots: [],
    searchField: "",
  });
  const [initialState, setInitialStateState] = useState({
    robots: [],
    searchField: "",
  });
  console.log(props.store.getState());
  useEffect(() => {
    (async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          setState({ ...state, robots: users });
          setInitialStateState({ ...state, robots: users });
        });
    })();
  }, []);
  const handleSearchChange = (value) => {
    const filteredRobots = initialState.robots.filter((a) =>
      a.name.toLowerCase().includes(value.toLowerCase())
    );
    setState({ robots: filteredRobots, searchField: value });
  };

  if (state && state.robots.length)
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchField={state.searchField}
          searchChange={handleSearchChange}
        />
        <Scroll>
          <CardList robots={state.robots} />
        </Scroll>
      </div>
    );
  else return <h1>Loading</h1>;
}
