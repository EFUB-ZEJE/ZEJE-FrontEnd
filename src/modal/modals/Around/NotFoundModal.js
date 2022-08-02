import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../components/common/BottomSheet';
import font from '../../../styles/font';
import {palette, theme} from '../../../styles/theme';
import SvgIcon from '../../../components/common/SvgIcon';
import {SizedBox} from '../../../components';

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

export default function NotFound_explainModal() {
  modalVisible = true;
  setModalVisible = () => console.log(test);
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height="228px">
        <SvgIcon name="NotFound" size={'130px'} />
        <font.title.Subhead3 color={theme.colors.main}>
          주위에 친환경 스팟이 없어요.
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          다른 위치로 이동해보세요.
        </font.body.Body1>
      </ModalContainer>
    </BottomSheet>
  );
}
