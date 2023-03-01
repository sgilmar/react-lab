import './App.css'
import {Movies} from './components/Movies.jsx';
import {useMovies} from './hooks/useMovies.js';
import {useSearch} from './hooks/useSearch.js';
import {useCallback, useState} from 'react';
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false);

  const { movie, setMovie, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ movie, sort })

  const debounceGetMovies = useCallback(
    debounce(movie => {
      getMovies({ movie })
    }, 500)
    , []
  )

  // get form inputs when there are many
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(movie)
    getMovies({ movie })
  }

  const handleChange = (event) => {
    const newMovie = event.target.value
    if (newMovie.startsWith(' ')) return

    setMovie(newMovie)
    debounceGetMovies(newMovie)
  }

  const handleSort = () => {
    setSort(!sort)
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
          <input type='checkbox' onChange={handleSort} checked={sort}  />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
