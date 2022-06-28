import thunk from "redux-thunk";
import reducer, {initialState} from "./reducers/rootReducer";
import {createStore, compose, combineReducers, applyMiddleware} from "redux"

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(
  combineReducers(reducer),
  initialState,
  combineEnhancers(applyMiddleware(thunk))
);
export default store;
