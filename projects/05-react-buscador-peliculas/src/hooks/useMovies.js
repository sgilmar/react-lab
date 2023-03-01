import { useState, useRef, useMemo, useCallback } from 'react'
import { searchMovies } from "../services/movies.js";

export function useMovies({ movie, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearchMovie = useRef(movie)

  const getMovies = useCallback(async ({ movie }) => {
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
  },[])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
