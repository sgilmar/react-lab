import { CAT_ENDPOINT_RANDOM_FACT } from '../constants.js'

export const getRandomFact = async () => {
  let res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  let data = await res.json()
  const { fact } = data
  return fact
}
