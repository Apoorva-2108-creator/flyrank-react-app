import { useMemo, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieGrid from '../components/MovieGrid'
import '../App.css'

const moviesData = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    rating: 8.8,
    duration: '2h 28m',
    poster:
      'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
    description:
      'A skilled thief who steals secrets through dreams is given a chance to erase his past by performing an impossible task.'
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-Fi',
    rating: 8.7,
    duration: '2h 49m',
    poster:
      'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    description:
      'Explorers travel through a wormhole in space in search of a new home for humanity.'
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    rating: 9.0,
    duration: '2h 32m',
    poster:
      'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    description:
      'Batman faces a criminal mastermind who pushes Gotham into chaos.'
  },
  {
    id: 4,
    title: 'Avatar',
    year: 2009,
    genre: 'Adventure',
    rating: 7.9,
    duration: '2h 42m',
    poster:
      'https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
    description:
      'A marine discovers the world of Pandora and becomes caught between two worlds.'
  },
  {
    id: 5,
    title: 'The Matrix',
    year: 1999,
    genre: 'Action',
    rating: 8.7,
    duration: '2h 16m',
    poster:
      'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    description:
      'A computer hacker discovers that reality is not what it seems.'
  },
  {
    id: 6,
    title: 'Avengers: Endgame',
    year: 2019,
    genre: 'Action',
    rating: 8.4,
    duration: '3h 1m',
    poster:
      'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    description:
      'The Avengers attempt to undo the devastating consequences of the previous battle.'
  },
  {
    id: 7,
    title: 'Oppenheimer',
    year: 2023,
    genre: 'Drama',
    rating: 8.6,
    duration: '3h',
    poster:
      'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    description:
      'The story of the scientist whose work helped create the first atomic bomb.'
  },
  {
    id: 8,
    title: 'Dune',
    year: 2021,
    genre: 'Adventure',
    rating: 8.0,
    duration: '2h 35m',
    poster:
      'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
    description:
      'A young noble becomes involved in a struggle over the most valuable resource in the universe.'
  },
  {
    id: 9,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    genre: 'Action',
    rating: 8.2,
    duration: '2h 28m',
    poster:
      'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    description:
      'Peter Parker faces the consequences of revealing his identity.'
  },
  {
    id: 10,
    title: 'Black Panther',
    year: 2018,
    genre: 'Action',
    rating: 7.3,
    duration: '2h 14m',
    poster:
      'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    description:
      'A new king must protect his nation while facing a powerful challenger.'
  },
  {
    id: 11,
    title: 'Guardians of the Galaxy',
    year: 2014,
    genre: 'Adventure',
    rating: 8.0,
    duration: '2h 1m',
    poster:
      'https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
    description:
      'A group of unlikely heroes joins together to protect the galaxy.'
  },
  {
    id: 12,
    title: 'Top Gun: Maverick',
    year: 2022,
    genre: 'Drama',
    rating: 8.2,
    duration: '2h 11m',
    poster:
      'https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    description:
      'A legendary pilot returns to train a new generation of elite aviators.'
  }
]

function Home() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [watchlist, setWatchlist] = useState([])

  const genres = ['All', ...new Set(moviesData.map((movie) => movie.genre))]

  const filteredMovies = useMemo(() => {
    return moviesData.filter((movie) => {
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchesGenre =
        genre === 'All' || movie.genre === genre

      return matchesSearch && matchesGenre
    })
  }, [search, genre])

  function toggleWatchlist(movie) {
    setWatchlist((current) => {
      const exists = current.some((item) => item.id === movie.id)

      if (exists) {
        return current.filter((item) => item.id !== movie.id)
      }

      return [...current, movie]
    })
  }

  return (
    <main>
      <section className="hero">
        <div>
          <span className="hero-label">FEATURED TONIGHT</span>

          <h2>Discover stories worth watching.</h2>

          <p>
            Explore popular movies, discover new favorites,
            and build your personal watchlist.
          </p>

          <button
            className="hero-button"
            onClick={() => setSelectedMovie(moviesData[0])}
          >
            Explore Featured Movie
          </button>
        </div>

        <img
          src={moviesData[0].poster}
          alt={moviesData[0].title}
        />
      </section>

      <section className="controls">
        <SearchBar
          onSearch={setSearch}
        />

        <div className="filters">
          {genres.map((item) => (
            <button
              key={item}
              className={genre === item ? 'active' : ''}
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="section-heading">
        <div>
          <h2>Explore Movies</h2>
          <p>{filteredMovies.length} movies available</p>
        </div>

        <div className="watchlist-count">
          ❤️ {watchlist.length} saved
        </div>
      </section>

      <MovieGrid
        movies={filteredMovies}
        onSelect={setSelectedMovie}
        watchlist={watchlist}
        onToggleWatchlist={toggleWatchlist}
      />

      {selectedMovie && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedMovie(null)}
        >
          <section
            className="movie-details"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
            />

            <div>
              <button
                className="close-button"
                onClick={() => setSelectedMovie(null)}
              >
                ×
              </button>

              <span className="detail-genre">
                {selectedMovie.genre}
              </span>

              <h2>{selectedMovie.title}</h2>

              <div className="movie-meta">
                ⭐ {selectedMovie.rating}
                <span>•</span>
                {selectedMovie.year}
                <span>•</span>
                {selectedMovie.duration}
              </div>

              <p>{selectedMovie.description}</p>

              <button
                className="watchlist-button"
                onClick={() =>
                  toggleWatchlist(selectedMovie)
                }
              >
                {watchlist.some(
                  (movie) => movie.id === selectedMovie.id
                )
                  ? '❤️ Remove from Watchlist'
                  : '♡ Add to Watchlist'}
              </button>
            </div>
          </section>
        </div>
      )}

      {watchlist.length > 0 && (
        <section className="watchlist-section">
          <h2>My Watchlist</h2>

          <div className="watchlist-items">
            {watchlist.map((movie) => (
              <button
                key={movie.id}
                onClick={() => setSelectedMovie(movie)}
              >
                {movie.title}
              </button>
            ))}
          </div>
        </section>
      )}

      <footer>
        <p>Movie Explorer • Built with React</p>
      </footer>
    </main>
  )
}

export default Home