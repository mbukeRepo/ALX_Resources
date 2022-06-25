import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducer, {initialState} from "./reducers/rootReducer";
import {createStore, compose, combineReducers, applyMiddleware} from "redux"

const combineEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
const store = createStore(
  combineReducers(reducer),
  initialState,
  combineEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

