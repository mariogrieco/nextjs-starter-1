import { connect } from "react-redux";

import Businesses from "./business.component";
import { getBusinesses } from "./business.selector";
import { deleteBusiness } from "./business.action";

const mapStateToProps = state => ({
  businesses: getBusinesses(state)
});

const mapDispatchToProps = dispatch => ({
  deleteBusiness: ({ _id }) => dispatch(deleteBusiness({ _id }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);
