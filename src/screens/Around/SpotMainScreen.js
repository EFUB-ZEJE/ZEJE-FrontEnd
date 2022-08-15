import React, {useEffect, useState} from 'react';
import {ScreenHeader, SizedBox, SortButton} from '../../components';
import {Alert, Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {
  GetAllFlowersModalState,
  NotFoundModalState,
  GetPossibleFlowersModalState,
} from '../../modal/recoil/modalStates';
import SpotList from '../../components/Around/SpotList';
import NotFoundModal from '../../modal/modals/Around/NotFoundModal';
import {
  GetAllFlowersModal,
  GetPossibleFlowersModal,
} from '../../modal/modals/Around';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import Layout from '../../styles/layout';
import SvgIcon from '../../components/common/SvgIcon';
import font from '../../styles/font';
import {theme, palette} from '../../styles/theme';

export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');

  const [notFoundModalVisible, setNotFoundModalVisible] =
    useRecoilState(NotFoundModalState);

  const [getAllFlowersModalVisible, setGetAllFlowersModalVisible] =
    useRecoilState(GetAllFlowersModalState);
  const [getPossibleFlowersModalVisible, setGetPossibleFlowersModalVisible] =
    useRecoilState(GetPossibleFlowersModalState);

  const [unvisitedSpotCnt, setUnvisitedSpotCnt] = useState(0);
  const [nearbySpotCnt, setNearbySpotCnt] = useState(0);

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
      isVisited: true,
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
      isVisited: false,
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
      isVisited: false,
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
      isVisited: true,
    },
    {
      spotId: 101,
      contentId: 126452,
      category: '여행',
      type: '자연',
      name: '먼곳',
      location: '제주특별자치도 제주시 구좌읍 만장굴길 182',
      latitude: 34.369,
      longitude: 127.442,
      description: null,
      link: null,
      isVisited: false,
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
      isVisited: false,
    },
  ]);

  const _handleFirstModal = (unVisitedCnt, nearbySpotCnt) => {
    if (unVisitedCnt == 0) {
      //모두 방문했다면
      setGetAllFlowersModalVisible(true);
    } else if (nearbySpotCnt == 0) {
      setNotFoundModalVisible(true);
    } else {
      setGetPossibleFlowersModalVisible(true);
    }
  };

  useEffect(() => {
    //첫화면 모달 분기
    var unVisitedCnt = 0; // 아직 방문하지 않은 spot 목록
    for (var place of sproutPlaces) {
      if (place.isVisited == false) unVisitedCnt++;
    }
    setUnvisitedSpotCnt(unVisitedCnt); //setstate는 비동기

    var nearbySpotCnt = 0;
    Geolocation.getCurrentPosition(
      position => {
        for (place of sproutPlaces) {
          // 내위치와 스팟간의 거리차이 계산 (단위 : km)
          const dist_between = haversine(position.coords, place);
          if (dist_between <= 10) {
            //10km 이내라면 (가까운)
            nearbySpotCnt++;
          }
        }
        setNearbySpotCnt(nearbySpotCnt);
        console.log(nearbySpotCnt);
        _handleFirstModal(unVisitedCnt, nearbySpotCnt);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);
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
          <Map
            places={sproutPlaces}
            navigation={navigation}
            sproutPlaces={sproutPlaces}
            setSproutPlace={setSproutPlace}
          />
          <GetPossibleFlowersModal unvisitedSpotCnt={unvisitedSpotCnt} />
          <NotFoundModal />
          <GetAllFlowersModal />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />
          {nearbySpotCnt == 0 ? (
            <Center>
              <SvgIcon name="RedOrange" size={'130px'} />
              <font.title.Subhead3 color={theme.colors.main}>
                주위에 친환경 스팟이 없어요.
              </font.title.Subhead3>
            </Center>
          ) : (
            <SpotList sproutPlaces={sproutPlaces} type={sortType} />
          )}
        </ScreenContainer>
      )}
    </>
  );
}

const Center = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const ScreenContainer = styled.ScrollView`
  background-color: white;
  padding: 16px 20px;
  padding-top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
