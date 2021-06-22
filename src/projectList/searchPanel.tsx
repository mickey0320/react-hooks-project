import React, { useCallback } from 'react'

export interface SearchParam{
  name: string
  personId: string
}

export interface User{
  id: number
  name: string
}

interface SearchPanelProps{
  param: SearchParam,
  setParam: (param: SearchParam) => void
  users: User[]
}
const SearchPanel: React.FC<SearchPanelProps> = ({param, setParam, users}) => {
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setParam({
      ...param,
      name: e.target.value
    })
  },[param, setParam])

  const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setParam({
      ...param,
      personId: e.target.value
    })
  },[param, setParam])
  return (
    <form>
      <input type="text" value={param.name} onChange={handleInputChange}></input>
      <select value={param.personId} onChange={handleSelectChange}>
        <option value="">负责人</option>
        {users.map(user => {
          return (
            <option key={user.id}>{user.name}</option>
          )
        })}
      </select>
    </form>
  )
}

export default SearchPanel
