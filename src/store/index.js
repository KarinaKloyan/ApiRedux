import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profileReducer";


const rootReducer = combineReducers({
  usersData: usersReducer,
  authData: authReducer,
  profileData: profileReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
window.store = store;
