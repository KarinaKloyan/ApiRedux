import { useEffect } from "react";
import { SocialAPI } from "../../api";

function Users(){
      useEffect(()=>{
    SocialAPI.getUsers()
  },[])
    return
}

export default Users