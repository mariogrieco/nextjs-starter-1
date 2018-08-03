import { createActions } from "redux-actions";

const { deleteBusiness, deleteBusinessSuccess } = createActions({
  DELETE_BUSINESS: ({ _id } = {}) => ({
    _id
  }),
  DELETE_BUSINESS_SUCCESS: ({} = {}) => ({})
});

export { deleteBusiness, deleteBusinessSuccess };
