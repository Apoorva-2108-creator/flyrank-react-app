import { useState } from 'react'

function searchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return (
    <form
      className="search-bar"
      onSubmit={handleSubmit}
    >
      <span className="search-icon">⌕</span>

      <input
        type="text"
        value={query}
        onChange={(event) =>
          setQuery(event.target.value)
        }
        placeholder="search movies..."
        aria-label="search movies"
      />

      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar