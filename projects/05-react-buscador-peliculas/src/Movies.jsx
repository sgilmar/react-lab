function ListOfMovies({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}/>
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResult() {
  return (
    <p>No se han encontrado películas para esta búsqueda</p>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ?
      <ListOfMovies movies={movies}/>
      :
      <NoMoviesResult/>
  )
}
