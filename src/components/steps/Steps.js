import Step from '../step/Step';
import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import {gameSteps, gameStatus, nextRandomStep, endGame, isLastStep} from '../../features/game-state/gameStateSlice';
import './Steps.css';

const Steps = () => {

  const isStepOver = useSelector(isLastStep);
  const steps = useSelector(gameSteps);
  const length = steps.length;
  const status = useSelector(gameStatus);
  const dispatch = useDispatch();

  useEffect(() => {

    if (status === 'idle' || status == 'ending') {
      return;
    }

    if (isStepOver) {
      dispatch(endGame());
      return;
    }

    console.log('gfdgdfg');

    const interval = setInterval(() => {
      dispatch(nextRandomStep());
    }, 2000);

    return () => clearInterval(interval);
}, [status, steps]);


  return (
    <section className='steps-container-main'>
      <h5 className='steps-title'>ШАГИ</h5>
      <div className='steps-container-inner'>
        {
          steps.map((step, index) => {
            const {code} = step;
            return <Step key={index} code={code}/>
          })
        }
      </div>
    </section>
  )
}

export default Steps;
