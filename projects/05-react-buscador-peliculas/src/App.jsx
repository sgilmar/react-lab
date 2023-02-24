import './App.css'

function App() {
  return (
    <div className='page-movies'>
      <h1>Buscador de Películas</h1>

      <header>
        <form className='form'>
          <input type='text' placeholder='Avengers, Hulk, Star Wars...'/>
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        Resultados de buscar películas...
      </main>
    </div>
  )
}

export default App
