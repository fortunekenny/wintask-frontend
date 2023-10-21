import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://wintask-api.onrender.com/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

export default customFetch;
