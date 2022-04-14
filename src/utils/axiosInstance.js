import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
})

axiosInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.request.use(async (config) => {
  const token = undefined
  const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers
  const customConfigs = { ...config, headers }
  return customConfigs
})

export default axiosInstance
