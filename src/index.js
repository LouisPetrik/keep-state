import { useEffect, useState, useLayoutEffect } from 'react'

const useKeepState = (initialState, key) => {
	const [state, setState] = useState(initialState)

	useLayoutEffect(() => {
		if (sessionStorage.getItem(key)) {
			setState(JSON.parse(sessionStorage.getItem(key)))
		} else {
			sessionStorage.setItem(key, JSON.stringify(state))
		}
	}, [])

	useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, setState]
}
export default useKeepState
