import { createStore, combineReducers } from "redux";
import { ProductReducer } from "./Reducers/ProductReducer";
import {CountReducer} from "./Reducers/CountReducer"
import {carReducer} from "./Reducers/CarReducer"

export const configStore = () => {
  const extension =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
  const myStore = createStore(combineReducers({ ProductReducer,CountReducer,carReducer }),extension);

  return myStore;
};
