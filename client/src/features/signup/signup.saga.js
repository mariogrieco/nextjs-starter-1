import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { signup } from "./signup.action";
import { loginSuccess } from "../user/user.action";
import { changeRoute } from "../route/route.action";

function* signupSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/signup", {
      method: "POST",
      mode: "cors",
      credentials: "include",
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

    yield put(changeRoute("/"));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(signup().type, signupSaga);
