const SearchResult = ({ result, isActive }) => {
	const activeClass = isActive ? 'bg-blue-500' : ''

	return (
		<div
			className={`text-xl pl-4 py-4 text-left text-white hover:text-black hover:bg-slate-300  hover:rounded-md cursor-pointer ${activeClass}`}
		>
			{result.name}
		</div>
	)
}
export default SearchResult
