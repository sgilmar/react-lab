import { useState, useRef, useMemo } from 'react'
import { searchMovies } from "../services/movies.js";

export function useMovies({ movie, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearchMovie = useRef(movie)

  const getMovies = useMemo( () => {
    return async () => {
      if (movie === previousSearchMovie.current) return

      try {
        setLoading(true)
        setError(null)
        previousSearchMovie.current = movie
        const newMovies = await searchMovies({ movie })
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  },[movie])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
