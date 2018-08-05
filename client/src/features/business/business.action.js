import { createActions } from "redux-actions";

const {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess,
  getSingleBusiness,
  getSingleBusinessSuccess,
  updateBusiness,
  updateBusinessSuccess,
  deleteBusiness,
  deleteBusinessSuccess
} = createActions({
  CREATE_BUSINESS: ({ name, description } = {}) => ({
    name,
    description
  }),
  CREATE_BUSINESS_SUCCESS: ({ _id, userId, name, description } = {}) => ({
    _id,
    userId,
    name,
    description
  }),
  GET_BUSINESSES: ({ cookie } = {}) => ({ cookie }),
  GET_BUSINESSES_SUCCESS: ({ businesses } = {}) => ({ businesses }),
  GET_SINGLE_BUSINESS: ({ _id } = {}) => ({ _id }),
  GET_SINGLE_BUSINESS_SUCCESS: ({ business } = {}) => ({ business }),
  UPDATE_BUSINESS: ({ _id, name, description } = {}) => ({
    _id,
    name,
    description
  }),
  UPDATE_BUSINESS_SUCCESS: () => ({}),
  DELETE_BUSINESS: ({ _id } = {}) => ({
    _id
  }),
  DELETE_BUSINESS_SUCCESS: ({} = {}) => ({})
});

export {
  createBusiness,
  createBusinessSuccess,
  getBusinesses,
  getBusinessesSuccess,
  getSingleBusiness,
  getSingleBusinessSuccess,
  updateBusiness,
  updateBusinessSuccess,
  deleteBusiness,
  deleteBusinessSuccess
};
