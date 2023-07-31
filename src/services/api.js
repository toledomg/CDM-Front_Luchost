import axios from "axios";

const localUrl = "http://localhost:3000";
const deployUrl = "https://cdm-api.luchost.com/";
export const api = axios.create({
  baseURL: deployUrl,
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});
