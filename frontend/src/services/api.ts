import axios from "axios";

const api = axios.create({
    //baseURL: "https://localhost:7176/api",
    baseURL: "http://localhost:5050/api"
    // headers: {
    //     "Content-Type": "application/json",
    // },
});

export default api;