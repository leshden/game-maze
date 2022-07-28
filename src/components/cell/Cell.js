import { useSelector, useDispatch } from 'react-redux';
import {startGame,
        isProcessing,
        isEnding,
        gameStartIndex,
        gameIndex,
        loseGame,
        isLose,
        winGame,
        resetGame,
        gameLoseIndex,
        isWin} from '../../features/game-state/gameStateSlice';
import './Cell.css';

const Cell = ({index}) => {

  const processing = useSelector(isProcessing);
  const ending = useSelector(isEnding);
  const win = useSelector(isWin);
  const lose = useSelector(isLose);

  const startIndex = useSelector(gameStartIndex);
  const stepIndex = useSelector(gameIndex);
  const loseIndex = useSelector(gameLoseIndex);

  const dispatch = useDispatch();

  let bgColor = startIndex === index ? 'RoyalBlue' : 'Thistle'
  let textCell = startIndex === index ? 'Старт' : ''

  if (win) {
    bgColor = (index === stepIndex) ? 'Olive' : 'Thistle';
    textCell = (index === stepIndex) ? 'Верно' : '';
  }

  if (lose) {
    bgColor = (index === stepIndex) ? 'Olive' : (index === loseIndex) ? 'OrangeRed' : 'Thistle';
    textCell = (index === stepIndex) ? 'Верное' : (index === loseIndex) ? 'Выбрали' : '';
  }

  const handleEndGame = () => {
    console.log(`index : ${index} stepIdex: ${stepIndex}`)
    if (index === stepIndex) {
      dispatch(winGame());
    } else {
      dispatch(loseGame(index));
    }
  }

  const handleClick = () => {

    if(win || lose) {
      dispatch(resetGame());
      return;
    }


    if (ending) {
      console.log('End game!');
      handleEndGame();
      return;
    }

    if(processing) {
      console.log('Game Started!');
      return;
    }

    dispatch(startGame(index));

    console.log(`click cell : ${index}`);
  }

  return (
    <div role='gridcell' className='cell' onClick={handleClick} style={{ 'backgroundColor': `${bgColor}` }}>
      {textCell}
    </div>
  )
}

export default Cell;
