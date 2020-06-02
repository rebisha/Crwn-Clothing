// global modules
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // this line is basically telling a persist to use local storage as my default storage. defaults to localStorage for web
// reducers
import userReducer from "./User/reducer";
import cartReducer from "./Cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
