import axios from "axios";
import i18next from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_ALIAS = {
  runtime: "api:runtime",
  services: "api:services",
  fileStore: "api:fileStore",
  testing: "api:testing",
};

const interceptor = async ({ headers, ...config }) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  headers["Content-Language"] = getContentLanguage();

  if (config.url.includes(API_ALIAS.services)) {
    headers["Cache-Control"] = "no-cache";
  }
  if (!headers.Authorization && accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  if (!config.url.includes("api:")) {
    config.url = `${API_ALIAS.runtime}${config.url}`;
  }
  return { ...config, headers };
};

function getContentLanguage() {
  switch (i18next.language) {
    case "ru":
      return "ru,ru-RU";
    case "kk":
      return "kk,kk-KZ";
    default:
      return "en,en-US";
  }
}

const unauthorized = async (error) => {
  if (error.response && error.response.status === 401) {
    if (!error.response.config.url.includes("login")) {
    }
  }
  return Promise.reject(error);
};
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.interceptors.request.use(interceptor, (e) => Promise.reject(e));
axios.interceptors.response.use((r) => r, unauthorized);
