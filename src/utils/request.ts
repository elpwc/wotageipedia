import axios from 'axios';
import api from '../api/api';
import cookie from 'react-cookies';

axios.defaults.withCredentials = false;

const service = axios.create({
  baseURL: api.url_debug, //api.url,
  timeout: 5000,
  responseType: 'json',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// interceptor
service.interceptors.request.use(
  config => {
    //token
    if (config && config.headers) {
      config.headers.token = cookie.load('token') || '';
    }
    return config;
  },
  error => {
    // bad request
    return Promise.reject(error);
  }
);

export default service.request;
