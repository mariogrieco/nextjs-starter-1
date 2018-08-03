import { connect } from "react-redux";

import businessDetail from "./businessDetail.component";
import { getSingleBusiness } from "./businessDetail.selector";

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps", ownProps);

  return {
    business: getSingleBusiness(state, ownProps._id)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(businessDetail);
