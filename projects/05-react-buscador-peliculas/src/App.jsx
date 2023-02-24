import './App.css'
import {Movies} from "./components/Movies.jsx";
import {useMovies} from "./hooks/useMovies.js";

function App() {
  const { movies } = useMovies()

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
