import axios, { AxiosInstance } from "axios";
import { jwtDecode } from "jwt-decode";

export function isTokenExpired(token: string) {
  if (!token) return true;
  try {
    const decodedToken: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
}

export function initiateAxiosInterceptor() {
  axios.interceptors.request.use((request) => {
    if (!request.url?.includes("users/login")) {
      request.headers["Authorization"] = localStorage.getItem("token");
    }
    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";
    return request;
  });

  axios.interceptors.response.use((response) => {
    return response;
  });
}
