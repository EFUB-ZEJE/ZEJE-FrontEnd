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
  padding-bottom: 8px;
`;

/*
spotInfo
{
  name: "~~",
  location:"~~"
}

*/

export default function DistanceToSpotModal({
  spotInfo,
  navigation,
  dist_between, // 단위 :km
}) {
  const [modalVisible, setModalVisible] = useRecoilState(
    DistanceToSpotModalState,
  );

  const setDistanceUnit = dist_between => {
    if (dist_between <= 1) {
      //1km미만이면 m단위로 보여줌
      return String(Math.round(dist_between * 1000)) + 'm';
    } else {
      //1km 이상이면 km단위로 보여줌 (소수 둘째자리)
      return String(Math.round(dist_between * 100) / 100) + 'km';
    }
  };

  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height={'132px'}>
        <SpotDetail spotInfo={spotInfo} navigation={navigation} />
        <font.title.Subhead3 color={theme.colors.main}>
          현재위치에서 {setDistanceUnit(dist_between)} 떨어져 있습니다.{' '}
        </font.title.Subhead3>
      </ModalContainer>
    </BottomSheet>
  );
}
