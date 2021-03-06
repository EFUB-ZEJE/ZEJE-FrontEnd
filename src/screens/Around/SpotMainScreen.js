import React, {useState} from 'react';
import {ScreenHeader, SizedBox, SortButton} from '../../components';
import {Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';
import BottomSheet from '../../components/common/BottomSheet';
import font from '../../styles/font';
import {palette, theme} from '../../styles/theme';
import SvgIcon from '../../components/common/SvgIcon';
import Spot from '../../components/Around/Spot';

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
      link: null,
    },
    {
      spotId: 88,
      contentId: 126450,
      category: '여행',
      type: '자연',
      name: '마라도(마라해양도립공원)',
      location: '제주특별자치도 서귀포시 대정읍 마라로101번길 46',
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
        <Map />
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          {sortType === '내 위치 중심'
            ? sproutPlaces.map(
                (
                  place, // 내위치 중심 -> 나중에 수정 필요
                ) => (
                  <Spot
                    name={place.name}
                    desc={place.description}
                    location={place.location}
                  />
                ),
              )
            : sproutPlaces.map(
                (
                  place, // 지도 중심
                ) => (
                  <Spot
                    name={place.name}
                    desc={place.description}
                    location={place.location}
                  />
                ),
              )}
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
