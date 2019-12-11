/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { LeadReducer } from "Ducks/lead";

// Redux Form
import { createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  // reducers
  form: formReducer,
  leadState: LeadReducer
});

const store = createStore(reducers)

export default reducers;