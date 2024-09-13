import axios from "axios";

const localUrl = import.meta.env.VITE_API_LOCAL_URL;
const deployUrl = import.meta.env.VITE_API_DEPLOY_URL;

// Use a variável VITE_ENV para controlar o ambiente
const baseURL =
  import.meta.env.VITE_ENV === "development" ? localUrl : deployUrl;

export const api = axios.create({
  baseURL: baseURL,
  timeout: 25000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
