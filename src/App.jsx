// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import SearchResultList from './components/SearchResultList'

function App() {
  const [results, setResults] = useState([])
	return (
		<form>
      <SearchBar setResults={setResults}  />
      <SearchResultList results={results} />
		</form>
	)
}

export default App
