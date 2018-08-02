import { combineReducers } from "redux";

import user from "./user.reducer";
import business from "./business.reducer";

export default combineReducers({
  user,
  business
});
