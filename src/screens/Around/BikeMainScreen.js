import React, {useState} from 'react';
import {ScreenContainer, ScreenHeader, SortButton} from '../../components';
import {Text} from 'react-native';

export default function BikeMainScreen({navigation}) {
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
        screenTitle="자전거 여행"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />
      <ScreenContainer>
        {viewType === 'List' ? (
          <Text>지도</Text>
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
