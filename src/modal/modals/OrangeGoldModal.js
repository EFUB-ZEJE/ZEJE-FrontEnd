import React from 'react';
import {useOrangeGoldModal} from '../recoil/useModals';
import ModalSheet from '../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeGold} from '../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../styles/font';
import OrangeModalCloseButton from '../../components/home/oranges/OrangeModalCloseButton';

const OrangeGoldModal = () => {
  const {isModalOpen, closeModal} = useOrangeGoldModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeGold width="100" height="100" />
        <Subhead_long3>여왕의 품격, 황금향</Subhead_long3>
        <Body_long1>
          황금향은 여왕과 같은 품위를 지녔다고 해서 이런 이름이 붙었다고 합니다.
          알맹이가 통통하고 신맛이 적으며, 과즙이 풍부합니다.
        </Body_long1>
        <OrangeModalCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeGoldModal;
