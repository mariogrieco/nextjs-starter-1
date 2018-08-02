import { takeLatest, call, put } from "redux-saga/effects";

import { Router } from "../routes";
import { changeRoute } from "../actions/route.action";

function* rotueSaga({ payload }) {
  try {
    yield call(Router.pushRoute, payload.url);
  } catch (error) {
    yield console.log("error", error);
  }
}

export default takeLatest(changeRoute().type, rotueSaga);
