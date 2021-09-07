'use strict';

var react = require('react');

const useKeepState = (initialState, key) => {
	const [state, setState] = react.useState(initialState);

	react.useLayoutEffect(() => {
		if (sessionStorage.getItem(key)) {
			setState(JSON.parse(sessionStorage.getItem(key)));
		} else {
			sessionStorage.setItem(key, JSON.stringify(state));
		}
	}, []);

	react.useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState]
};

module.exports = useKeepState;
