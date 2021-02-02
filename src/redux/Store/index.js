import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../Reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
  login: {
    userInfo: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null,
  },
  posts: {
    items: localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [],
  },
};

export const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);


