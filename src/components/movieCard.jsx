function MovieCard({
  movie,
  onSelect,
  isSaved,
  onToggleWatchlist
}) {
  return (
    <article className="movie-card">
      <div
        className="poster-wrapper"
        onClick={() => onSelect(movie)}
      >
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
        />

        <div className="rating">
          ⭐ {movie.rating}
        </div>

        <div className="view-label">
          View details
        </div>
      </div>

      <div className="movie-info">
        <div>
          <h3>{movie.title}</h3>

          <p>
            {movie.year} • {movie.genre}
          </p>
        </div>

        <button
          className={`heart-button ${
            isSaved ? 'saved' : ''
          }`}
          onClick={() => onToggleWatchlist(movie)}
          aria-label="Toggle watchlist"
        >
          {isSaved ? '♥' : '♡'}
        </button>
      </div>
    </article>
  )
}

export default MovieCard