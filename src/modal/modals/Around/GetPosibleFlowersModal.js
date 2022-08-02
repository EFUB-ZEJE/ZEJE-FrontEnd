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

export default function GetPossibleFlowersModal() {
  modalVisible = true;
  setModalVisible = () => console.log(test);
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height="78px">
        <font.title.Subhead3 color={theme.colors.main}>
          오늘 10 개의 꽃을 받을 수 있어요!
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          친환경 스팟을 선택해주세요
        </font.body.Body1>
      </ModalContainer>
    </BottomSheet>
  );
}
