import React, {  useState } from 'react'
import { useDebounce } from '../../../hooks'
import { useProjects, useUsers } from './hooks'
import List from './list'
import SearchPanel from './searchPanel'

const ProjectList = () => {
  const [searchParam, setSearchParam] = useState({
    name: '',
    personId: ''
  })
  const debounceParam = useDebounce(searchParam, 500)
  const { isLoading, data: projects}  = useProjects(debounceParam)
  const { data: users}  = useUsers()
  return (
    <div className="project-list">
      {isLoading ? <div>loading</div>:null}
      <SearchPanel param={searchParam} setParam={setSearchParam} users={users || []}></SearchPanel>
      <List projects={projects || []} users={users || []}></List>
    </div>
  )
}

export default ProjectList
