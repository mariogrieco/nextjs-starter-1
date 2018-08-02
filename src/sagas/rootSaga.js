import { all } from "redux-saga/effects";

import signup from "./signup.saga";
import signout from "./signout.saga";
import login from "./login.saga";

function* rootSaga() {
  yield all([signup, signout, login]);
}

export default rootSaga;
