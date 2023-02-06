import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

import "./App.css";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
function App(props) {
  const [robots, setRobots] = useState([]);
  // const [searchField, setSearchField] = useState("");

  console.log(props);
  useEffect(() => {
    (async () => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {
          setRobots(users);
        });
    })();
  }, []);

  const filteredRobots = robots.filter((a) =>
    a.name.toLowerCase().includes(props.searchFieldFromRedux.toLowerCase())
  );

  // const handleSearchChange = (value) => {
  //   setSearchField(value);
  // };

  if (filteredRobots.length)
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchField={props.searchFieldFromRedux}
          searchChange={props.handleSearchChangeFromRedux}
        />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  else return <h1>Loading</h1>;
}

const mapStateToProps = (state) => ({
  searchFieldFromRedux: state.searchField,
});
const mapDispatchToProps = (dispatch) => {
  return { handleSearchChangeFromRedux: (v) => dispatch(setSearchField(v)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
