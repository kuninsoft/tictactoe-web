import './App.scss'
import Game from './pages/Game'

function App() {

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe gRPC</h1>
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <p>By Sviatoslav Kunynets, 2025</p>
      </footer>
    </>
  )
}

export default App
