import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { isLoggedIn, loginSuccess, signoutSuccess } from "./user.action";

function* isLoggedInSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/isLoggedIn", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        cookie: payload.cookie
      }
    });

    const data = yield res.json();

    if (data.isLoggedIn) {
      yield put(
        loginSuccess({
          _id: data.user._id,
          email: data.user.email
        })
      );
    } else {
      yield put(signoutSuccess());
    }
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(isLoggedIn().type, isLoggedInSaga);
