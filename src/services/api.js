import axios from "axios";

export const api = axios.create({
    baseURL: import.meta ?? "http://localhost:3333/"
});