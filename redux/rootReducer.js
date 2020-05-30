import { combineReducers } from "redux";

import productReducer from "./reducers/productReducers";

export const rootReducer = combineReducers({
  products: productReducer,
});
