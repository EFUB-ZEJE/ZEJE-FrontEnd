import React from 'react';
import {BottomSheet} from '../../../components';
import styled from 'styled-components';
import font from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
import {useRecoilState} from 'recoil';
import {ArriveSpotModalState} from '../../recoil/modalStates';
import SpotDetail from '../../../components/Around/maps/SpotDetail';
import {CommonButton} from '../../../components';
import {AroundService} from '../../../services/AroundService';
import {useOrange} from '../../../data/recoil/oranges/hooks/useOrange';
import {useFocusedOrangeOrder} from '../../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {ORANGES_LIST} from '../../../components/home/oranges/Orange';
import {useLeftFlowers} from '../../../data/recoil/fruitBox/hooks/useLeftFlowers';

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
  places,
  setSproutPlace,
}) {
  const [modalVisible, setModalVisible] = useRecoilState(ArriveSpotModalState);
  const {orange, storeOrange} = useOrange();
  const {focusedOrangeOrder} = useFocusedOrangeOrder();
  const {addLeftFlowers} = useLeftFlowers();

  const addSprout = () => {
    if (focusedOrangeOrder == 0) {
      addLeftFlowers();
    } else {
      storeOrange({
        ...orange,
        [focusedOrangeOrder]: {
          name: ORANGES_LIST[0].name,
          maxWalk: ORANGES_LIST[0].maxWalk,
        },
      });
    }
  };

  const _handleBtnClick = async () => {
    console.log('_handleBtnClick');
    if (spotInfo && spotInfo.isVisited === false) {
      setSproutPlace(prev => {
        var places = prev.slice();

        for (var place of places) {
          if (place.spotId == spotInfo.spotId) {
            console.log(place.spotId);
            place.isVisited = true;
            // 방문 체크
            AroundService.saveVisited(place.spotId)
              .then(res => {
                if (res.status == 200) {
                  console.log('save visited success');
                  addSprout();
                } else {
                  console.log('save visited failed');
                }
              })
              .catch(err => console.log(err));
          }
        }

        return places;
      });

      // 방문 체크
    }
  };

  return (
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <ModalContainer height={'196px'}>
        <font.title.Subhead3 color={theme.colors.main}>
          친환경 스팟에 도착했습니다!
        </font.title.Subhead3>
        <SpotDetail spotInfo={spotInfo} navigation={navigation} />
        {spotInfo?.isVisited ? (
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
