import {useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  getData,
  LEFT_FLOWERS,
  ORANGE_LIST,
  saveData,
} from '../../../LocalStorage';
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

  const storeOrange = async orange => {
    setOrange(orange);
    await saveData(ORANGE_LIST, orange);
  };

  // 오렌지 삭제하기, 남은 꽃이 꽃봉오리 있으면 불러오기
  const deleteOrangeList = async order => {
    getLeft();
    if (howMuchLeft == 0) {
      storeOrange({
        ...orange,
        [order]: {
          name: '',
          maxWalk: 0,
        },
      });
    } else {
      storeOrange({
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
    storeOrange,
    deleteOrangeList,
  };
};
