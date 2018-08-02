import { createActions } from "redux-actions";

const {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess
} = createActions({
  CREATE_BUSINESS: ({ name, description } = {}) => ({
    name,
    description
  }),
  CREATE_BUSINESS_SUCCESS: ({ _id, name, description } = {}) => ({
    _id,
    name,
    description
  }),
  GET_BUSINESSES: () => ({}),
  GET_BUSINESSES_SUCCESS: ({ businesses } = {}) => ({ businesses })
});

export {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess
};
