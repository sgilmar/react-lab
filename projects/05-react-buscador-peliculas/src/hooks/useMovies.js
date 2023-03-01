import { useState } from 'react'
import {searchMovies} from "../services/movies.js";

export function useMovies({ movie }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      const newMovies = await searchMovies({ movie })
      setMovies(newMovies)
      setLoading(true)
      setError(null)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading }
}
