import { DeskSharp } from "@mui/icons-material";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "Api-Key": "3cbf291c-1ec6-40b6-bfbb-c7cd9c491b8a",
  },
});

export const SocialAPI = {
  async getUsers(page) {
    const response = await instance.get(`/users?count=100&page=${page}`);
    return response.data;
  },

  async login(email, password) {
    const response = await instance.post("/auth/login", { email, password });
    return response.data;
  },
  async getProfile(userId) {
    const response = await instance.get(`/profile/${userId}`);
    return response.data;
  },
  async authMe() {
    const response = await instance.get(`/auth/me`);
    return response.data;
  },
  async uploadFile(file) {
    const formData = new FormData();
    formData.append("image", file);
    const response = await instance.put(`/profile/photo`, formData);
    if (response.data.resultCode === 0) {
      return { status: "success", data: response.data.data.photos.large };
    }
    return { status: "error", data: response.data.messages[0] };
  },
};
