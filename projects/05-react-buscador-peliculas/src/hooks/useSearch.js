import {useEffect, useState} from "react";

export function useSearch() {
  const [movie, setMovie] = useState('')
  const [error, setError] = useState(null)

  // Input validation
  useEffect(() => {
    if (movie === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (movie.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return;
    }

    if (movie.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return;
    }

    setError(null)
  },[movie])

  return { movie, setMovie, error }
}
