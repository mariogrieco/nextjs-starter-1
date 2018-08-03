import { createActions } from "redux-actions";

const { getSingleBusiness, getSingleBusinessSuccess } = createActions({
  GET_SINGLE_BUSINESS: ({ _id } = {}) => ({ _id }),
  GET_SINGLE_BUSINESS_SUCCESS: ({ business } = {}) => ({ business })
});

export { getSingleBusiness, getSingleBusinessSuccess };
