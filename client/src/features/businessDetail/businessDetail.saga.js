import { takeLatest, call, put } from "redux-saga/effects";

import {
  getSingleBusiness,
  getSingleBusinessSuccess
} from "./businessDetail.action";

function* getSingleBusinessSaga({ payload }) {
  try {
    const res = yield call(
      fetch,
      `http://localhost:8080/business/${payload._id}`,
      {
        credentials: "same-origin"
      }
    );
    const { business } = yield res.json();
    yield put(getSingleBusinessSuccess({ business }));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(getSingleBusiness().type, getSingleBusinessSaga);
