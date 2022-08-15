import {View, Text} from 'react-native';
import React from 'react';
import font from '../../../styles/font';
import styled from 'styled-components';
import {palette, theme} from '../../../styles/theme';
import SvgIcon from '../../../components/common/SvgIcon';
import {SizedBox} from '../../../components';
import BottomSheet from '../../../components/common/BottomSheet';
import {useRecoilState} from 'recoil';
import {FoundEVstationModalState} from '../../recoil/modalStates';
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

export default function FoundEVstationModal() {
  const [modalVisible, setModalVisible] = useRecoilState(
    FoundEVstationModalState,
  );
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height="78px">
        <font.title.Subhead3 color={theme.colors.main}>
          주변의 전기차 충전소를 찾아보세요!
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
