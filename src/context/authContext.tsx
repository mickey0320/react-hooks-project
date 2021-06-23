import React, { useContext, useEffect, useState } from "react"
import * as auth from "../auth-provider"
import { User } from "../container/authorize/projectList/searchPanel"
import { http } from "../utils/http"

interface AuthForm {
  username: string
  password: string
}
interface IAuthContext{
  user: User |  undefined
  login:  (data: AuthForm) => Promise<unknown>
  register:  (data: AuthForm) => Promise<unknown>
  logout:  () => void
}
const AuthContext = React.createContext<IAuthContext>({} as IAuthContext)

const bootstrap = async() => {
  const token = auth.getToken()
  if(!token){
    return null
  }
  const data = await http('/me', { token })
  return data.user
}

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User>()
  const login = (data: AuthForm) => auth.login(data).then(setUser)
  const register = (data: AuthForm) => auth.register(data).then(setUser)
  const logout = () => auth.logout()
  const value: IAuthContext = {
    user,
    login,
    register,
    logout
  }
  useEffect(()=>{
    bootstrap().then(setUser)
  },[])
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}
