// 임시 axios 정의 파일


import axios from 'axios';

export const apiUrl = 'http://3.37.230.170:8080/api';

axios.defaults.baseURL = apiUrl;
axios.defaults.headers.post['Content-Type'] = "application/json;charset=utf-8";


export default axios;