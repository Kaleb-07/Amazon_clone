import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-39a25/us-central1/api"
  baseURL: "https://amazon-backend-deploy-7h8v.onrender.com"
});

export { axiosInstance}