import axios from 'axios';

const instance = axios.create({
  baseURL: '/',
  timeout: 10000,
});

// 应该返回一个promise
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    if (res.status >= 200 && res.status <= 399) {
      return res.data;
    }
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
