import { useSelector, useDispatch } from 'react-redux';
import {startGame, isProcessing, isEnding, gameIndex} from '../../features/game-state/gameStateSlice';
import './Cell.css';

const Cell = ({index}) => {
  const processing = useSelector(isProcessing);
  const ending = useSelector(isEnding);
  const startIndex = useSelector(gameIndex);
  const dispatch = useDispatch();
  const bgColor = startIndex === index ? 'RoyalBlue' : 'Thistle'

  const handleClick = () => {
    if (ending) {
      console.log('End game!');
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
      Cell!
    </div>
  )
}

export default Cell;
