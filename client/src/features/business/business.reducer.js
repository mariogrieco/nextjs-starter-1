import { handleActions, combineActions } from "redux-actions";

import { getBusinessesSuccess } from "./business.action";
import { createBusinessSuccess } from "./create/createBusiness.action";

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
    },
    [getBusinessesSuccess]: (state, { payload: { businesses } }) => {
      return [...businesses];
    }
  },
  defaultState
);

export default reducer;
