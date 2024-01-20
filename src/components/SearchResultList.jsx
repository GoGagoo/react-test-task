import { useState } from 'react'

import NotFound from './NotFound'
import SearchResult from './SearchResult'

const SearchResultList = ({ results }) => {
	const [isNotFound, setIsNotFound] = useState(true)

	return (
		<div className='w-100% bg-gray-700 mx-0 flex flex-col shadow-sm rounded-b-md max-h'>
			{results.length > 0 || results === '' ? (
				results.map((result, id) => <SearchResult key={id} result={result} />)
			) : isNotFound ? (
				<NotFound />
			) : null}
		</div>
	)
}

export default SearchResultList
