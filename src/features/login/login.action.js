import { createActions } from "redux-actions";

const { login } = createActions({
  LOGIN: (email, password) => ({ email, password })
});

export { login };
