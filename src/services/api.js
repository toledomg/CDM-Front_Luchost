import axios from "axios";

const localUrl = process.env.REACT_APP_LOCAL_URL;
const deployUrl = process.env.REACT_APP_DEPLOY_URL;
export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 25000,

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
