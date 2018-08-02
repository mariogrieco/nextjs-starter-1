import { handleActions, combineActions } from "redux-actions";

import { createBusinessSuccess } from "../actions/business.action";

const defaultState = [];

const reducer = handleActions(
  {
    [createBusinessSuccess]: (
      state,
      { payload: { _id, name, description } }
    ) => {
      return [
        ...state,
        {
          _id,
          name,
          description
        }
      ];
    }
  },
  defaultState
);

export default reducer;
