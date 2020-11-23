import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import * as types from "./RentTypes";
import * as actions from "./RentActions";
// import api from "Api";

import searchResultsData from "../../../data/car-list.json";
import carCategories from "../../../data/car-categories.json";
import commercialCategories from "../../../data/commercial-categories.json";

//=========================
// REQUESTS
//=========================
const getSearchRequest = async ({ payload }) => {
  // const result = await api.get(`/categories/${payload.payload}`);
  // console.log("efwefwe")
  // console.log(payload)
  // console.log(searchResultsData)
  const result = searchResultsData;
  return payload;
};

const getCategoriesRequest = async () => {
  // const result = await api.get(`/categories/${payload.payload}`);
  const result = {
    carCategories: carCategories,
    commercialCategories: commercialCategories
  };
  return result;
};

//=========================
// CALL(GENERATOR) ACTIONS
//=========================
function* getSearch(e) {
  try {
    const data = yield call(getSearchRequest, e);
    yield put(actions.getSearchSuccess(data));
  } catch (error) {
    yield put(actions.getSearchFailure(data));
  }
}

function* getCategories() {
  try {
    const data = yield call(getCategoriesRequest);
    yield put(actions.getCategoriesSuccess(data));
  } catch (error) {
    yield put(actions.getCategoriesFailure(data));
  }
}

//=======================
// WATCHER FUNCTIONS
//=======================
export function* getSearchWatcher() {
  yield takeEvery(types.GET_SEARCH, getSearch);
}

export function* getCategoriesWatcher() {
  yield takeEvery(types.GET_CATEGORIES, getCategories);
}

//=======================
// FORK SAGAS TO STORE
//=======================
export default function* RentSaga() {
  yield all([fork(getSearchWatcher), fork(getCategoriesWatcher)]);
}
