import { connect } from "react-redux";

import businessDetail from "./businessDetail.component";
import { getBusinessDetail } from "../businessDetail/businessDetail.selector";

const mapStateToProps = (state, ownProps) => {
  return {
    business: getBusinessDetail(state)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(businessDetail);
