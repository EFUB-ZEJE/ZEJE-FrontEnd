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
import {AroundService} from '../../services/AroundService';
import Spinner from 'react-native-loading-spinner-overlay';
import {getData, saveData} from '../../data/LocalStorage';
import {useFocusedOrangeOrder} from '../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {useOrange} from '../../data/recoil/oranges/hooks/useOrange';

export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');
  const [isLoading, setIsLoading] = useState(true);

  const [notFoundModalVisible, setNotFoundModalVisible] =
    useRecoilState(NotFoundModalState);

  const [getAllFlowersModalVisible, setGetAllFlowersModalVisible] =
    useRecoilState(GetAllFlowersModalState);
  const [getPossibleFlowersModalVisible, setGetPossibleFlowersModalVisible] =
    useRecoilState(GetPossibleFlowersModalState);

  const [unvisitedSpotCnt, setUnvisitedSpotCnt] = useState(0);
  const [nearbySpotCnt, setNearbySpotCnt] = useState(0);

  const [sproutPlaces, setSproutPlace] = useState([]);

  const {orange} = useOrange();
  const {setFocusedOrangeOrder} = useFocusedOrangeOrder();

  const findEmptyOrder = () => {
    for (let i = 1; i < 8; i++) {
      if (orange[i].name === '') {
        setFocusedOrangeOrder(i);
        return;
      }
    }
  };

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
    findEmptyOrder();

    AroundService.getSproutPoints()
      .then(res => {
        if (res.status == 200) {
          var deconstructedData = [];
          setSproutPlace(() => {
            deconstructedData = res.data.map(
              ({mapX, mapY, spotId, name, location, todayVisit}) => {
                return {
                  name,
                  spotId,
                  latitude: parseFloat(mapY),
                  longitude: parseFloat(mapX),
                  isVisited: todayVisit,
                  location: location,
                };

                // 해당 스팟 방문 여부
              },
            );

            console.log('deconstructedData');
            return deconstructedData;
          });

          setIsLoading(false);
        } else {
          console.log('failed get sprouts');
        }

        return new Promise((resolve, reject) => {
          resolve(deconstructedData);
          reject('fetch err');
        });
      })
      .catch(err => console.log(err))
      .then(res => {
        const sproutPlaces = res;

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

            _handleFirstModal(unVisitedCnt, nearbySpotCnt);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
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
  console.log('sproutPlaces.length', sproutPlaces.length);
  return (
    <>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
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
          {sproutPlaces.length != 0 && (
            <Map
              places={sproutPlaces}
              navigation={navigation}
              setSproutPlace={setSproutPlace}
            />
          )}

          <GetPossibleFlowersModal unvisitedSpotCnt={unvisitedSpotCnt} />
          <NotFoundModal />
          <GetAllFlowersModal />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          {sproutPlaces.length !== 0 && (
            <SpotList
              places={sproutPlaces}
              sproutPlaces={sproutPlaces}
              type={sortType}
            />
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
