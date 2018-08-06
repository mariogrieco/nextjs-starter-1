import { connect } from "react-redux";

import CreateBlog from "./createBlog.component";
import { createBlog } from "../blog.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createBlog: ({ name, description }) =>
    dispatch(createBlog({ name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBlog);
