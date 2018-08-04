import { createActions } from "redux-actions";

const { changeRoute } = createActions({
  CHANGE_ROUTE: (url = null) => ({ url })
});

export { changeRoute };
