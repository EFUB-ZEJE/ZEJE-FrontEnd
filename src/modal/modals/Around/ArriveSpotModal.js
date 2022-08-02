import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../components/common/BottomSheet';

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

export default function ArriveSpotModal() {
  modalVisible = true;
  setModalVisible = () => console.log(test);
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer>dsfds</ModalContainer>
    </BottomSheet>
  );
}
