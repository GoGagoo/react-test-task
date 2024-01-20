import { useState, useEffect } from 'react'

import NotFound from './NotFound'
import SearchResult from './SearchResult'

const SearchResultList = ({ results }) => {
	const [isNotFound, setIsNotFound] = useState(true)
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'ArrowDown') {
				setActiveIndex((prevIndex) => Math.min(prevIndex + 1, results.length - 1))
			} else if (event.key === 'ArrowUp') {
				setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0))
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [results.length])

	return (
		<div className='w-100% bg-gray-700 mx-0 mt-0.5 flex flex-col shadow-sm rounded-md max-h'>
			{results.length > 0 || results === '' ? (
				results.map((result, id) => <SearchResult key={id} result={result} isActive={id === activeIndex} />)
			) : isNotFound ? (
				<NotFound />
			) : null}
		</div>
	)
}

export default SearchResultList