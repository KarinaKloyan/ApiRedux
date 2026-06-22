import { createStore, combineReducers } from "redux";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
  usersData: usersReducer,
});

export const store = createStore(rootReducer);
