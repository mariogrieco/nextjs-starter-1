import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { signout } from "../actions/signout.action";
import { signoutSuccess } from "../actions/user.action";

function* signoutSaga() {
  try {
    yield call(fetch, "/signout", {
      method: "POST",
      credentials: "same-origin"
    });
    yield put(signoutSuccess());
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(signout().type, signoutSaga);
