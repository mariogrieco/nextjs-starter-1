import { all } from "redux-saga/effects";

import signup from "./signup.saga";

function* rootSaga() {
  yield all([signup]);
}

export default rootSaga;
