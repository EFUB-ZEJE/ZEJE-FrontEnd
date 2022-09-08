import React, {useEffect, useState} from 'react';
import {ScreenHeader, SortButton} from '../../components';
import EVService from '../../services/EVService';
import EVstationMap from './EVstationMap';
import {FoundModalState} from '../../modal/recoil/modalStates';
import {useRecoilState} from 'recoil';
import FoundModal from '../../modal/modals/Around/FoundModal';
import SpotList from '../../components/Around/SpotList';
import styled from 'styled-components';
import Spinner from 'react-native-loading-spinner-overlay';
import {theme, palette} from '../../styles/theme';
export default function BatteryMainScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');
  const [EVstations, setEVstations] = useState([]);
  const [foundModalVisible, setFoundModalVisible] =
    useRecoilState(FoundModalState);

  function deconstructData(data) {
    return new Promise((resolve, reject) => {
      const deconstructedData = data.map(({statNm, statId, addr, lat, lng}) => {
        return {
          name: statNm,
          spotId: statId,
          location: addr,
          latitude: parseFloat(lat),
          longitude: parseFloat(lng),
        };
      });

      resolve(deconstructedData);
      reject('deconstruction failed');
    });
  }

  useEffect(() => {
    EVService.getEVstation()
      .then(res => {
        if (res.status == 200) {
          setEVstations(() => {
            const deconstructedData = res.data.items.item.map(
              ({statNm, statId, addr, lat, lng}) => {
                return {
                  name: statNm,
                  spotId: statId,
                  location: addr,
                  latitude: parseFloat(lat),
                  longitude: parseFloat(lng),
                };
              },
            );
            return deconstructedData;
          });
          setIsLoading(false);
        } else {
          console.log('데이터를 가져오는데 실패하였습니다.');
        }
      })
      .catch(err => console.log(err));
  }, []);

  const _handlePressSortButton = () => {
    if (sortType === '내 위치 중심') {
      setSortType('지도 중심');
    } else {
      setSortType('내 위치 중심');
    }
  };
  const _handlePressViewTypeButton = () => {
    if (viewType === 'List') {
      setViewType('Map');
    } else {
      setViewType('List');
    }
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="전기차 충전소"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />
      <Spinner
        cancelable={false}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
      {viewType === 'Map' ? (
        <>
          <EVstationMap places={EVstations} />
          <FoundModal text="주변의 전기차 충전소를 찾아보세요!" />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          <SpotList places={EVstations} type={sortType} />
        </ScreenContainer>
      )}
    </>
  );
}
const ScreenContainer = styled.ScrollView`
  background-color: white;
  padding: 16px 20px;
  padding-top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
