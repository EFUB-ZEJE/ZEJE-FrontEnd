import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../compuseOrangeMandarinModalonents/common/BottomSheet';
import {useRecoilState} from 'recoil';
import {ArriveSpotModalState} from '../../recoil/modalStates';
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

export default function ArriveSpotModal() {
  const {modalVisible, setModalVisible} = useRecoilState(ArriveSpotModalState);

  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer>특정 스팟에 도착했어요!</ModalContainer>
    </BottomSheet>
  );
}
