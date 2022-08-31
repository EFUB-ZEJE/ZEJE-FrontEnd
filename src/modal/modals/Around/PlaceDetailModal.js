import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../components/common/BottomSheet';
import styled from 'styled-components';

import {PlaceDetailModalState} from '../../recoil/modalStates';
import {useRecoilState} from 'recoil';
import {SizedBox} from '../../../components';
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
  // 20km/h 로 주행 가정
  const calcTime = km => {
    const taked = km / 20;
    const hour = Math.floor(taked);
    const minutes = Math.floor((taked - hour) * 60);

    if (hour == 0) {
      return String(minutes) + '분';
    }

    return String(hour) + '시간 ' + String(minutes) + '분';
  };

  const [modalVisible, setModalVisible] = useRecoilState(PlaceDetailModalState);
  return (
    <BottomSheet modalVisible={true} setModalVisible={setModalVisible}>
      <ModalContainer height={'132px'}>
        <font.title.Subhead3>{spotInfo.loadName}</font.title.Subhead3>
        <font.body.Body1>{spotInfo.start}</font.body.Body1>
        <font.body.Caption color={palette.gray300}>
          {spotInfo.length} km
        </font.body.Caption>
        <SizedBox height={9} />
        <font.title.Subhead3 color={theme.colors.main}>
          {calcTime(spotInfo.length)} 소요 예상{' '}
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
