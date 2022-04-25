import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8080/api/",
  // for dev : http://localhost:8080/api/
  // for production_test : https://animazonetest.herokuapp.com/api/
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authorization");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "auth/login" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          await api
            .post("/token/refresh", {
              token: Cookies.get("refresh_token"),
            })
            .then((response) => {
              const { accessToken, refreshToken } = response.data;
              Cookies.set("authorization", accessToken);
              Cookies.set("refresh_token", refreshToken);
            });
          return api(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
