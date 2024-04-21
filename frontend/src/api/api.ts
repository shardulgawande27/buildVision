import axios from "axios";
import type { AxiosInstance } from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default api;
