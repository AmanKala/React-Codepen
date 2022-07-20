import { useEffect, useState } from 'react'

// To store in an organized way.
const PREFIX = 'Codepen/'

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) {
      return JSON.parse(jsonValue)
    }
    else {
      return initialValue
    }
  })

  // To Update the localstorage on every change on the editors.
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
