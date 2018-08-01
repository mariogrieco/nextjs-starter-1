import { createActions, handleActions, combineActions } from "redux-actions";

const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

export { increment, decrement };
