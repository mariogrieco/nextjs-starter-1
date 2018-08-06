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
  CREATE_BLOG: ({ name, description } = {}) => ({
    name,
    description
  }),
  CREATE_BLOG_SUCCESS: ({ _id, userId, name, description } = {}) => ({
    _id,
    userId,
    name,
    description
  }),
  GET_BLOGS: ({ cookie } = {}) => ({ cookie }),
  GET_BLOGS_SUCCESS: ({ blogs } = {}) => ({ blogs }),
  GET_SINGLE_BLOG: ({ _id } = {}) => ({ _id }),
  GET_SINGLE_BLOG_SUCCESS: ({ blog } = {}) => ({ blog }),
  UPDATE_BLOG: ({ _id, name, description } = {}) => ({
    _id,
    name,
    description
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
