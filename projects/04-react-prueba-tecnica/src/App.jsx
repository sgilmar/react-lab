import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'
import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        { fact && <p> { fact }</p> }
        { imageURL && <img src={ imageURL } alt={ `Image extracted using first three words for ${fact}` } /> }
      </section>
    </main>
  )
}
