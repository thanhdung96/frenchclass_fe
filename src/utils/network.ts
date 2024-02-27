import axios, { AxiosResponse } from "axios";
import { getItemAsync } from "expo-secure-store";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";

export type HttpMethod = "get" | "post" | "put" | "patch";

export async function request<T, K>(
  url: string,
  method: HttpMethod,
  postData?: T,
  queryParams?: any,
): Promise<K> {
  const accessToken: string = await getItemAsync(ACCESS_TOKEN_KEY);

  return axios
    .request({
      method,
      url,
      params: { ...queryParams },
      data: { ...postData },
      headers: {
        Authorization: accessToken || "",
      },
    })
    .then((response: AxiosResponse) => {
      return response.data;
    });
}

export async function post<T, K>(url: string, data: T): Promise<K> {
  return request<T, K>(url, "post", data, {}).then((value) => {
    return value;
  });
}

export async function get<T, K>(url: string, params: T): Promise<K> {
  return request<T, K>(url, "get", undefined, params).then((value) => {
    return value;
  });
}

export async function patch<T, K>(
  url: string,
  data: T,
  params: any,
): Promise<K> {
  return request<T, K>(url, "patch", data, params).then((value) => {
    return value;
  });
}

export async function put<T, K>(url: string, data: T, params: any): Promise<K> {
  return request<T, K>(url, "put", data, params).then((value) => {
    return value;
  });
}
