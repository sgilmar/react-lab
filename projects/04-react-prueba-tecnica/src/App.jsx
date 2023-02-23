import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App () {
  const [fact, setFact] = useState()

  useEffect(() => {
    // Recupera un hecho aleatorio de gatos de la primera API
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        // Recuperar la primera palabra del hecho
        const firtWord = fact.split(" ", 1)
        console.log(firtWord)
      })
  }, [])

  // useEffect( () => {
  //   async function getRandomFetch() {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     const data = await res.json()
  //     setFact(data.fact)
  //   }
  //   getRandomFetch()
  // },[])

  return (
    <main>
      <h1>App de gatitos</h1>
      { fact && <p> { fact }</p> }
    </main>
  )
}
