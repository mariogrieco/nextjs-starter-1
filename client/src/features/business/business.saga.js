import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess,
  getSingleBusiness,
  getSingleBusinessSuccess,
  updateBusiness,
  updateBusinessSuccess,
  deleteBusiness,
  deleteBusinessSuccess
} from "./business.action";

import { changeRoute } from "../route/route.action";

function* createBusinessSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/business/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: payload.name,
        description: payload.description
      })
    });
    const { _id, userId, name, description } = yield res.json();

    yield put(
      createBusinessSuccess({
        _id,
        userId,
        name,
        description
      })
    );

    yield put(changeRoute("/business"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* getBusinessesSaga({ payload }) {
  try {
    const res = yield call(
      fetch,
      "http://localhost:8080/business/getBusinesses",
      {
        credentials: "include",
        headers: {
          cookie: payload.cookie
        }
      }
    );
    const { businesses } = yield res.json();

    yield put(getBusinessesSuccess({ businesses }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* getSingleBusinessSaga({ payload }) {
  try {
    const res = yield call(
      fetch,
      `http://localhost:8080/business/${payload._id}`,
      {
        mode: "cors",
        credentials: "include"
      }
    );
    const { business } = yield res.json();
    yield put(getSingleBusinessSuccess({ business }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* updateBusinessSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/business/update", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: payload._id,
        name: payload.name,
        description: payload.description
      })
    });
    yield put(updateBusinessSuccess());

    yield put(changeRoute("/business"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* deleteBusinessSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/business/delete", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: payload._id
      })
    });
    yield put(deleteBusinessSuccess());
    yield put(getBusinesses());
  } catch (error) {
    yield console.log("error", error);
  }
}

function* watchCreateBusiness() {
  yield takeLatest(createBusiness().type, createBusinessSaga);
}
function* watchGetBusinesses() {
  yield takeLatest(getBusinesses().type, getBusinessesSaga);
}
function* watchGetSingleBusiness() {
  yield takeLatest(getSingleBusiness().type, getSingleBusinessSaga);
}
function* watchUpdateBusiness() {
  yield takeLatest(updateBusiness().type, updateBusinessSaga);
}
function* watchDeleteBusiness() {
  yield takeLatest(deleteBusiness().type, deleteBusinessSaga);
}

function* businessSaga() {
  yield all([
    watchCreateBusiness(),
    watchGetBusinesses(),
    watchGetSingleBusiness(),
    watchUpdateBusiness(),
    watchDeleteBusiness()
  ]);
}

export default businessSaga;
