import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SocialAPI } from "../../api";
import { getUsersAC } from "../../store/usersReducer";
import User from "../User/User";

function Users() {
  const dispatch = useDispatch();
 const{users}= useSelector((state) => state.usersData)
console.log(users)
  useEffect(() => {
    SocialAPI.getUsers()
    .then((data) => {
      dispatch(getUsersAC(data.items));
    });
  }, []);
  return <div>
    {
        users?.map((user)=>(
            <User key={user.id} user={user}/>
        ))
    }
  </div>;
}

export default Users;
