import { handleActions } from "redux-actions";

import { loginSuccess, signoutSuccess } from "./user.action";

const defaultState = { _id: undefined, email: undefined };

const reducer = handleActions(
  {
    [loginSuccess]: (state, { payload: { _id, email } }) => {
      return { ...state, _id, email };
    },
    [signoutSuccess]: () => defaultState
  },
  defaultState
);

export default reducer;
