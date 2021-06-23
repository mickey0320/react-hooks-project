import React, { FormEvent, useCallback } from 'react'
import { useAuth } from '../../../context/authContext'

const Login = () => {
  const {login} =  useAuth()
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    login({username, password})
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名：</label>
        <input id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">登录</button>
      </div>
    </form>
  )
}

export default Login
