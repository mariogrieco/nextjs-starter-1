import React from "react";

import ShowBlog from "../../src/features/blog/show/showBlog.container";
import { getSingleBlog } from "../../src/features/blog/blog.action";

const ShowBlogPage = () => <ShowBlog />;

ShowBlogPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingleBlog({
      _id: query._id
    })
  );
  return {};
};

export default ShowBlogPage;
