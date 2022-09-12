import {useRecoilState} from 'recoil';
import {pedometerState} from './pedometerState';

export const usePedometer = () => {
  const [stepCount, setStepCount] = useRecoilState(pedometerState);
  return {
    stepCount,
    setStepCount,
  };
};
