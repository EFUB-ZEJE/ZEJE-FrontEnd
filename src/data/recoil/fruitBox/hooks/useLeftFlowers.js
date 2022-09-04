import {useRecoilState} from 'recoil';
import {usePedometer} from '../../../../feature/pedometer/recoil/usePedometer';
import {FruitService} from '../../../../services/FruitService';
import {LEFT_FLOWERS, saveData} from '../../../LocalStorage';

import {leftFlowersState} from '../states/leftFlowersState';

export const useLeftFlowers = () => {
  const [leftFlowers, setLeftFlowers] = useRecoilState(leftFlowersState);

  // 남은 꽃 추가
  const addLeftFlowers = async () => {
    const current = await getData(LEFT_FLOWERS);
    setLeftFlowers(prev => prev + 1);
    if (!current) current = 0;
    await saveData(LEFT_FLOWERS, current + 1);
  };

  // 남은 꽃 사용
  const minusLeftFlowers = async () => {
    const current = await getData(LEFT_FLOWERS);
    setLeftFlowers(prev => prev - 1);
    if (!current) current = 0;
    await saveData(LEFT_FLOWERS, current - 1);
  };
  return {
    leftFlowers,
    setLeftFlowers,
    addLeftFlowers,
    minusLeftFlowers,
  };
};
