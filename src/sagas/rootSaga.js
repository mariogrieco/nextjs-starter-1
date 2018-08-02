import { all } from "redux-saga/effects";

import signup from "../features/signup/signup.saga";
import signout from "../features/signout/signout.saga";
import login from "../features/login/login.saga";
import user from "../features/user/user.saga";
import route from "../features/route/route.saga";
import businesses from "../features/businesses/businesses.saga";
import createBusiness from "../features/createBusiness/createBusiness.saga";

function* rootSaga() {
  yield all([
    signup,
    signout,
    login,
    user,
    route,
    businesses(),
    createBusiness
  ]);
}

export default rootSaga;
