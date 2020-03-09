import gamesReducer from "./games";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  games: gamesReducer
});

export default allReducers;
