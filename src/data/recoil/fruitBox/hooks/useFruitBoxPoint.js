import {useRecoilState} from 'recoil';
import {fruitBoxPointState} from '../states/fruitBoxPointState';

export const useFruitBoxPoint = () => {
  const [fruitBoxPoint, setFruitBoxPoint] = useRecoilState(fruitBoxPointState);

  return {fruitBoxPoint, setFruitBoxPoint};
};
