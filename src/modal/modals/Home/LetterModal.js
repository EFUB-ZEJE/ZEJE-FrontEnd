import React from 'react';
import {useLetterModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalCloseButton from '../../../components/home/oranges/ModalCloseButton';
import {palette} from '../../../styles/theme';

const LetterModal = () => {
  const {isModalOpen, closeModal} = useLetterModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={7} alignItems={'center'} w={'100%'} my={2}>
        <Subhead_long3>TO. 제주 제로웨이스트 여행자님</Subhead_long3>
        <Body_long1 style={{color: palette.bluegray}}>
          제주를 지키는 제로웨이스트 여행에 동참해 주셔서 감사합니다.{'\n'}
          감귤이 부화하는 데 필요한 걸음 수의 앞자리 숫자는 그 품종이 가장
          맛있는 때인 달을 의미한답니다. 여행 중 제철인 감귤을 만나게 된다면
          놓치지 말고 시도해 보세요!
        </Body_long1>
        <ModalCloseButton onPress={closeModal} />
      </Column>
    </ModalSheet>
  );
};

export default LetterModal;
