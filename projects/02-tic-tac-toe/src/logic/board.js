import {WINNER_COMBOS} from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo

    if (
      boardToCheck[a] && // 0: x u o
      boardToCheck[a] === boardToCheck[b] && // x->x u o->o
      boardToCheck[a] === boardToCheck[c] // x->x u o->o
    ) {
      return boardToCheck[a]
    }
  }
  // No win
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
