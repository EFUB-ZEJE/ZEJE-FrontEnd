import React, {useState} from 'react';
import {ScreenHeader, SizedBox, SortButton} from '../../components';
import {Alert, Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';
import BottomSheet from '../../components/common/BottomSheet';
import font from '../../styles/font';
import {palette, theme} from '../../styles/theme';
import SvgIcon from '../../components/common/SvgIcon';
import SpotList from '../../components/Around/SpotList';
import haversine from 'haversine';

import GetPossibleFlowersModal from '../../modal/modals/Around/GetPosibleFlowersModal';

export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');
  const [sproutPlaces, setSproutPlace] = useState([
    {
      spotId: 87,
      contentId: 129145,
      category: '여행',
      type: '자연',
      name: '마라도 등대',
      location: '제주특별자치도 서귀포시 대정읍 마라로 161',
      description: null,
      latitude: 33.31,
      longitude: 126.42,
      link: null,
    },
    {
      spotId: 88,
      contentId: 126450,
      category: '여행',
      type: '자연',
      name: '마라도(마라해양도립공원)',
      location: '제주특별자치도 서귀포시 대정읍 마라로101번길 46',
      latitude: 33.33,
      longitude: 126.47,
      description: null,
      link: null,
    },
    {
      spotId: 89,
      contentId: 126452,
      category: '여행',
      type: '자연',
      name: '만장굴 (제주도 국가지질공원)',
      location: '제주특별자치도 제주시 구좌읍 만장굴길 182',
      latitude: 33.36,
      longitude: 126.44,
      description: null,
      link: null,
    },
    {
      spotId: 90,
      contentId: 1926601,
      category: '여행',
      type: '자연',
      name: '모구리오름',
      location: '제주특별자치도 서귀포시 성산읍 서성일로',
      latitude: 33.39,
      longitude: 126.42,
      description: null,
      link: null,
    },
    {
      spotId: 91,
      contentId: 1928045,
      category: '여행',
      type: '자연',
      name: '모지오름',
      location: '제주특별자치도 서귀포시 표선면 번영로',
      latitude: 33.37,
      longitude: 126.48,
      description: null,
      link: null,
    },
  ]);

  const _fetchSproutPlaces = () => {
    // GET /spots/flowers 요청
    // SproutPlace 갱신
  };

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

      {viewType === 'Map' ? (
        <>
          <Map places={sproutPlaces} navigation={navigation} />
          <GetPossibleFlowersModal />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />
          <SpotList sproutPlaces={sproutPlaces} type={sortType} />
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
`;
