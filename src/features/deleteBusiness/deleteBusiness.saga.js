import { takeLatest, call, put } from "redux-saga/effects";

import { deleteBusiness, deleteBusinessSuccess } from "./deleteBusiness.action";
import { getBusinesses } from "../businesses/businesses.action";

function* deleteBusinessSaga({ payload }) {
  try {
    yield call(fetch, "/b/delete", {
      method: "POST",
      credentials: "same-origin",
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
