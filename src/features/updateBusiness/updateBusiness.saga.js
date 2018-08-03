import { takeLatest, call, put } from "redux-saga/effects";

import { updateBusiness, updateBusinessSuccess } from "./updateBusiness.action";
import { changeRoute } from "../route/route.action";

function* updateBusinessSaga({ payload }) {
  console.log("payload", payload);
  try {
    yield call(fetch, "/b/update", {
      method: "POST",
      credentials: "same-origin",
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

    yield put(changeRoute("/businesses"));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(updateBusiness().type, updateBusinessSaga);
