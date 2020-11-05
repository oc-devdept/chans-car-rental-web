/**
 * Root Sagas
 */
import { all } from "redux-saga/effects";

// import Sagas
import { RentSaga } from "Ducks/rent";
import { PaymentSaga } from "Ducks/payment";
import { CheckoutSaga } from "Ducks/checkout";

export default function* rootSaga() {
  yield all([
    // CRM
    RentSaga(),
    PaymentSaga(),
    CheckoutSaga()
  ]);
}
