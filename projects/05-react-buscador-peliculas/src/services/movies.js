const API_KEY = 'c879528b'

export const searchMovies = async ({ movie }) => {
  if (movie !== '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster
    }))
  } catch (error) {
    console.log(error)
    throw new Error('Error searching movies')
  }
}
