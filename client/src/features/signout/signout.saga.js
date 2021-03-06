import { takeLatest, call, put } from "redux-saga/effects";
import "isomorphic-unfetch";

import { signout } from "../signout/signout.action";
import { signoutSuccess } from "../user/user.action";
import { changeRoute } from "../route/route.action";

function* signoutSaga() {
  try {
    yield call(fetch, "http://localhost:8080/signout", {
      method: "POST",
      mode: "cors",
      credentials: "include"
    });
    yield put(signoutSuccess());
    yield put(changeRoute("/"));
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(signout().type, signoutSaga);
