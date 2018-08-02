import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { signup } from "../actions/signup.action";
import { loginSuccess } from "../actions/user.action";

function* signupSaga({ payload }) {
  try {
    const res = yield call(fetch, "/signup", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password
      })
    });
    const { _id, email } = yield res.json();

    yield put(
      loginSuccess({
        _id,
        email
      })
    );
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(signup().type, signupSaga);
