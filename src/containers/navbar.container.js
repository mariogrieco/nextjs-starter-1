import { connect } from "react-redux";

import Navbar from "../components/layout/navbar";

import { isLoggedIn } from "../selectors/user.selector";
import { signout } from "../actions/signout.action";

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
