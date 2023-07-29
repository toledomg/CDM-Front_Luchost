import axios from "axios";

export const api = axios.create({
  baseURL: "https://cdm-api.luchost.com/",
  timeout: 5000,
});
