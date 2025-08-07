import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constans';
import store from '../store';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const accessToken = store.getState().auth.accessToken;
    console.log(config.url, accessToken);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    Promise.reject(error);
  },
);

export default axiosInstance;
