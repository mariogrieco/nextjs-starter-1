import { handleActions, combineActions } from "redux-actions";

import { increment, decrement } from "../actions/counter.action";

const defaultState = { counter: 10 };

const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return { ...state, counter: state.counter + amount };
    }
  },
  defaultState
);

export default reducer;
