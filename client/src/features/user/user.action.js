import { createActions } from "redux-actions";

const { loginSuccess, signoutSuccess, isLoggedIn } = createActions({
  LOGIN_SUCCESS: ({ _id, email }) => ({ _id, email }),
  SIGNOUT_SUCCESS: () => {},
  IS_LOGGED_IN: ({ session } = {}) => ({ session })
});

export { loginSuccess, signoutSuccess, isLoggedIn };
