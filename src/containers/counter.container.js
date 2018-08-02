import { connect } from "react-redux";

import Counter from "../components/conter.component";

import { increment, decrement } from "../actions/counter.action";
import { getCounter } from "../selectors/counter.selector";

const mapStateToProps = state => ({
  counter: getCounter(state)
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
