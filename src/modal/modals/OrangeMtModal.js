import React from 'react';
import {useOrangeMtModal} from '../recoil/useModals';
import ModalSheet from '../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeMt} from '../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../styles/font';
import OrangeModalCloseButton from '../../components/home/oranges/OrangeModalCloseButton';

const OrangeMtModal = () => {
  const {isModalOpen, closeModal} = useOrangeMtModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeMt width="100" height="100" />
        <Subhead_long3>한라산을 닮은 모양 한라봉</Subhead_long3>
        <Body_long1>
          꼭지가 튀어나온 모양이 꼭 한라산같은 한라봉은 과육이 부드럽고, 과즙이
          풍부하며 당도가 매우 높은 것이 특징이랍니다.
        </Body_long1>
        <OrangeModalCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeMtModal;
