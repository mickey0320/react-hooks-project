import { http } from "./utils/http"

const token_name = 'token'

interface LoginInfo{
  username: string
  password: string
}
export const getToken = () => {
  return localStorage.getItem(token_name)
}

export const login = async({username, password}: LoginInfo) => {
  const data = await http('/login', {
    method: "POST",
    data: {username, password}
  })
  localStorage.setItem('token', data.user.token)
  return data
}

export const register = async({username, password}: LoginInfo) => {
  return await http('/register', {
    method: "POST",
    data: {username, password}
  })
}

export const logout = () => {
  localStorage.removeItem(token_name)
}
