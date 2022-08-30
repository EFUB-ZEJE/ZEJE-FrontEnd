import {View, Text} from 'react-native';
import React, {useState} from 'react';
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

export default function ArriveSpotModal({
  spotInfo,
  navigation,
  sproutPlaces,
  setSproutPlace,
}) {
  const [modalVisible, setModalVisible] = useRecoilState(ArriveSpotModalState);

  const [isVisited, setIsVisited] = useState(false);
  //console.log(spotInfo);
  const _handleBtnClick = () => {
    console.log('꽃 1개 받기');
    if (spotInfo && spotInfo.isVisited == false) {
      setSproutPlace(prev => {
        var places = prev.slice();
        for (var place of places) {
          if (place.spotId == spotInfo.spotId) {
            console.log(place.name);
            place.isVisited = true;
          }
        }

        return places;
      });

      setIsVisited(true);
    }
  };

  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height={'196px'}>
        <font.title.Subhead3 color={theme.colors.main}>
          친환경 스팟에 도착했습니다!
        </font.title.Subhead3>
        <SpotDetail spotInfo={spotInfo} navigation={navigation} />
        {isVisited ? (
          <CommonButton
            text="이미 꽃을 받은 스팟입니다"
            bgColor={palette.gray200}
            color={palette.gray400}
            onPress={_handleBtnClick}
          />
        ) : (
          <CommonButton
            text="꽃 1개받기"
            onPress={_handleBtnClick}
            bgColor={theme.colors.main}
            color={'white'}
          />
        )}
      </ModalContainer>
    </BottomSheet>
  );
}
