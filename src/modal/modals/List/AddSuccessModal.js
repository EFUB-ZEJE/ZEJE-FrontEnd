import React from 'react';
import {useAddSuccessModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import font, {Subhead_long3, Body_long1} from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
import {SizedBox} from '../../../components';
import ModalButton from '../../../components/home/ModalButton';

const AddSuccessModal = () => {
  const {isModalOpen, closeModal, openModal} = useAddSuccessModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Subhead_long3>체크리스트 추가</Subhead_long3>
      <SizedBox height={9} />
      <Body_long1 color={palette.bluegray}>
        제로웨이스트 여행을 위한 아이템이 체크리스트에 추가되었습니다.
      </Body_long1>
      <SizedBox height={26} />
      <ModalButton onPress={closeModal} text={'닫기'} />
    </ModalSheet>
  );
};

export default AddSuccessModal;
