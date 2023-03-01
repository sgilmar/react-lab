import { useState } from 'react'
import {searchMovies} from "../services/movies.js";

export function useMovies({ movie }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await searchMovies({ movie })
    setMovies(newMovies)
  }

  return { movies, getMovies }
}
