import './Board.css';
import Cell from '../cell/Cell';

const Board = () => {

  const columns = 3;
  const cells = Array(columns * columns).fill(0);

  return (
    <div className='board-container'>
      <div role='grid' className='board' style={{ 'gridTemplateColumns': `repeat(${columns}, 1fr)` }}>
        {
          cells.map((item, index) => <Cell key={index}/>)
        }
      </div>
    </div>
  )
}

export default Board;
