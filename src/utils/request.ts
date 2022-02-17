import axios, { AxiosRequestHeaders, Method } from 'axios';
import cookie from 'react-cookies';
import appconfig from '../appconfig';

// 更新services里的接口的方法：npm run openapi

axios.defaults.withCredentials = false;

const service = axios.create({
  baseURL: appconfig.apiBaseURL,
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

/** 请求格式 */
interface RequestOptions {
  data?: object;
  headers?: AxiosRequestHeaders;
  method?: Method;
  params?: object | URLSearchParams;
  paramsSerializer?: (params: object) => string;
  timeout?: number;
  timeoutMessage?: string;
}

/** 返回格式 */
interface RequestResponse<T = any> {
  data: T;
  response: Response;
}

/**
 * 请求
 * @param {string} url URL
 * @param {RequestOptions} options Request option
 * @returns {Promise<RequestResponse<T>>} Response
 * @author wniko
 */
const request = <T = any>(url: string, options?: RequestOptions): Promise<RequestResponse<T>> => {
  return service.request({
    url,
    method: options?.method,
    data: options?.data,
    params: options?.params,
    paramsSerializer: options?.paramsSerializer,
    timeout: options?.timeout,
    timeoutErrorMessage: options?.timeoutMessage,
  });
};

export default request;
