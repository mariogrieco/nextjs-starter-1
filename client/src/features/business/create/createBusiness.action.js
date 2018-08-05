import { createActions } from "redux-actions";

const { createBusiness, createBusinessSuccess } = createActions({
  CREATE_BUSINESS: ({ name, description } = {}) => ({
    name,
    description
  }),
  CREATE_BUSINESS_SUCCESS: ({ _id, userId, name, description } = {}) => ({
    _id,
    userId,
    name,
    description
  })
});

export { createBusiness, createBusinessSuccess };
