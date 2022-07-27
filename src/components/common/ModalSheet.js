import React from 'react';
import {Modal} from 'native-base';
import {StyleSheet} from 'react-native';

export default ModalSheet = ({isModalOpen, closeModal, children}) => {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Modal.Content style={styles.modalContainer}>{children}</Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '70%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 25,
  },
});
