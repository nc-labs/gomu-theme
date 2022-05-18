import axios from 'axios'

const API_URL = 'https://gw.dev.edufit.vn'

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
})

axiosInstance.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error)
)

axiosInstance.interceptors.request.use(async (config) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpdGllcyI6W10sImJpemFwcF9hbGlhcyI6ImhybSIsImJpemFwcF9pZCI6MSwiYnJhbmNoX2NvZGUiOiJFZHVjbzE2IiwiYnJhbmNoX2lkIjoyLCJjb21wYW55X2NvZGUiOiJFZHVjbzE2IiwiY29tcGFueV9pZCI6MTAsImNvcmVfYXV0aG9yaXRpZXMiOltdLCJlbnYiOiIiLCJleHAiOjE2NTM0NjA0MDUsImlkIjoiYWIxMzQ3MTYtYWI2Zi00MDM4LTkzMmQtNDgzMDcyZjliOTYyIiwib3JpZ19pYXQiOjE2NTI4NTU2MDUsInByaW1hcnlfYnJhbmNoX2lkIjpudWxsLCJwcmltYXJ5X2NvbXBhbnlfaWQiOm51bGwsInByaW1hcnlfZGVwYXJ0bWVudF9pZCI6bnVsbCwicHJpbWFyeV9wb3NpdGlvbl9pZCI6bnVsbCwic3RhZmZfaWQiOm51bGwsInVzZXJfaWQiOjF9.yA8VKGMysFDILfEhh7z_1pJ4834dQNn2OgSpHlKT1W0'
  const headers = token ? { ...config.headers, Authorization: `Bearer ${token}` } : config.headers
  const customConfigs = { ...config, headers }
  return customConfigs
})

export default axiosInstance
