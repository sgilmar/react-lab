import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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
        {
          hasMovies
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <p>{movie.Year}</p>
                      <img src={movie.Poster} />
                    </li>
                  ))
                }
              </ul>
            )
            :
            (
              <p>No se han encontrado películas para esta búsqueda</p>
            )
        }
      </main>
    </div>
  )
}

export default App
