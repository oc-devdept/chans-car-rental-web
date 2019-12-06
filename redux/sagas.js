/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { LeadSaga } from "ducks/lead";

export default function* rootSaga() {
  yield all([
    // CRM
    LeadSaga()
  ]);
}
