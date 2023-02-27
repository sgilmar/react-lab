import './App.css'
import {Movies} from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js";
import {useRef} from "react";

function App() {
  const { movies } = useMovies()
  const inputRef = useRef()

  // get form inputs when there are many
  const handleSubmit = (event) => {
    event.preventDefault()
    const { movie } = Object.fromEntries(
      new window.FormData(event.target)
    )
    if (movie !== '') console.log(movie)
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

  return (
    <div className='page-movies'>
      <h1>Buscador de Películas</h1>

      <header>
        <form className='form' onSubmit={handleSubmit}>
          {/*<input ref={inputRef} type='text' placeholder='Avengers, Hulk, Star Wars...'/>*/}
          <input type='text' name='movie' placeholder='Avengers, Hulk, Star Wars...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
          <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
