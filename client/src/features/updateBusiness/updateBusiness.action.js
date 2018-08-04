import { createActions } from "redux-actions";

const { updateBusiness, updateBusinessSuccess } = createActions({
  UPDATE_BUSINESS: ({ _id, name, description } = {}) => ({
    _id,
    name,
    description
  }),
  UPDATE_BUSINESS_SUCCESS: () => ({})
});

export { updateBusiness, updateBusinessSuccess };
