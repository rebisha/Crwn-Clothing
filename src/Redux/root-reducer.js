// global modules
import { combineReducers } from "redux";
// reducers
import userReducer from "./User/reducer";
import cartReducer from "./Cart/reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
