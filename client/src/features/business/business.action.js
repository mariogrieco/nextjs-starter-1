import { createActions } from "redux-actions";

const { getBusinesses, getBusinessesSuccess } = createActions({
  GET_BUSINESSES: ({ cookie } = {}) => ({ cookie }),
  GET_BUSINESSES_SUCCESS: ({ businesses } = {}) => ({ businesses })
});

export { getBusinesses, getBusinessesSuccess };
