import { handleActions } from "redux-actions";
import {
  getSingleBlogSuccess,
  getBlogsSuccess,
  createBlogSuccess
} from "./blog.action";
import { Object } from "core-js";

const defaultState = {
  blogs: [],
  blog: {}
};

const reducer = handleActions(
  {
    [createBlogSuccess]: (state, { payload: { _id, name, description } }) => {
      return Object.assign({}, state, {
        blogs: [
          ...state.blogs,
          {
            _id,
            name,
            description
          }
        ]
      });
    },
    [getBlogsSuccess]: (state, { payload: { blogs } }) => {
      return Object.assign({}, state, {
        blogs
      });
    },
    [getSingleBlogSuccess]: (state, { payload: { blog } }) => {
      return Object.assign({}, state, { blog });
    }
  },
  defaultState
);

export default reducer;
