import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "./constants.js";

const initialState = {
  searchField: "",
  robots: [],
  error: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { state, searchField: action.payload };
    default:
      return state;
  }
};

export const requestRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { state, isPending: true };
    case REQUEST_ROBOTS_SUCCESS:
      console.log("success", action.payload);
      return { state, isPending: false, robots: action.payload };
    case REQUEST_ROBOTS_FAILED:
      return { state, isPending: false, robots: action.error };
    default:
      return state;
  }
};
