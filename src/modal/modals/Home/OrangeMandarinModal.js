import React from 'react';
import {useOrangeMandarinModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeMandarin} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeMandarinModal = () => {
  const {isModalOpen, closeModal} = useOrangeMandarinModal();
  const maxWalk = ORANGES_LIST[3].maxWalk;

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
        <ModalButton onPress={closeModal} text={'닫기'} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeMandarinModal;
