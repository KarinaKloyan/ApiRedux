import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import {thunk} from "redux-thunk"

const rootReducer = combineReducers({
  usersData: usersReducer,
});


// window.store = store

export const store = createStore(rootReducer, applyMiddleware(thunk));
