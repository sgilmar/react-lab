import { useState, useRef } from 'react'
import { searchMovies } from "../services/movies.js";

export function useMovies({ movie }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearchMovie = useRef(movie)

  const getMovies = async () => {
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

  return { movies, getMovies, loading }
}
