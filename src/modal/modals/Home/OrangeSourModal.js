import React from 'react';
import {useOrangeSourModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeSour} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import OrangeModalCloseButton from '../../../components/home/oranges/OrangeModalCloseButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeSourModal = () => {
  const {isModalOpen, closeModal} = useOrangeSourModal();
  const walk = ORANGES_LIST[6].walk;
  const maxWalk = ORANGES_LIST[6].maxWalk;

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeSour width="100" height="100" />
        <Subhead_long3>산뜻하고 새콤한 맛 청견</Subhead_long3>
        <Body_long1>
          새콤함이 특징인 청견은 감귤과 오렌지의 교배종으로, 감귤보다 큰 크기에
          오렌지보다 얇은 껍질과 풍부한 과즙을 가지고 있습니다.
        </Body_long1>
        <OrangeModalProgressBar walk={walk} maxWalk={maxWalk} />
        <OrangeModalCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeSourModal;
