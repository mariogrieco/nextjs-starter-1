import { createActions } from "redux-actions";

const { signup } = createActions({
  SIGNUP: (email, password) => ({ email, password })
});

export { signup };
