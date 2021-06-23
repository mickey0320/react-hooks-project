export const isFalsy = (val: unknown) => val === 0 ? false : !val

export const cleanObject = (obj: Record<keyof any, unknown>) => {
  const ret = {...obj}
  for(const key in ret){
    if(isFalsy(ret[key])){
      delete ret[key]
    }
  }

  return ret
}
