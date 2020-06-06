import { combineReducers } from "redux";

import productReducer from "./reducers/productReducers";
import authReducer from "./reducers/authReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});
