import { useState } from "react"

interface State<T>{
  data?: T | null,
  status: 'pending' | 'loading' | 'success' | 'error'
  error?: Error | null
}
const useRequest = <T>() => {
  const [state, setState] = useState<State<T>>({
    status: 'pending',
    error: null
  })
  const run = (promise: Promise<T>) => {
    setState({
      data: null,
      status: 'loading',
      error: null
    })
    promise.then((data) => {
      setState({
        data,
        status: 'success',
        error: null
      })
    }).catch((error)=>{
      setState({
        data: null,
        status: 'error',
        error
      })
    })
  }

  return {
    run,
    isLoading: state?.status === 'loading',
    isError: state?.status === 'error',
    ...state
  }
}

export default useRequest
