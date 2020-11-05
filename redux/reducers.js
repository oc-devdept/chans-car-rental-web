/**
 * App Reducers
 */
import { combineReducers } from "redux";

import { RentReducer } from "Ducks/rent";
import { PaymentReducer } from "Ducks/payment";
import { CheckoutReducer } from "Ducks/checkout";

const reducers = combineReducers({
  // reducers
  RentState: RentReducer,
  PaymentState: PaymentReducer,
  CheckoutState: CheckoutReducer
});

export default reducers;