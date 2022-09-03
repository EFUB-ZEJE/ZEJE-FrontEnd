import {useRecoilState} from 'recoil';
import {usePedometer} from '../../../../feature/pedometer/recoil/usePedometer';
import {FruitService} from '../../../../services/FruitService';
import {fruitBoxPointState} from '../states/fruitBoxPointState';

export const useFruitBoxPoint = () => {
  const [fruitBoxPoint, setFruitBoxPoint] = useRecoilState(fruitBoxPointState);
  const {stepCount, setStepCount} = usePedometer();

  // 열매 획득하기
  const addFruitBoxPoint = ({maxWalk}) => {
    FruitService.setFruitBoxPoint()
      .then(res => {
        setStepCount(stepCount - maxWalk);
        setFruitBoxPoint(res.data.fruitBox);
      })
      .catch(err => console.error('orangeToPoint error : ', err));
  };

  return {fruitBoxPoint, setFruitBoxPoint, addFruitBoxPoint};
};
