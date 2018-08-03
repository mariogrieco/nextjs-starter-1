import { connect } from "react-redux";

import Businesses from "./businesses.component";
import { getBusinesses } from "./businesses.selector";
import { deleteBusiness } from "../deleteBusiness/deleteBusiness.action";

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
