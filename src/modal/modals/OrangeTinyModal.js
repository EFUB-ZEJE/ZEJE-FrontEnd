import React from 'react';
import {useOrangeTinyModal} from '../recoil/useModals';
import ModalSheet from '../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeTiny} from '../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../styles/font';
import OrangeModalCloseButton from '../../components/home/oranges/OrangeModalCloseButton';

const OrangeTinyModal = () => {
  const {isModalOpen, closeModal} = useOrangeTinyModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeTiny width="100" height="100" />
        <Subhead_long3>작고 귀여운 금귤</Subhead_long3>
        <Body_long1>
          낑깡이라고도 불리는 금귤은 껍질째 먹는 작은 귤입니다. 특이하게도
          껍질은 달고 과육에서 톡 쏘는 신맛이 납니다.
        </Body_long1>
        <OrangeModalCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeTinyModal;
