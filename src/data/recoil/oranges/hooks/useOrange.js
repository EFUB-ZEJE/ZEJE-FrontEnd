import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {getData, LEFT_FLOWERS} from '../../../LocalStorage';
import {useLeftFlowers} from '../../fruitBox/hooks/useLeftFlowers';
import {orangesState} from '../states/orangesState';

export const useOrange = () => {
  const [orange, setOrange] = useRecoilState(orangesState);
  const [howMuchLeft, setHowMuchLeft] = useState(0);
  const {minusLeftFlowers} = useLeftFlowers();

  const getLeft = async () => {
    const cnt = await getData(LEFT_FLOWERS);
    if (!cnt) setHowMuchLeft(0);
    else setHowMuchLeft(cnt);
  };

  // 오렌지 삭제하기, 남은 꽃이 꽃봉오리 있으면 불러오기
  const deleteOrangeList = order => {
    getLeft();
    if (howMuchLeft == 0) {
      setOrange({
        ...orange,
        [order]: {
          name: '',
          maxWalk: 0,
        },
      });
    } else {
      setOrange({
        ...orange,
        [order]: {
          name: 'OrangeFlower',
          maxWalk: 100,
        },
      });
      minusLeftFlowers();
    }
  };

  return {
    orange,
    setOrange,
    deleteOrangeList,
  };
};
