import {useRecoilState} from 'recoil';
import {orangesState} from '../states/orangesState';

export const useOrange = () => {
  const [orange, setOrange] = useRecoilState(orangesState);

  return {
    orange,
    setOrange,
  };
};
