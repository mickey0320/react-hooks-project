import React, { FormEvent, useCallback } from 'react'
import { useAuth } from '../../../context/authContext'

const Register = () => {
  const {register} =  useAuth()
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value
    register({username, password})
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名：</label>
        <input  name="username" />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input name="password" />
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
    </form>
  )
}

export default Register
