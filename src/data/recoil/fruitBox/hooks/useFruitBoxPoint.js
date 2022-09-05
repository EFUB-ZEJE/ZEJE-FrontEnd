import {useRecoilState} from 'recoil';
import {usePedometer} from '../../../../feature/pedometer/recoil/usePedometer';
import {FruitService} from '../../../../services/FruitService';
import {
  donatedFruitBoxPointState,
  fruitBoxPointState,
} from '../states/fruitBoxPointState';

export const useFruitBoxPoint = () => {
  const [fruitBoxPoint, setFruitBoxPoint] = useRecoilState(fruitBoxPointState);
  const [donatedFruitBoxPoint, setDonatedFruitBoxPoint] = useRecoilState(
    donatedFruitBoxPointState,
  );
  const {stepCount, storeStepCount} = usePedometer();

  // 열매 획득하기
  const addFruitBoxPoint = ({maxWalk}) => {
    FruitService.setFruitBoxPoint()
      .then(res => {
        storeStepCount(stepCount - maxWalk);
        setFruitBoxPoint(res.data.fruitBox);
      })
      .catch(err => console.error('orangeToPoint error : ', err));
  };

  const getAllDonatedPoint = () => {
    FruitService.getDonatedFruitBoxPoint()
      .then(res => {
        setDonatedFruitBoxPoint(res.data.fruitTotal);
      })
      .catch(err => {
        console.error('getDonatedFruitBoxPoint error: ', err);
      });
  };
  return {
    fruitBoxPoint,
    setFruitBoxPoint,
    addFruitBoxPoint,
    donatedFruitBoxPoint,
    getAllDonatedPoint,
  };
};
