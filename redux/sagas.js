/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { LeadSaga } from "Ducks/lead";

export default function* rootSaga() {
  yield all([
    // CRM
    LeadSaga()
  ]);
}
