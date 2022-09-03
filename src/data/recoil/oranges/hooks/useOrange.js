import {useRecoilState} from 'recoil';
import {orangesState} from '../states/orangesState';

export const useOrange = () => {
  const [orange, setOrange] = useRecoilState(orangesState);

  const deleteOrangeList = order => {
    setOrange({
      ...orange,
      [order]: {
        name: '',
        maxWalk: 0,
      },
    });
  };

  return {
    orange,
    setOrange,
    deleteOrangeList,
  };
};
