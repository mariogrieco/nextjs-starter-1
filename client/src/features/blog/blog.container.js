import { connect } from "react-redux";

import Blogs from "./blog.component";
import { getBlogs } from "./blog.selector";
import { deleteBlog } from "./blog.action";

const mapStateToProps = state => ({
  blogs: getBlogs(state)
});

const mapDispatchToProps = dispatch => ({
  deleteBlog: ({ _id }) => dispatch(deleteBlog({ _id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
