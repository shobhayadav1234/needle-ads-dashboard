import axios from "axios";

const API =
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:8000/api/v1";

const api = axios.create({
    baseURL: API,
    withCredentials: true,
});


api.interceptors.request.use((config) => {
    if (typeof window === "undefined") {
        return config;
    }

    const token = localStorage.getItem("accessToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
