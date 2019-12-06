import { all, call, fork, put, takeEvery, delay } from "redux-saga/effects";
import {
  CHANGE_LEAD_LIST_VIEW,
  GET_ALL_LEAD,
  GET_SINGLE_LEAD,
  GET_LEAD_SUMMARY,
  NEW_LEAD,
  CONVERT_LEAD,
  EDIT_LEAD,
  DELETE_LEAD,
  ADD_NOTE_LEAD,
  CHECK_ACCOUNT_EXIST,
  TRANSFER_LEAD,
  GET_LEADFORM_FIELDS
} from "./LeadTypes";
import * as actions from "./LeadActions";

import api from "Api";

//=========================
// REQUESTS
//=========================
const getAllLeadRequest = async () => {
  // const result = await api.get("/leads/getall");
  console.log("here");
  return result.data.data;
};
//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getAllLeadFromDB() {
  try {
    const data = yield call(getAllLeadRequest);
    yield put(actions.getLeadSuccess(data));
  } catch (error) {
    yield put(actions.getLeadFailure(error));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getAllLeadWatcher() {
  yield takeEvery(GET_ALL_LEAD, getAllLeadFromDB);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* rootSaga() {
  yield all([fork(getAllLeadWatcher)]);
}
