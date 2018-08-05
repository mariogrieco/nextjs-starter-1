import { takeLatest, call, put } from "redux-saga/effects";

import { deleteBusiness, deleteBusinessSuccess } from "./deleteBusiness.action";
import { getBusinesses } from "../business.action";

function* deleteBusinessSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/business/delete", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: payload._id
      })
    });
    yield put(deleteBusinessSuccess());
    yield put(getBusinesses());
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(deleteBusiness().type, deleteBusinessSaga);
