import { useEffect, useState, useLayoutEffect } from 'react'

const useKeepState = (initialState, key) => {
  // SSR is true, if the window object is not defined
  const SSR = typeof window === 'undefined'

  const [state, setState] = useState(initialState)

  // to make sure in Next.js, the rendering is only happening
  // client-side. Else, next will complain and idk why.
  if (!SSR) {
    useLayoutEffect(() => {
      if (sessionStorage.getItem(key)) {
        setState(JSON.parse(sessionStorage.getItem(key)))
      } else {
        sessionStorage.setItem(key, JSON.stringify(state))
      }
    }, [])
  }

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
  //return !SSR ? [state, setState] : null
}
export default useKeepState
