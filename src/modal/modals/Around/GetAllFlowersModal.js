import {View, Text} from 'react-native';
import React from 'react';

import font from '../../../styles/font';
import {palette, theme} from '../../../styles/theme';
import SvgIcon from '../../../components/common/SvgIcon';
import {SizedBox} from '../../../components';
import BottomSheet from '../../../components/common/BottomSheet';

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

export default function GetAllFlowersModal() {
  modalVisible = true;
  setModalVisible = () => console.log(test);
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height="196px">
        <SvgIcon name="NotFound" size={'130px'} />
        <SizedBox height={16} />
        <font.title.Subhead3 color={theme.colors.main}>
          10개의 꽃을 모두 받았어요!
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
