import React from 'react'

export interface Project{
  id: number
  name: string
}

interface ListProps{
  projects: Project[]
}
const List: React.FC<ListProps> = ({projects}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目编号</th>
          <th>项目负责人</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => {
          return (
            <tr key={project.id}>{project.name}</tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default List
