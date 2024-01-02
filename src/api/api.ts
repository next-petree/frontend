import { AxiosRequestConfig } from "axios";
import instance from "./axiosInstance";

// axios.get
export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  try {
    const response = await instance.get<T>(url, { ...config });
    return response;
  } catch (error: any) {
    throw error;
  }
};

// axios.post
export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await instance.post<T>(url, data, { ...config });
    return response;
  } catch (error: any) {
    throw error;
  }
};

// axios.patch
export const patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await instance.patch<T>(url, data, { ...config });
    return response;
  } catch (error: any) {
    throw error;
  }
};
// axios.put
export const put = async<T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await instance.put<T>(url, data, { ...config });
    return response;
  } catch (error: any) {
    throw error;
  }
}

// axios.delete
export const del = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await instance.delete<T>(url, { data, ...config });
    return response;
  } catch (error: any) {
    throw error;
  }
};
