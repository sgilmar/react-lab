import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/images.js'
import { CAT_PREFIX_IMAGE_URL } from '../constants.js'

export function useCatImage({ fact }) {
  const [imageURL, setImageURL] = useState()

  useEffect( () => {
    if (!fact) return

    // Recuperar las tres primeras palabras del hecho
    const threeWords = fact.split(' ', 3).join(' ')

    // Muestra una imagen de un gato con las tres primeras palabras
    getRandomImage(threeWords).then(newImage => setImageURL(newImage))
  }, [fact])

  return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}
