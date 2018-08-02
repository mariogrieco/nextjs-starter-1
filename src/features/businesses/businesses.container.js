import { connect } from "react-redux";

import Businesses from "./businesses.component";
import { getBusinesses } from "./businesses.selector";

const mapStateToProps = state => ({
  businesses: getBusinesses(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);
