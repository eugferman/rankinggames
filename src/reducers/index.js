import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import gamesReducer from "./games"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  games: gamesReducer
});

export default allReducers;
