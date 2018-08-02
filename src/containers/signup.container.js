import { connect } from "react-redux";

import Signup from "../components/signup.component";

import { signup } from "../actions/signup.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  signup: (email, password) => dispatch(signup(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
