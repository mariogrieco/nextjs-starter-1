import { combineReducers } from "redux";

import user from "./user.reducer";
import bussiness from "./bussiness.reducer";

export default combineReducers({
  user,
  bussiness
});
