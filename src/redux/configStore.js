import { combineReducers, createStore } from "redux";
import { ADD_CHAIR } from "./constant";
import bookingReducer from "./reducer";
const rootReducer = combineReducers({
  bookingReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
