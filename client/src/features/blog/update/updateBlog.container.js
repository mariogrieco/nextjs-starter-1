import { connect } from "react-redux";
import UpdateBlog from "./updateBlog.component";
import { updateBlog } from "../blog.action";
import { getBlog } from "../blog.selector";

const mapStateToProps = state => {
  return {
    blog: getBlog(state)
  };
};

const mapDispatchToProps = dispatch => ({
  updateBlog: ({ _id, name, description }) =>
    dispatch(updateBlog({ _id, name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateBlog);
