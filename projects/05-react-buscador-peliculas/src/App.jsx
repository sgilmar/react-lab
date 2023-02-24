import './App.css'
import {Movies} from "./Movies.jsx";
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search

  return (
    <div className='page-movies'>
      <h1>Buscador de Películas</h1>

      <header>
        <form className='form'>
          <input type='text' placeholder='Avengers, Hulk, Star Wars...'/>
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
