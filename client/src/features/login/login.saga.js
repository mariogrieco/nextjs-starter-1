import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { login } from "./login.action";
import { loginSuccess } from "../user/user.action";
import { changeRoute } from "../route/route.action";

function* loginSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/login", {
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

    yield put(changeRoute("/"));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(login().type, loginSaga);
