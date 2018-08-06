import { connect } from "react-redux";

import showBlog from "./showBlog.component";
import { getBlog } from "../blog.selector";

const mapStateToProps = state => {
  return {
    blog: getBlog(state)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showBlog);
