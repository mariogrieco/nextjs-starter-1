import { all } from "redux-saga/effects";

import signup from "./signup.saga";
import signout from "./signout.saga";
import login from "./login.saga";
import user from "./user.saga";
import route from "./route.saga";
import bussiness from "./bussiness.saga";

function* rootSaga() {
  yield all([signup, signout, login, user, route, bussiness]);
}

export default rootSaga;
