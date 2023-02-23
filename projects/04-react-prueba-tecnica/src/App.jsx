import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
// const CAT_ENDPOINT_FIRST_WORD = `https://cataas.com/cat/says/${firtWord}`

export function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  const getRandomFact = () => {
    // Recupera un hecho aleatorio de gatos de la primera API
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  // SRP
  useEffect(getRandomFact,[])

  useEffect(() => {
    if (!fact) return

    // Recuperar las tres primeras palabras del hecho
    const threeWords = fact.split(' ', 3).join(' ')
    console.log(threeWords)

    // Muestra una imagen de un gato con las tres primeras palabras
    fetch(`https://cataas.com/cat/says/${threeWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
        console.log(data)
      })
  }, [fact])

  const handleClick = () => {
    getRandomFact()
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
