import qs from 'qs'

interface RequestConfig extends RequestInit{
  data: object
  token: string
}
const http = async(endpoint: string, config: RequestConfig) => {
  let url = ''
  let body
  if(config.method === 'GET'){
    url += `${endpoint}?${qs.stringify(config.data)}` 
  } else {
    body = JSON.stringify(config.data)
  }
  return window.fetch(url, {...config, body}).then(res => {
    if(res.ok){
      return res.json()
    } else {
      // 没有权限
      if(res.status === 401){
        return Promise.reject('')
      }
    }
  })
}

export const useHttp = () => {
  return (...[endpoint, config]: Parameters<typeof http>) => {
    return http(endpoint, config)
  }
}
