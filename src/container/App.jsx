import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";

import "./App.css";
import Scroll from "../components/Scroll";
import { connect } from "react-redux";
import { requestRobots, setSearchField } from "../actions";
function App(props) {
  // const [searchField, setSearchField] = useState("");

  console.log(props);
  useEffect(() => {
    //(async () => props.onRequestRobotsFromRedux())();
    props.onRequestRobotsFromRedux();
  }, []);

  const filteredRobots = props.robots?.filter((a) =>
    a.name.toLowerCase().includes(props.searchFieldFromRedux.toLowerCase())
  );

  // const handleSearchChange = (value) => {
  //   setSearchField(value);
  // };

  if (!props.isPending)
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
  searchFieldFromRedux: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchChangeFromRedux: (v) => dispatch(setSearchField(v)),
    //onRequestRobotsFromRedux: () => requestRobots(dispatch),
    //onRequestRobotsFromRedux: () => requestRobots()(dispatch),
    onRequestRobotsFromRedux: () => dispatch(requestRobots()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
