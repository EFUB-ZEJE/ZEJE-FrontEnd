import React, {useState} from 'react';
import {ScreenContainer, ScreenHeader, SortButton} from '../../components';
import {Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';

const MapContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('List');

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
        screenTitle="내 주변의 친환경 스팟"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />
      <ScreenContainer>
        {viewType === 'List' ? (
          <Map />
        ) : (
          <>
            <Text>리스트</Text>
            <SortButton
              sortBy={sortType}
              handlePress={_handlePressSortButton}
            />
          </>
        )}
      </ScreenContainer>
    </>
  );
}
