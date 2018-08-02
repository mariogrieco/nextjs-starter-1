import { takeLatest, call } from "redux-saga/effects";
import "isomorphic-unfetch";

import { signup } from "../actions/signup.action";

function* signupSaga({ payload: { email, password } }) {
  try {
    const res = yield call(fetch, "/signup", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = yield res.json();
    yield console.log("data", data);
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(signup().type, signupSaga);
