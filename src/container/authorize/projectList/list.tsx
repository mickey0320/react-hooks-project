import React from 'react'
import { User } from './searchPanel'

export interface Project{
  id: number
  name: string
  personId: number
}

interface ListProps{
  projects: Project[]
  users: User[]
}
const List: React.FC<ListProps> = ({projects,users}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目编号</th>
          <th>项目名称</th>
          <th>项目负责人</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => {
          return (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{users.find(user => user.id === project.personId)?.name}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default List
