import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

instance.interceptors.request.use(
  config => {
    const token = getToken("accessToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log("api 요청 응답 :", response);
    return response;
  },
  error => {
    console.log("api 요청 오류 발생", error);
    return Promise.reject(error);
  },
);

export default instance;
