import { handleActions } from "redux-actions";

import {
  getSingleBusinessSuccess,
  getBusinessesSuccess,
  createBusinessSuccess
} from "./business.action";
import { Object } from "core-js";

const defaultState = {
  businesses: [],
  business: {},
  total: 0
};

const reducer = handleActions(
  {
    [createBusinessSuccess]: (
      state,
      { payload: { _id, name, description } }
    ) => {
      return Object.assign({}, state, {
        businesses: [
          ...state.businesses,
          {
            _id,
            name,
            description
          }
        ]
      });
    },
    [getBusinessesSuccess]: (state, { payload: { businesses, total } }) => {
      return Object.assign({}, state, {
        businesses,
        total
      });
    },
    [getSingleBusinessSuccess]: (state, { payload: { business } }) => {
      return Object.assign({}, state, { business });
    }
  },
  defaultState
);

export default reducer;
