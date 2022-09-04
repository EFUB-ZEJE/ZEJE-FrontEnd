import React from 'react';
import styled from 'styled-components';
import {Subhead3} from '../../../../styles/font';
import {useToSNotCheckedModal} from '../../../recoil/useModals';

export default function ToSNotCheckedModal() {
  const {isModalOpen, closeModal} = useToSNotCheckedModal();
  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <ModalContainer>
        <Subhead3>이용 약관에 동의해 주세요.</Subhead3>
      </ModalContainer>
    </ModalSheet>
  );
}
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
