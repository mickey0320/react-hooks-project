import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks'
import List, { Project } from './list'
import SearchPanel, { User } from './searchPanel'

const apiUrl = process.env.REACT_APP_API_URL

const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: '',
    personId: ''
  })
  const [projects, setProjects] = useState<Project[]>([])
  const [users, setUsers] = useState<User[]>([])
  const debounceParam = useDebounce(searchParam, 500)

  useEffect(()=>{
    console.log(apiUrl)
    // 重新请求数据
    fetch(`${apiUrl}/projects`)
  }, [debounceParam])
  return (
    <div className="project-list">
      <SearchPanel param={searchParam} setParam={setSearchParam} users={users}></SearchPanel>
      <List projects={projects}></List>
    </div>
  )
}

export default ProjectList
