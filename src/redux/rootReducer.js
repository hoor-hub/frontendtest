import { combineReducers } from "redux";
import allReducers from "./reducer/allReducers";
const rootReducer = combineReducers({
  all: allReducers,
});

export default rootReducer;
