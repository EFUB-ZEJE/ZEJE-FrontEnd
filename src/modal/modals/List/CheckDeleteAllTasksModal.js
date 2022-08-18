import React from 'react';
import {useCheckDeleteAllTasksModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import font, {Subhead_long3, Body_long1} from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
import {SizedBox} from '../../../components';
import {CommonButton} from '../../../components';
import ModalButton from '../../../components/home/ModalButton';
const CheckDeleteAllTasksModal = ({_deleteAllTask}) => {
  const {isModalOpen, closeModal, openModal} = useCheckDeleteAllTasksModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Subhead_long3>전체 삭제</Subhead_long3>
      <SizedBox height={9} />
      <Body_long1 color={palette.bluegray}>
        모든 리스트를 삭제하시겠어요?
      </Body_long1>
      <SizedBox height={26} />
      <ModalButton
        onPress={() => {
          _deleteAllTask();
          closeModal();
        }}
        text={'삭제'}
      />
      <ModalButton onPress={closeModal} text={'취소'} white />
    </ModalSheet>
  );
};

export default CheckDeleteAllTasksModal;
