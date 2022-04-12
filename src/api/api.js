import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "8b1503c6-88dc-4bdc-aed8-c4c449e980c2",
  },
});

export const usersAPI = {
  getUsers(pageSize = 4, currentPage = 1) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((res) => res.data);
  },
};
export const authAPI = {
  authMe() {
    return instance.get("auth/me").then((res) => res.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
export const followAPI = {
  follow(userId) {
    return instance.post(`follow/${userId}`).then((res) => res.data);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((res) => res.data);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((res) => res.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(statusText) {
    return instance.put("profile/status", { status: statusText });
  },
  updateAvatar(photoFile){
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put("profile/photo", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
};
