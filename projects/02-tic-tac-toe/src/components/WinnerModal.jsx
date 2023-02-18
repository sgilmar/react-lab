import {Square} from "./Square.jsx";

export const WinnerModal = ({winner, resetGame}) => {
  if (winner === null) return null

  const winnerMessage = winner === false ? 'Empate' : 'Ganó'

  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {winnerMessage}
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