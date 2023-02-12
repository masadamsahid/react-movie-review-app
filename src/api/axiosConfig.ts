import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL+"/api/v1",
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;