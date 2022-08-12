import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../../components/common/BottomSheet';
import styled from 'styled-components';
import {DistanceToSpotModalState} from '../../recoil/modalStates';
import {useRecoilState} from 'recoil';
import SpotDetail from '../../../components/Around/maps/SpotDetail';
import font from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;

  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

/*
spotInfo
{
  name: "~~",
  location:"~~"
}

*/

// 유저의 현재위치와 spotInfo 가 들어오면 두 지점의 거리차이 계산하기
export default function DistanceToSpotModal({spotInfo, navigation}) {
  const [modalVisible, setModalVisible] = useRecoilState(
    DistanceToSpotModalState,
  );
  const difference = 100; //단위 : m
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height={'132px'}>
        <SpotDetail spotInfo={spotInfo} navigation={navigation} />
        <font.title.Subhead3 color={theme.colors.main}>
          현재위치에서 {difference}m 떨어져 있습니다.{' '}
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
