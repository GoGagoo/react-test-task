import { useState } from 'react'

const SearchBar = ({ setResults }) => {
	const [input, setInput] = useState("")

	const fetchPeople = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }

	const handleChange = (value) => {
		setInput(value)
		fetchPeople(value)
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
						className='w-4 h-4 text-blue-400'
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
					placeholder='Поиск по имени'
					value={input}
					onChange={(e) => handleChange(e.target.value)}
					required
				/>
			</div>
		</div>
	)
}

export default SearchBar
