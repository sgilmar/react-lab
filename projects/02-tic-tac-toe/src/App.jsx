import {useState} from 'react'
import confetti from 'canvas-confetti'

import {Square} from './components/Square'
import {TURNS} from "./constants.js";
import {WinnerModal} from "./components/WinnerModal.jsx";
import {checkWinnerFrom, checkEndGame} from "./logic/board.js";
import {resetGameStorage, saveGameStorage} from "./logic/storage/index.js";

function App() {
  // Every time you click, it fills up
  const [board, setBoard] = useState(() => {
    const boardLocalstorage = window.localStorage.getItem('board')
    return boardLocalstorage ?
      JSON.parse(boardLocalstorage)
      :
      Array(9).fill(null)
  })
  // State to know whose turn it is
  const [turn, setTurn] = useState(() => {
    const turnFromLocalstorage = window.localStorage.getItem('turn')
    return turnFromLocalstorage ?
      JSON.parse(turnFromLocalstorage)
      :
      TURNS.X
  })
  // State winner
  // null = no win | false = tie | true = win
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // 1) Do not update position if there is already something
    if (board[index] || winner) return
    // 2) Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // 3) Update states as board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // console.log('newBoard: ', newBoard)
    // * Save localstorage
    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })
    // 4) Check who has won
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    // 5) Check if game is over
    else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    // actual initial states
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
