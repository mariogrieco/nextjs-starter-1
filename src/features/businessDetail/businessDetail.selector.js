const getSingleBusiness = (state, _id) =>
  state.business.find(business => business._id === _id);

export { getSingleBusiness };
