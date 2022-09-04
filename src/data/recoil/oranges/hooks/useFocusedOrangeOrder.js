import {useRecoilState} from 'recoil';
import {focusedOrangeOrderState} from '../states/focusedOrangeOrderState';

export const useFocusedOrangeOrder = () => {
  const [focusedOrangeOrder, setFocusedOrangeOrder] = useRecoilState(
    focusedOrangeOrderState,
  );

  return {focusedOrangeOrder, setFocusedOrangeOrder};
};
