import './App.css'
import {Movies} from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js";
import {useEffect, useRef, useState} from "react";

function App() {
  const { movies } = useMovies()
  const [movie, setMovie] = useState('')
  const [error, setError] = useState(null)

  // const inputRef = useRef()

  // get form inputs when there are many
  const handleSubmit = (event) => {
    event.preventDefault()
    // const { movie } = Object.fromEntries(
    //   new window.FormData(event.target)
    // )
    // if (movie !== '')
    console.log(movie)
  }

  // get the form inputs when there are few
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const fields = new window.FormData(event.target)
  //   const query = fields.get('movie')
  //   console.log(query)
  // }

  // get form inputs when there are few using useRef hook
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const inputEl = inputRef.current
  //   const value = inputEl.value
  //   console.log(value)
  // }

  const handleChange = (event) => {
    const newMovie = event.target.value
    if (newMovie.startsWith(' ')) return
    setMovie(newMovie)
  }

  // Input validation
  useEffect(() => {
    if (movie === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (movie.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return;
    }

    if (movie.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return;
    }

    setError(null)
  },[movie])

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
