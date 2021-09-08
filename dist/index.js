'use strict';

var react = require('react');

const useKeepState = (initialState, key) => {
	// SSR is true, if the window object is not defined
	const SSR = typeof window === 'undefined';

	const [state, setState] = react.useState(initialState);

	// to make sure in Next.js, the rendering is only happening
	// client-side. Else, next will complain and idk why.
	if (!SSR) {
		react.useLayoutEffect(() => {
			if (sessionStorage.getItem(key)) {
				setState(JSON.parse(sessionStorage.getItem(key)));
			} else {
				sessionStorage.setItem(key, JSON.stringify(state));
			}
		}, []);
	}

	react.useEffect(() => {
		sessionStorage.setItem(key, JSON.stringify(state));
	}, [state]);

	return [state, setState]
	//return !SSR ? [state, setState] : null
};

module.exports = useKeepState;
