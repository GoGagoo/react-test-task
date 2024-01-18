import SearchResult from './SearchResult'

const SearchResultList = ({ results }) => {
	return (
		<div className='w-100% bg-gray-700 mx-0 flex flex-col shadow-sm rounded-b-md max-h'>
			{results.map((result, id) => {
				return <SearchResult key={id} result={result} />
			})}
		</div>
	)
}

export default SearchResultList
