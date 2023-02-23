import { useEffect, useState } from 'react'
import { getRandomFact } from './services/facts.js'
import { getRandomImage } from './services/images.js'
import { CAT_PREFIX_IMAGE_URL } from './constants.js'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

// Recupera un hecho aleatorio de gatos de la primera API
  const newRandomFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  // SRP
  useEffect(() => {
    newRandomFact()
  },[])

  useEffect( () => {
    if (!fact) return

    // Recuperar las tres primeras palabras del hecho
    const threeWords = fact.split(' ', 3).join(' ')

    // Muestra una imagen de un gato con las tres primeras palabras
    getRandomImage(threeWords).then(newImage => setImageURL(newImage))
  }, [fact])

  const handleClick = () => {
    newRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        { fact && <p> { fact }</p> }
        { imageURL && <img src={ `${CAT_PREFIX_IMAGE_URL}${imageURL}` } alt={ `Image extracted using first three words for ${fact}` } /> }
      </section>
    </main>
  )
}
