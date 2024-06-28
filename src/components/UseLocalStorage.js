import  { useState, useEffect } from 'react'

const PREFIX = 'codepen-clone'

export default function UseLocalStorage(key, initialValue) {

  const prefixedkey = PREFIX + key

  const [vlaue, setValue] = useState(()=>{
    const jsonValue = localStorage.getItem(prefixedkey)

    if(jsonValue != null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function'){
      return initialValue()
    } else{ 
      return initialValue
    }
  })

  useEffect(()=>{
    localStorage.setItem(prefixedkey, JSON.stringify(vlaue))
  }, [prefixedkey,vlaue])

  return [vlaue, setValue]
}
