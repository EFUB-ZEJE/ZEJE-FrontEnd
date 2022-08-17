import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../components/common/BottomSheet';
import styled from 'styled-components';

import {PlaceDetailModalState} from '../../recoil/modalStates';
import {useRecoilState} from 'recoil';

import font from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
  padding-bottom: 8px;
`;

export default function PlaceDetailModal({
  spotInfo,
  // 단위 :km
}) {
  const [modalVisible, setModalVisible] = useRecoilState(PlaceDetailModalState);
  return (
    <BottomSheet modalVisible={true} setModalVisible={setModalVisible}>
      <ModalContainer height={'132px'}>
        <font.title.Subhead3>{spotInfo.loadName}</font.title.Subhead3>
        <font.body.Body1>{spotInfo.start}</font.body.Body1>
        <font.body.Caption color={palette.gray300}>
          {spotInfo.length} km
        </font.body.Caption>
        <font.title.Subhead3 color={theme.colors.main}>
          0시간 00분 소요 예상{' '}
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
