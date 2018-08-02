import { createActions } from "redux-actions";

const { signout } = createActions({
  SIGNOUT: () => {}
});

export { signout };
