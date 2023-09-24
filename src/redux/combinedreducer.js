import { combineReducers } from "redux";
import { getProductReducer, getSingleProductReducer } from "./reducers";
import { cartreducer } from "./reducers";

const reducers = combineReducers({
  getProductReducer,
  getSingleProductReducer,
  cartreducer,
});
export default reducers;
