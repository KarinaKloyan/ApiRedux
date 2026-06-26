import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0"
})

export const SocialAPI = {
   async getUsers(page){
 const response =  await instance.get(`/users?count=100&page=${page}`)
 return response.data
   }
}