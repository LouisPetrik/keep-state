import { useState } from 'react'
import useKeepState from 'keep-state'

export default function ReactCounter() {
	const [count, setCount] = useKeepState(0, 'key-1')

	const add = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<div id='react' className='counter'>
			<button onClick={subtract}>-</button>
			<pre>{count}</pre>
			<button onClick={add}>+</button>
		</div>
	)
}
