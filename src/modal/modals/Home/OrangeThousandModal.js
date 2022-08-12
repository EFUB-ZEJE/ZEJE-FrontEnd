import React from 'react';
import {useOrangeThousandModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeThousand} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';

const OrangeThousandModal = () => {
  const {isModalOpen, closeModal} = useOrangeThousandModal();
  const walk = ORANGES_LIST[7].walk;
  const maxWalk = ORANGES_LIST[7].maxWalk;

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeThousand width="100" height="100" />
        <Subhead_long3>천리까지 퍼지는 향 천혜향</Subhead_long3>
        <Body_long1>
          천혜향은 천리까지 그 향이 퍼진다고 해 이런 이름이 붙었다고 합니다.
          이름처럼 진한 향과 얇고 매끈한 껍질, 높은 당도가 특징입니다.
        </Body_long1>
        <OrangeModalProgressBar walk={walk} maxWalk={maxWalk} />
        <ModalButton onPress={closeModal} text={'닫기'} />
      </Column>
    </ModalSheet>
  );
};

export default OrangeThousandModal;
