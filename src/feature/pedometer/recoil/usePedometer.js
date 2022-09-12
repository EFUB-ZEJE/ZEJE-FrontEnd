import {useRecoilState} from 'recoil';
import {saveStepCount} from '../../../data/LocalStorage';
import {pedometerState} from './pedometerState';

export const usePedometer = () => {
  const [stepCount, setStepCount] = useRecoilState(pedometerState);

  const storeStepCount = async step => {
    setStepCount(step);
    await saveStepCount(step);
  };

  return {
    stepCount,
    setStepCount,
    storeStepCount,
  };
};
