import axios from "axios";
import { store } from "./store";

export const apiClient = axios.create({
  baseURL: "https://revzork.revunit.com/api",
  headers: {
    "Content-type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  config.headers = { "x-api-key": store.getters["apiKey"] };
  return config;
});

export default apiClient;
