import { useState } from 'react'

function SearchBar({ onSearch }) {
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
        placeholder="Search movies..."
        aria-label="Search movies"
      />

      <button type="submit">
        Search
      </button>
    </form>
  )
}

export default SearchBar