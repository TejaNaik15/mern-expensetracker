// Use Vite environment variable `VITE_API_URL` in production (set on Render)
export const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1";