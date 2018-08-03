import { combineReducers } from "redux";

import user from "../features/user/user.reducer";
import business from "../features/business/business.reducer";
import businessDetail from "../features/businessDetail/businessDetail.reducer";

export default combineReducers({
  user,
  business,
  businessDetail
});
