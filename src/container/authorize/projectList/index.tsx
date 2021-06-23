import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks'
import { cleanObject } from '../../../utils'
import { useHttp } from '../../../utils/http'
import List, { Project } from './list'
import SearchPanel, { User } from './searchPanel'

const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: '',
    personId: ''
  })
  const [projects, setProjects] = useState<Project[]>([])
  const [users, setUsers] = useState<User[]>([])
  const debounceParam = useDebounce(searchParam, 500)
  const request = useHttp()

  useEffect(()=>{
    request('/projects', {data: cleanObject(debounceParam)}).then(setProjects)
  }, [debounceParam])

  useEffect(()=>{
    request('/users').then(setUsers)
  }, [])
  return (
    <div className="project-list">
      <SearchPanel param={searchParam} setParam={setSearchParam} users={users}></SearchPanel>
      <List projects={projects} users={users}></List>
    </div>
  )
}

export default ProjectList
