// axios封装
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../config";
import { ElMessage } from "element-plus";

// 创建axios实例
const $http = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});
// 添加请求拦截器
$http.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    const token = window.localStorage.getItem("token");
    if (token) {
      requestConfig.headers = { Authorization: token };
    }
    return requestConfig;
  },
  (error) => Promise.reject(error)
);

// 添加响应拦截器
$http.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, data, desc } = response.data;
    if (code >= 400) return ElMessage.error(desc);
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default $http;
