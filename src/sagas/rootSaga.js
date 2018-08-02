import { all } from "redux-saga/effects";

import signup from "./signup.saga";
import signout from "./signout.saga";

function* rootSaga() {
  yield all([signup, signout]);
}

export default rootSaga;
