export const getRandomImage = async (threeWords) => {
  console.log(threeWords)
  const res = await fetch(`https://cataas.com/cat/says/${threeWords}?json=true`)
  const data = await res.json()
  const { url } = data
  console.log(url)
  return url
}
