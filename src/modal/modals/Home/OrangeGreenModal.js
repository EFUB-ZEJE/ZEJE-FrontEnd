import React from 'react';
import {useOrangeGreenModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeGreen} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeGreenModal = () => {
  const {isModalOpen, closeModal} = useOrangeGreenModal();
  const walk = ORANGES_LIST[2].walk;
  const maxWalk = ORANGES_LIST[2].maxWalk;

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeGreen width="100" height="100" />
        <Subhead_long3>풋풋한 초록빛 청귤</Subhead_long3>
        <Body_long1>
          제주 고유종인 청귤은 12월까지도 파랗다가 3월이 되어서야 주황빛이
          됩니다. 시중에 보이는 덜 익은 귤인 하귤과는 다르다는 사실!
        </Body_long1>
        <OrangeModalProgressBar walk={walk} maxWalk={maxWalk} />
        <ModalButton onPress={closeModal} text={'닫기'} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeGreenModal;
