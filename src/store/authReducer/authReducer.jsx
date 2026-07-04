import { SocialAPI } from "../../api";

const LOGIN = "login";
const AUTH_ME = "authMe";
const LOGOUT = "logout";

const initState = {
  userId: null,
  data: {
    id: null,
    email: null,
    login: null,
  },
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userId: action.payload,
      };
    case AUTH_ME:
      return {
        ...state,
        data: action.payload,
      };

    case LOGOUT:
      return initState;
    default:
      return state;
  }
};

const loginAC = (data) => ({ type: LOGIN, payload: data.userId });
const authMeAC = (data) => ({ type: AUTH_ME, payload: data });
const logoutAC = () => ({ type: LOGOUT });

export const loginThunk = (email, password) => {
  return async (dispatch) => {
    const { data, resultCode, messages } = await SocialAPI.login(
      email,
      password,
    );

    if (resultCode === 0) {
      const authMeData = await SocialAPI.authMe();
      if (authMeData.resultCode === 0) {
        dispatch(authMeAC(authMeData.data));
        localStorage.setItem("userData", JSON.stringify(authMeData.data));
        if (data.userId) {
          dispatch(loginAC(data));
          localStorage.setItem("userId", data.userId);
        }
      }
      return null;
    }
    return messages;
  };
};

export const logoutThunk = () => {
  return (dispatch) => {
    logoutAC();
    localStorage.clear();
  };
};

export default authReducer;
