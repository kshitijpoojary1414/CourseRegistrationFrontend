import axios from "axios";
// import { API } from "../constants";
// import Storage from "../storage";

const client = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",

  },
});

function addApiToken(config) {
  const token = localStorage.getItem("token") || "";
  console.log("API Token added", token)
  config["headers"]["authorization"] = token;
  return config;
}

client.interceptors.request.use(
  config => addApiToken(config),
  error => error,
);


export default client;
