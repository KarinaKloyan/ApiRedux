import { SocialAPI } from "../../api";

const LOGIN = "login";

const initState = {
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

const loginAC = (data) => ({ type: LOGIN, payload: data.userId });

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    const data = await SocialAPI.login(email, password);
    if (data.userId) {
      dispatch(loginAC(data));
      localStorage.setItem("userId", data.userId);
    }
  };
};

export default authReducer;
