import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess
} from "../actions/business.action";
import { changeRoute } from "../actions/route.action";

function* createBusinessSaga({ payload }) {
  try {
    const res = yield call(fetch, "/business/create", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: payload.name,
        description: payload.description
      })
    });
    const { _id, name, description } = yield res.json();

    yield put(
      createBusinessSuccess({
        _id,
        name,
        description
      })
    );

    yield put(changeRoute("/businesses"));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* getBusinessesSaga() {
  try {
    const res = yield call(
      fetch,
      "http://localhost:3000/business/getBusinesses",
      {
        credentials: "same-origin"
      }
    );
    const { businesses } = yield res.json();

    yield put(getBusinessesSuccess({ businesses }));
  } catch (error) {
    yield console.log("error", error);
  }
}

function* watchCreateBusiness() {
  yield takeLatest(createBusiness().type, createBusinessSaga);
}

function* watchGetBusinesses() {
  yield takeLatest(getBusinesses().type, getBusinessesSaga);
}

function* businessSaga() {
  yield all([watchCreateBusiness(), watchGetBusinesses()]);
}

export default businessSaga;
