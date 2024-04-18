import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.serverUrl || "http://localhost:5000"}/`,
  headers: {
    "Content-Type": "application/json",
  }
});
export default api;