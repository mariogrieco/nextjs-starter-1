import { connect } from "react-redux";

import Businesses from "../components/businesses.component";
import { getBusinesses } from "../selectors/business.selector";

const mapStateToProps = state => ({
  businesses: getBusinesses(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Businesses);
