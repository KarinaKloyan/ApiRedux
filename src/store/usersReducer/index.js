import { SocialAPI } from "../../api";

const GET_USERS = "getUsers";
const IS_FETCHING = "isFetching"
const TOTAL_USERS_COUNT = "totalUsersCount"
const CURRENT_PAGE = "currentPage"


const initState = {
  users: [],
  isFetching: false,
  totalCount: 0,
  currentPage: 1
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
      case IS_FETCHING: 
      return{
        ...state,
        isFetching: action.payload
      }
      case TOTAL_USERS_COUNT:
        return{
          ...state,
          totalCount: action.payload
        }
        case CURRENT_PAGE:
          return{
            ...state,
            currentPage: action.payload
          }

    default:
      return state;
  }
};


const getUsersAC = (data) => ({ type: GET_USERS, payload: data });
const isFetchingAC= (bool)=>({type: IS_FETCHING, payload: bool})
const totalUsersCountAC=(totalCount) =>({type: TOTAL_USERS_COUNT, payload: totalCount})
export const changePageAC =(page) => ({type: CURRENT_PAGE, payload: page})


export const getUsersThunkCreator = () => {
  return (dispatch, getState) => {
    let {usersData}=getState()
    
      dispatch(isFetchingAC(true));
    SocialAPI.getUsers(usersData.currentPage)
    .then((data) => {
      dispatch(isFetchingAC(false));
      dispatch(getUsersAC(data.items));
      dispatch(totalUsersCountAC(data.totalCount))
    });
  }
}

export default usersReducer;
