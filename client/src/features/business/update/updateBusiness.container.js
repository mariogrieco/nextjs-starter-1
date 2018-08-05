import { connect } from "react-redux";

import UpdateBusiness from "./updateBusiness.component";
import { updateBusiness } from "../business.action";
import { getBusinessDetail } from "../business.selector";

const mapStateToProps = state => {
  return {
    business: getBusinessDetail(state)
  };
};

const mapDispatchToProps = dispatch => ({
  updateBusiness: ({ _id, name, description }) =>
    dispatch(updateBusiness({ _id, name, description }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateBusiness);
