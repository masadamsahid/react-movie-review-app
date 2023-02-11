import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  headers: {"ngrok-skip-browser-warning": "true"}
});

export default api;