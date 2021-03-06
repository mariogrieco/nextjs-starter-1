import { connect } from "react-redux";

import Header from "./header.component";

import { isLoggedIn } from "../user/user.selector";
import { signout } from "../signout/signout.action";

const mapStateToProps = state => ({
  isLoggedIn: isLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
