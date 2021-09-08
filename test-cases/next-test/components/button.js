import useKeepState from './useKeepState'

export default function Button() {
	const [count, setCount] = useKeepState(0, 'key-1')
	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Increment </button>
		</div>
	)
}
