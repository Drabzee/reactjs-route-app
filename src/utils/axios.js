import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://employees-bef60.firebaseio.com/'
});

const CancelToken = axios.CancelToken;

instance.interceptors.request.use(req => {
  return req;
}, (err) => {
  console.log(err);
});

instance.interceptors.response.use(res => {
  return res;
}, (err) => {
  console.log(err);
});

export default instance;

export {CancelToken};