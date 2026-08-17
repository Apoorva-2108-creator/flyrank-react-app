function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search movies..."
        onChange={(event) => onSearch(event.target.value)}
        aria-label="Search movies"
      />

      <button type="button">
        Search
      </button>
    </div>
  )
}

export default SearchBar