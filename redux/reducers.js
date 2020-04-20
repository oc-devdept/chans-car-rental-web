/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { RentReducer } from "Ducks/rent";

const reducers = combineReducers({
  // reducers
  RentState: RentReducer,
});

export default reducers;