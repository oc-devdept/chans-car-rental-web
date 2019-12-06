/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LeadReducer } from "ducks/lead";

const reducers = combineReducers({
  // reducers
  leadState: LeadReducer
});

export default reducers;
