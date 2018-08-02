import { connect } from "react-redux";

import CreateBusiness from "./createBusiness.component";
import { createBusiness } from "./createBusiness.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  createBusiness: ({ name, description }) =>
    dispatch(createBusiness({ name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateBusiness);
