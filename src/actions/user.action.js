import { createActions } from "redux-actions";

const { loginSuccess, signoutSuccess } = createActions({
  LOGIN_SUCCESS: ({ _id, email }) => ({ _id, email }),
  SIGNOUT_SUCCESS: () => {}
});

export { loginSuccess, signoutSuccess };
