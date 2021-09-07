const React = require('react')

const useKeepState = (initialState, key) => {
	const [state, setState] = React.useState(initialState)

	React.useLayoutEffect(() => {
		if (sessionStorage.getItem(key)) {
			setState(JSON.parse(sessionStorage.getItem(key)))
		} else {
			sessionStorage.setItem(key, JSON.stringify(state))
		}
	}, [])

	React.useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state))
	}, [state])

	return [state, setState]
}
module.exports = useKeepState
