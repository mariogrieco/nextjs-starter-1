import { connect } from "react-redux";

import Signup from "./signup.component";

import { signup } from "./signup.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signup: (email, password) => dispatch(signup(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
