import { takeLatest, call, put } from "redux-saga/effects";

import { createBusiness, createBusinessSuccess } from "./createBusiness.action";
import { changeRoute } from "../route/route.action";

function* createBusinessSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/business/create", {
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

export default takeLatest(createBusiness().type, createBusinessSaga);
