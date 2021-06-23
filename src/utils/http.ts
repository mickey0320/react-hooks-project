import qs from 'qs'
import { useAuth } from '../context/authContext'

const apiUrl = process.env.REACT_APP_API_URL

interface RequestConfig extends RequestInit{
  data?: object
  token?: string
}
export const http = async(endpoint: string, {data, token,...config}: RequestConfig = {}) => {
  let url = `${apiUrl}${endpoint}`
  let body
  const requestConfig: RequestConfig = {
    method: 'GET',
    headers:{
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': data ? 'application/json': ''
    },
    ...config
  }
  if(requestConfig.method === 'GET'){
    url += `?${qs.stringify(data)}` 
  } else {
    body = JSON.stringify(data || {})
  }
  return window.fetch(url, {...requestConfig, body}).then(async res => {
    // 没有权限
    if(res.status === 401){
      return Promise.reject('')
    }
    if(res.ok){
      return res.json()
    } else {
      return Promise.reject(await res.json())
    }
  })
}

// 携带着token进行http请求
export const useHttp = () => {
  const { user } = useAuth()
  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, { token: user?.token, ...config})
  }
}
