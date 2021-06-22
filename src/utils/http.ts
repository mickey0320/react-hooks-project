import qs from 'qs'

const apiUrl = process.env.REACT_APP_API_URL

interface RequestConfig extends RequestInit{
  data?: object
  token?: string
}
export const http = async(endpoint: string, config: RequestConfig) => {
  let url = ''
  let body
  const requestConfig: RequestConfig = {
    method: 'GET',
    headers:{
      'Authrization': config.token ? `Bearer ${config.token}` : '',
      'Content-Type': config.data ? 'application/json': ''
    },
    ...config
  }
  if(requestConfig.method === 'GET'){
    url += `${apiUrl}${endpoint}?${qs.stringify(config.data)}` 
  } else {
    body = JSON.stringify(config.data || {})
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

export const useHttp = () => {
  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, config)
  }
}
