import axios from 'axios';

const { REACT_APP_API } = process.env;

export const configureAxios = () => {
  // axios 인스턴스 생성
  axios.defaults.baseURL = REACT_APP_API;

  // request interceptors 설정

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  // response interceptors 설정
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
};
