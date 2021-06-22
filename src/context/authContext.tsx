import React, { useState } from "react"
import * as auth from "../auth-provider"
import { User } from "../projectList/searchPanel"

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
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
