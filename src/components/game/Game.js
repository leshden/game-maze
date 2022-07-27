import Header from '../header/Header';
import Board from '../board/Board';
import Steps from '../steps/Steps';
import './Game.css';

const Game = () => {
  return (
    <>
      <Header />
      <main className = 'main-container'>
        <Board />
        <Steps />
      </main>
    </>
  )
}

export default Game;
