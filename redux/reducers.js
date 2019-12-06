/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LeadReducer } from "Ducks/lead";

const reducers = combineReducers({
  // reducers
  leadState: LeadReducer
});

export default reducers;
