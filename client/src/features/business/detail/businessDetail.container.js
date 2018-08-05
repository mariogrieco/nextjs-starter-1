import { connect } from "react-redux";

import businessDetail from "./businessDetail.component";
import { getBusinessDetail } from "../business.selector";

const mapStateToProps = state => {
  return {
    business: getBusinessDetail(state)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(businessDetail);
