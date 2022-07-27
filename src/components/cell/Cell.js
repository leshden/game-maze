import { useSelector, useDispatch } from 'react-redux';
import {startGame, isStart, nextStepAsync} from '../../features/game-state/gameStateSlice';
import './Cell.css';

const Cell = ({index}) => {
  const start = useSelector(isStart);
  const dispatch = useDispatch();
  const bgColor = start ? 'RoyalBlue' : 'Thistle'

  const handleClick = () => {
    if(start) {
      console.log('Game Started!');
      return;
    }

    dispatch(nextStepAsync(index));

    console.log(`click cell : ${index}`);
    console.log(`Start Game! - ${start}`);
  }

  return (
    <div role='gridcell' className='cell' onClick={handleClick} style={{ 'backgroundColor': `${bgColor}` }}>
      Cell!
    </div>
  )
}

export default Cell;
