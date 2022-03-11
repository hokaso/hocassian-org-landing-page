import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
const axios = require('axios');

// Add a request interceptor
axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  return config;
}, function (error: AxiosError) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response: AxiosResponse) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error: AxiosError) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axios;

