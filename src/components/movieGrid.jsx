import MovieCard from './MovieCard'

function MovieGrid({
  movies,
  onSelect,
  watchlist,
  onToggleWatchlist
}) {
  if (movies.length === 0) {
    return (
      <div className="empty-state">
        <div>🎬</div>
        <h3>No movies found</h3>
        <p>Try another title or genre.</p>
      </div>
    )
  }

  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
          isSaved={watchlist.some(
            (item) => item.id === movie.id
          )}
          onToggleWatchlist={onToggleWatchlist}
        />
      ))}
    </section>
  )
}

export default MovieGrid