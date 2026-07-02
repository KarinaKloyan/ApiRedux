import { SocialAPI } from "../../api";

const GET_PROFILE = "getProfile";

const initstate = {
  profile: {},
};

const profileReducer = (state = initstate, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

const getProfileAC = (profile) => ({ type: GET_PROFILE, payload: profile });


export const getProfileThunk =(userId)=>{
return async (dispatch) => {
   const data = await SocialAPI.getProfile(userId)
   dispatch(getProfileAC(data))
}
}


export default profileReducer