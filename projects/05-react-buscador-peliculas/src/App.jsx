import './App.css'
import {Movies} from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js";
import {useSearch} from "./hooks/useSearch.js";

function App() {
  const { movie, setMovie, error } = useSearch()
  const { movies, getMovies } = useMovies({ movie })

  // get form inputs when there are many
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(movie)
    getMovies()
  }

  const handleChange = (event) => {
    const newMovie = event.target.value
    if (newMovie.startsWith(' ')) return
    setMovie(newMovie)
  }

  return (
    <div className='page-movies'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/*<input ref={inputRef} type='text' placeholder='Avengers, Hulk, Star Wars...'/>*/}
          <input
            onChange={handleChange}
            value={movie}
            type='text'
            name='movie'
            placeholder='Avengers, Hulk, Star Wars...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
          <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
