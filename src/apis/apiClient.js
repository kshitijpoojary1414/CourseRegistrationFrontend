import axios from "axios";
import { API } from "../constants";
import Storage from "../storage";

const apiClient = axios.create({
  baseURL: API.LIVE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function addApiToken(config) {
  const sessionToken = Storage.get("__icoi_x_a_t") || "";
  config["headers"]["x-access-token"] = sessionToken;
  return config;
}

apiClient.interceptors.request.use(
  config => addApiToken(config),
  error => error,
);

export default apiClient;
