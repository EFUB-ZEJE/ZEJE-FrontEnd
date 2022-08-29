import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import BottomSheet from '../../../components/common/BottomSheet';
import font from '../../../styles/font';
import {palette, theme} from '../../../styles/theme';
import SvgIcon from '../../../components/common/SvgIcon';
import {SizedBox} from '../../../components';
import {useRecoilState} from 'recoil';
import {NotFoundModalState} from '../../recoil/modalStates';

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 228px;
`;

export default function NotFoundModal() {
  const [modalVisible, setModalVisible] = useRecoilState(NotFoundModalState);

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
