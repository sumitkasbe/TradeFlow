import axios from "axios";

const api = axios.create({
  baseURL: "https://tradeflow-0j2q.onrender.com/",
  withCredentials: true,
});

export default api;
