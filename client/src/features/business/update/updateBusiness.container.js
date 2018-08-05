import { connect } from "react-redux";

import UpdateBusiness from "./updateBusiness.component";
import { updateBusiness } from "./updateBusiness.action";
import { getBusinessDetail } from "../detail/businessDetail.selector";

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
