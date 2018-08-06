import { createActions } from "redux-actions";

const {
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
} = createActions({
  CREATE_BLOG: ({ name } = {}) => ({
    name
  }),
  CREATE_BLOG_SUCCESS: ({ _id, userId, name } = {}) => ({
    _id,
    userId,
    name
  }),
  GET_BLOGS: ({ cookie } = {}) => ({ cookie }),
  GET_BLOGS_SUCCESS: ({ blogs } = {}) => ({ blogs }),
  GET_SINGLE_BLOG: ({ _id } = {}) => ({ _id }),
  GET_SINGLE_BLOG_SUCCESS: ({ blog } = {}) => ({ blog }),
  UPDATE_BLOG: ({ _id, name } = {}) => ({
    _id,
    name
  }),
  UPDATE_BLOG_SUCCESS: () => ({}),
  DELETE_BLOG: ({ _id } = {}) => ({
    _id
  }),
  DELETE_BLOG_SUCCESS: ({} = {}) => ({})
});

export {
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
};
