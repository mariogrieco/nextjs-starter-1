import { handleActions } from "redux-actions";

import { getSingleBusinessSuccess } from "./businessDetail.action";

const defaultState = {};

const reducer = handleActions(
  {
    [getSingleBusinessSuccess]: (state, { payload: { business } }) => {
      return business;
    }
  },
  defaultState
);

export default reducer;
