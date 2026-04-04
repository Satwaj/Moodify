import axios from "axios";


const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "",
    withCredentials: true
})


export async function getSong({ mood }) {
    const response = await api.get("/api/songs?mood=" + mood)
    return response.data
}

export async function getSongsList() {
    const response = await api.get("/api/songs")
    return response.data
}