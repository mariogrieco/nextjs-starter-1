import React from "react";

import Blog from "../../src/features/blog/blog.container";
import { getBlogs } from "../../src/features/blog/blog.action";

const BlogPage = () => <Blog />;

BlogPage.getInitialProps = async ctx => {
  const { store, req, isServer } = ctx;

  if (isServer) {
    store.dispatch(getBlogs({ cookie: req.headers.cookie }));
  } else {
    store.dispatch(getBlogs());
  }

  return {};
};

export default BlogPage;
