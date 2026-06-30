import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer/authReducer";

const rootReducer = combineReducers({
  usersData: usersReducer,
  authData: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
