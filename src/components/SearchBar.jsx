import { useCallback, useState } from 'react'
import Loader from './Loader'

const debounce = (func, delay) => {
	let timeout
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => func.apply(this, args), delay)
	}
}

const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const cache = new Map()

	const fetchPeople = (value) => {
		setIsLoading(true)
		if (cache.has(value)) {
			setResults(cache.get(value))
		} else {
			fetch(`https://swapi.dev/api/people/?search=${value}`)
				.then((response) => response.json())
				.then((json) => {
					const result = json.results.filter((user) => {
						return (
							value &&
							user &&
							user.name &&
							user.name.toLowerCase().includes(value)
						)
					})
					setResults(result)
					cache.set(value, result)
					setIsLoading(false)
				})
				.catch((error) => {
					console.error('Ошибка при выполнении запроса:', error)
					setIsLoading(false)
				})
		}
	}

	const debouncedFetch = useCallback(debounce(fetchPeople, 500), [])

	const handleChange = (value) => {
		setInput(value)
		debouncedFetch(value)
	}

	return (
		<div>
			<h1 className='m-10 text-4xl'>🔎Search Input Field By Gagik Antonyan</h1>
			<label
				htmlFor='search'
				className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
			/>
			<div className='relative'>
				<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
					<svg
						className='block t-0 l-0 w-4 h-4 text-blue-400'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 20 20'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
						/>
					</svg>
				</div>
				<input
					type='search'
					id='search'
					className='block focus:outline-none w-full p-4 ps-10 text-xl text-gray-900 border border-gray-300 rounded-t-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-inner'
					placeholder='Search by name'
					value={input}
					onChange={(e) => handleChange(e.target.value)}
					required
				/>
				{isLoading && <Loader />}
			</div>
		</div>
	)
}

export default SearchBar
