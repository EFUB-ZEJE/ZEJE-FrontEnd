import React from 'react';
import {useOrangeMandarinModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeMandarin} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {usePedometer} from '../../../feature/pedometer/recoil/usePedometer';
import {useFruitBoxPoint} from '../../../data/recoil/fruitBox/hooks/useFruitBoxPoint';
import {useOrange} from '../../../data/recoil/oranges/hooks/useOrange';
import {useFocusedOrangeOrder} from '../../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {ORANGES_LIST} from '../../../components/home/oranges/Orange';

const OrangeMandarinModal = () => {
  const {isModalOpen, closeModal} = useOrangeMandarinModal();
  const maxWalk = ORANGES_LIST[3].maxWalk;
  const {stepCount} = usePedometer();
  const {addFruitBoxPoint} = useFruitBoxPoint();
  const {deleteOrangeList} = useOrange();
  const {focusedOrangeOrder} = useFocusedOrangeOrder();

  const orangeToPoint = () => {
    addFruitBoxPoint({maxWalk: maxWalk});
    closeModal();
    deleteOrangeList(focusedOrangeOrder);
  };

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeMandarin width="100" height="100" />
        <Subhead_long3>제주 대표 감귤 온주</Subhead_long3>
        <Body_long1>
          감귤 하면 떠오르는 대표 품종인 온주는 껍질이 얇고 쉽게 벗겨져 생과로
          가장 많이 먹는 품종입니다.
        </Body_long1>
        <OrangeModalProgressBar maxWalk={maxWalk} />
        {stepCount > maxWalk && (
          <ModalButton onPress={() => orangeToPoint()} text={'획득하기'} />
        )}
        <ModalButton onPress={closeModal} text={'닫기'} white />
      </Column>
    </ModalSheet>
  );
};

export default OrangeMandarinModal;
