import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultList from './components/SearchResultList'

function App() {
  const [results, setResults] = useState([])
	const [input, setInput] = useState('')

	return (
		<form>
      <SearchBar setResults={setResults} setInput={setInput} />
      <SearchResultList results={results} inputValue={input} />
		</form>
	)
}

export default App
