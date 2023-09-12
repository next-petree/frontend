import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { CONSTANTS } from './constants';
import { Provider } from 'react-redux';
import store from './store';

axios.defaults.baseURL = CONSTANTS.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 토큰 reissue
// axios.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const res = await axios.post('/auth/refresh', null);
//       if (res.status === 200) {
//         localStorage.setItem('token', res.data.token);
//         return axios(originalRequest);
//       }
//     }
//     return Promise.reject(error);
//   },
// );

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
