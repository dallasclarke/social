import { createStore, combineReducers } from "redux";

import user from "./user";

const rootReducer = combineReducers({ user });

const initialState = {
    user: {},
    posts: [],
}

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;