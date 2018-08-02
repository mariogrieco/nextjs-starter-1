import { all } from "redux-saga/effects";

import signup from "./signup.saga";
import signout from "./signout.saga";
import login from "./login.saga";
import user from "./user.saga";

function* rootSaga() {
  yield all([signup, signout, login, user]);
}

export default rootSaga;
