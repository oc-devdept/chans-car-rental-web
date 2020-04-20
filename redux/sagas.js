/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { RentSaga } from "Ducks/rent";

export default function* rootSaga() {
  yield all([
    // CRM
    RentSaga(),
  ]);
}
