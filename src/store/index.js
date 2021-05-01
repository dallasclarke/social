import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const initialState = {
  auth: {
    user: null,
    isAuthenticating: true,
    error: null,
  },
  alert: [],
  posts: {
    data: [],
    error: null,
    loading: false,
  },
  profile: {},
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
