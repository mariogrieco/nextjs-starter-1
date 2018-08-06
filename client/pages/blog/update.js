import React from "react";

import UpdateBlog from "../../src/features/blog/update/updateBlog.container";
import { getSingleBlog } from "../../src/features/blog/blog.action";

const UpdateBlogPage = () => <UpdateBlog />;

UpdateBlogPage.getInitialProps = async ctx => {
  const { query, store } = ctx;
  store.dispatch(
    getSingleBlog({
      _id: query._id
    })
  );
  return {};
};

export default UpdateBlogPage;
