import React from 'react';
import {Text} from 'native-base';
import {useOrangeInfoModal} from '../../recoil/modal/useModals';
import ModalSheet from './ModalSheet';

const OrangeInfoModal = () => {
  const {isModalOpen, closeModal} = useOrangeInfoModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Text>귤 종류</Text>
    </ModalSheet>
  );
};

export default OrangeInfoModal;
