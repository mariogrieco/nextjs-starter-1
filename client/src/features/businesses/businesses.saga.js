import { all, takeLatest, call, put } from "redux-saga/effects";

import { getBusinesses, getBusinessesSuccess } from "./businesses.action";

function* getBusinessesSaga() {
  try {
    const res = yield call(
      fetch,
      "http://localhost:8080/business/getBusinesses",
      {
        credentials: "include"
      }
    );
    const { businesses } = yield res.json();

    yield put(getBusinessesSuccess({ businesses }));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* watchGetBusinesses() {
  yield takeLatest(getBusinesses().type, getBusinessesSaga);
}

function* businessSaga() {
  yield all([watchGetBusinesses()]);
}

export default businessSaga;
