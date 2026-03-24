import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // automatically picks local or production
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;