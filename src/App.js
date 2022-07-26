import React from 'react';
import { Counter } from './features/counter/Counter';
import Game from './components/game/Game';

function App() {
  return (
    <div className="App">
      <Game />
      <Counter />
    </div>
  );
}

export default App;
