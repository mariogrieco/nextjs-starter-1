import { takeLatest, call, put } from "redux-saga/effects";

import {
  createBusiness,
  createBusinessSuccess
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

export default takeLatest(createBusiness().type, createBusinessSaga);
