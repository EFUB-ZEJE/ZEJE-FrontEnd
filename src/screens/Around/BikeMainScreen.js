import React, {useState, useEffect} from 'react';
import {ScreenHeader, SortButton} from '../../components';
import {Text} from 'react-native';
import BikeData from './BikeData.json';
import FoundModal from '../../modal/modals/Around/FoundModal';
import {useRecoilState} from 'recoil';
import {FoundModalState} from '../../modal/recoil/modalStates';
import BikeMap from './BikeMap';
import styled from 'styled-components';

export default function BikeMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');

  const [bikeLoads, setBikeLoads] = useState([]);
  const [foundModalVisible, setFoundModalVisible] =
    useRecoilState(FoundModalState);
  useEffect(() => {
    setBikeLoads(() => {
      const destructedData = BikeData.map(load => {
        return {
          start: load['기점'],
          latitude: parseFloat(load['기점 위도']),
          longitude: parseFloat(load['기점 경도']),
          end: load['종점'],
          endLat: parseFloat(load['종점 위도']),
          endLng: parseFloat(load['종점 경도']),
          length: parseFloat(load['연장(km)']),
          loadName: load['노선명'],
        };
      });

      return destructedData;
    });
    setFoundModalVisible(true);
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
        screenTitle="자전거 여행"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />

      {viewType === 'Map' ? (
        <>
          <BikeMap places={bikeLoads} />
          <FoundModal text="자전거 여행 경로를 찾아보세요!" />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          <SpotList places={bikeLoads} type={sortType} />
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
