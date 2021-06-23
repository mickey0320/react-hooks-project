import { useEffect } from "react"
import useRequest from "../../../hooks/useRequest"
import { cleanObject } from "../../../utils"
import { useHttp } from "../../../utils/http"
import { Project } from "./list"
import { User } from "./searchPanel"

export const useProjects = (param?: Partial<Project>) => {
  const request = useHttp()
  const { run, ...rest } = useRequest<Project[]>()
  
  useEffect(()=>{
    run(request('/projects', {data: cleanObject(param || {})}))
  }, [param])

  return {
    run,
    ...rest
  }
}

export const useUsers = () => {
  const request = useHttp()
  const { run, ...rest } = useRequest<User[]>()
  
  useEffect(()=>{
    run(request('/users'))
  },[])

  return {
    run,
    ...rest
  }
}
