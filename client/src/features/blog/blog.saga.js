import { all, takeLatest, call, put } from "redux-saga/effects";
import {
  createBlog,
  createBlogSuccess,
  getBlogs,
  getBlogsSuccess,
  getSingleBlog,
  getSingleBlogSuccess,
  updateBlog,
  updateBlogSuccess,
  deleteBlog,
  deleteBlogSuccess
} from "./blog.action";

import { changeRoute } from "../route/route.action";

function* createBlogSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/blog/create", {
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
      createBlogSuccess({
        _id,
        userId,
        name,
        description
      })
    );

    yield put(changeRoute("/blog"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* getBlogsSaga({ payload }) {
  try {
    const res = yield call(fetch, "http://localhost:8080/blog/getBlogs", {
      credentials: "include",
      headers: {
        cookie: payload.cookie
      }
    });
    const { blogs } = yield res.json();

    yield put(getBlogsSuccess({ blogs }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* getSingleBlogSaga({ payload }) {
  try {
    const res = yield call(fetch, `http://localhost:8080/blog/${payload._id}`, {
      mode: "cors",
      credentials: "include"
    });
    const { blog } = yield res.json();
    yield put(getSingleBlogSuccess({ blog }));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* updateBlogSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/blog/update", {
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
    yield put(updateBlogSuccess());

    yield put(changeRoute("/blog"));
  } catch (error) {
    yield console.log("error", error);
  }
}
function* deleteBlogSaga({ payload }) {
  try {
    yield call(fetch, "http://localhost:8080/blog/delete", {
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
    yield put(deleteBlogSuccess());
    yield put(getBlogs());
  } catch (error) {
    yield console.log("error", error);
  }
}

function* watchCreateBlog() {
  yield takeLatest(createBlog().type, createBlogSaga);
}
function* watchGetBlogs() {
  yield takeLatest(getBlogs().type, getBlogsSaga);
}
function* watchGetSingleBlog() {
  yield takeLatest(getSingleBlog().type, getSingleBlogSaga);
}
function* watchUpdateBlog() {
  yield takeLatest(updateBlog().type, updateBlogSaga);
}
function* watchDeleteBlog() {
  yield takeLatest(deleteBlog().type, deleteBlogSaga);
}

function* blogSaga() {
  yield all([
    watchCreateBlog(),
    watchGetBlogs(),
    watchGetSingleBlog(),
    watchUpdateBlog(),
    watchDeleteBlog()
  ]);
}

export default blogSaga;
