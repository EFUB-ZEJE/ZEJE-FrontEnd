import React from 'react';
import styled from 'styled-components';
import {
  useUnRegisterCheckModal,
  useUnRegisterDoneModal,
} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import ModalButton from '../../../components/home/ModalButton';
import {Subhead3} from '../../../styles/font';
import AuthService from '../../../services/AuthService';

export default function UnRegisterCheckModal() {
  const {isModalOpen, closeModal} = useUnRegisterCheckModal();
  const {openModal: openUnRegisterDoneModal} = useUnRegisterDoneModal();

  const unRegister = () => {
    AuthService.unRegister()
      .then(res => {
        if (res.data == '유저 탈퇴처리 완료') {
          closeModal();
          openUnRegisterDoneModal();
        }
      })
      .catch(err => console.error('unregister error:', err));
  };

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <ModalContainer>
        <Subhead3>정말로 탈퇴하시겠어요?</Subhead3>
        <Row>
          <ModalButton
            onPress={() => {
              unRegister();
            }}
            text={'예'}
            white
            width={'110px'}
            outline
          />
          <ModalButton onPress={closeModal} text={'아니요'} width={'110px'} />
        </Row>
      </ModalContainer>
    </ModalSheet>
  );
}
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  padding: 16px;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 232px;
`;
