import {View, Text} from 'react-native';
import React from 'react';
import {BottomSheet} from '../../../components';
import styled from 'styled-components';
import font from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
import {useRecoilState} from 'recoil';
import {ArriveSpotModalState} from '../../recoil/modalStates';
import SpotDetail from '../../../components/Around/maps/SpotDetail';
import {CommonButton} from '../../../components';
import SizedBox from '../../../components';
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  margin-top: 16px;
`;

const _handleBtnClick = () => {
  console.log('꽃 1개 받기');
};
export default function ArriveSpotModal({spotInfo, navigation}) {
  const [modalVisible, setModalVisible] = useRecoilState(ArriveSpotModalState);
  console.log('ArriveSpotModal');
  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height={'196px'}>
        <font.title.Subhead3 color={theme.colors.main}>
          친환경 스팟에 도착했습니다!
        </font.title.Subhead3>
        <SpotDetail spotInfo={spotInfo} navigation={navigation} />
        <CommonButton text="꽃 1개받기" onPress={_handleBtnClick} />
      </ModalContainer>
    </BottomSheet>
  );
}
