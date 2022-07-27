import Cell from '../cell/Cell';
import './Board.css';

const Board = () => {

  const columns = 3;
  const cells = Array(columns * columns).fill(0);

  return (
    <section className='board-container'>
      <div role='grid' className='board' style={{ 'gridTemplateColumns': `repeat(${columns}, 1fr)` }}>
        {
          cells.map((item, index) => <Cell key={index} index={index} />)
        }
      </div>
    </section>
  )
}

export default Board;
