const SearchResult = ({ result, isActive, setActiveIndex, id }) => {
	const activeClass = isActive
		? 'bg-violet-500 rounded-xl hover:rounded-3xl '
		: ''

	return (
		<div
			onClick={() => {
				document.getElementById('search').value = result.name
				setActiveIndex(id)
			}}
			className={`font-poppins text-2xl pl-4 py-4 hover:px-4 text-left text-white hover:text-black hover:bg-slate-300  hover:rounded-xl cursor-pointer ${activeClass}`}
		>
			{result.name}
		</div>
	)
}
export default SearchResult
