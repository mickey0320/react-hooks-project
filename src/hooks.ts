import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, timeout: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value)
  useEffect(() => {
      const timer = window.setTimeout(()=>{
          setDebounceValue(value)
      }, timeout)
      return () => {
          window.clearTimeout(timer)
      }
  }, [value, timeout])

  return debounceValue
}

export const useMount = (callback: () => void) => {
  useEffect(()=>{
      callback()
  },[])
}
