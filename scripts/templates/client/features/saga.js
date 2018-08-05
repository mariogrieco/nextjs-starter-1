const { capitalizeFirstLetter } = require("../../utils");

module.exports = featureName => {
  const Model = capitalizeFirstLetter(featureName);

  return `import { all, takeLatest, call, put } from "redux-saga/effects";

import {
  create${Model},
  create${Model}Success,
  get${Model}s,
  get${Model}sSuccess,
  getSingle${Model},
  getSingle${Model}Success,
  update${Model},
  update${Model}Success,
  delete${Model},
  delete${Model}Success
} from "./${featureName}.action";

import { changeRoute } from "../route/route.action";

function* create${Model}Saga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/${featureName}/create", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: payload.name
      })
    });
    const { _id, userId, name } = yield res.json();

    yield put(
      create${Model}Success({
        _id,
        userId,
        name
      })
    );

    yield put(changeRoute("/${featureName}"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* get${Model}sSaga({ payload }) {
  try {
    const res = yield call(
      fetch,
      "http://localhost:8080/${featureName}/get${Model}s",
      {
        credentials: "include",
        headers: {
          cookie: payload.cookie
        }
      }
    );
    const { ${featureName}s } = yield res.json();

    yield put(get${Model}sSuccess({ ${featureName}s }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* getSingle${Model}Saga({ payload }) {
  try {
    const res = yield call(
      fetch,
      \`http://localhost:8080/${featureName}/\${payload._id}\`,
      {
        mode: "cors",
        credentials: "include"
      }
    );
    const { ${featureName} } = yield res.json();
    yield put(getSingle${Model}Success({ ${featureName} }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* update${Model}Saga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/${featureName}/update", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        _id: payload._id,
        name: payload.name
      })
    });
    yield put(update${Model}Success());

    yield put(changeRoute("/${featureName}"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* delete${Model}Saga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/${featureName}/delete", {
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
    yield put(delete${Model}Success());
    yield put(get${Model}es());
  } catch (error) {
    yield console.log("error", error);
  }
}

function* watchCreate${Model}() {
  yield takeLatest(create${Model}().type, create${Model}Saga);
}
function* watchGet${Model}s() {
  yield takeLatest(get${Model}s().type, get${Model}sSaga);
}
function* watchGetSingle${Model}() {
  yield takeLatest(getSingle${Model}().type, getSingle${Model}Saga);
}
function* watchUpdate${Model}() {
  yield takeLatest(update${Model}().type, update${Model}Saga);
}
function* watchDelete${Model}() {
  yield takeLatest(delete${Model}().type, delete${Model}Saga);
}

function* ${featureName}Saga() {
  yield all([
    watchCreate${Model}(),
    watchGet${Model}s(),
    watchGetSingle${Model}(),
    watchUpdate${Model}(),
    watchDelete${Model}()
  ]);
}

export default ${featureName}Saga;
`;
};
