import { takeLatest, call, put } from "redux-saga/effects";

import { updateBusiness, updateBusinessSuccess } from "./updateBusiness.action";
import { changeRoute } from "../../route/route.action";

function* updateBusinessSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/business/update", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: payload._id,
        name: payload.name,
        description: payload.description
      })
    });
    yield put(updateBusinessSuccess());

    yield put(changeRoute("/business"));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(updateBusiness().type, updateBusinessSaga);
