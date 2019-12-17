/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LeadReducer } from "Ducks/lead";

// Redux Form
import { createStore } from 'redux'

const reducers = combineReducers({
  // reducers
  leadState: LeadReducer
});

const store = createStore(reducers)

export default reducers;