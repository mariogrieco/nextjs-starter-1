import { connect } from "react-redux";

import showBusiness from "./showBusiness.component";
import { getBusiness } from "../business.selector";

const mapStateToProps = state => {
  return {
    business: getBusiness(state)
  };
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showBusiness);
