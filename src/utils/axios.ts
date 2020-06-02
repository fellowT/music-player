import axios from 'axios';

export const baseUrl = 'http://localhost:3030';
const http = axios.create({
  timeout: 100000,
  baseURL: baseUrl,
});
http.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误');
  },
);
export default http;
