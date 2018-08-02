import { connect } from "react-redux";

import Login from "./login.component";
import { login } from "./login.action";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
