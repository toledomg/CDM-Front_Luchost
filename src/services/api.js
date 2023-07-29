import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-cdm-luchost.onrender.com/",
  timeout: 5000,
});
