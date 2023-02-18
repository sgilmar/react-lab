import {useState} from 'react'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({children, isSelected, updateBoard, index}) => {
  // console.log('isSelected: ', isSelected)
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    // with index we know where you clicked
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  // Every time you click, it fills up
  const [board, setBoard] = useState(Array(9).fill(null))
  // State to know whose turn it is
  const [turn, setTurn] = useState(TURNS.X)
  // State winner
  // null = no win
  // false = tie
  // true = win
  const [winner, setWinner] = useState(null)
  const checkWinner = (boardToCheck) => {
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
    // 4) Check who has won
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
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
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
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

      {
        winner != null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
