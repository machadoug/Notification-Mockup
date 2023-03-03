import axios from "axios";

export default axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:8081/",
  headers: {
    "Content-type": "application/json"
  }
});
