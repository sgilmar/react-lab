export const getRandomImage = async (threeWords) => {
  const res = await fetch(`https://cataas.com/cat/says/${threeWords}?json=true`)
  const data = await res.json()
  const { url } = data
  return url
}
