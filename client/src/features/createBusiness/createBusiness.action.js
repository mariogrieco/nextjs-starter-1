import { createActions } from "redux-actions";

const { createBusiness, createBusinessSuccess } = createActions({
  CREATE_BUSINESS: ({ name, description } = {}) => ({
    name,
    description
  }),
  CREATE_BUSINESS_SUCCESS: ({ _id, name, description } = {}) => ({
    _id,
    name,
    description
  })
});

export { createBusiness, createBusinessSuccess };
