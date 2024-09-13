import axios from "axios";

const localUrl = import.meta.env.VITE_LOCAL_URL;
const deployUrl = import.meta.env.VITE_DEPLOY_URL;
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 25000,

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
