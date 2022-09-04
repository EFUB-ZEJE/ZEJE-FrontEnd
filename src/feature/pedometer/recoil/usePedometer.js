import {useRecoilState} from 'recoil';
import {saveStepCount} from '../../../data/LocalStorage';
import {pedometerState} from './pedometerState';

export const usePedometer = () => {
  const [stepCount, setStepCount] = useRecoilState(pedometerState);

  const storeStepCount = async (step, type) => {
    if (type == 'step') {
      setStepCount(prevSteps => prevSteps + 1);
    } else if (type == 'minus') {
      setStepCount(step);
    } else {
    }
    await saveStepCount(step);
  };

  return {
    stepCount,
    setStepCount,
    storeStepCount,
  };
};
