import React from 'react';
import {useOrangeMtModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeMt} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeMtModal = () => {
  const {isModalOpen, closeModal} = useOrangeMtModal();
  const maxWalk = ORANGES_LIST[4].maxWalk;

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeMt width="100" height="100" />
        <Subhead_long3>한라산을 닮은 모양 한라봉</Subhead_long3>
        <Body_long1>
          꼭지가 튀어나온 모양이 꼭 한라산같은 한라봉은 과육이 부드럽고, 과즙이
          풍부하며 당도가 매우 높은 것이 특징이랍니다.
        </Body_long1>
        <OrangeModalProgressBar maxWalk={maxWalk} />
        <ModalButton onPress={closeModal} text={'닫기'} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeMtModal;
