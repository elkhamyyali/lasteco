import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://ecommerceback-production-da9c.up.railway.app",
});

export default baseUrl;
