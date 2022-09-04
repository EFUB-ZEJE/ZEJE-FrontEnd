import {Text, View, StyleSheet} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
import {SvgIcon} from '../../components/common/SvgIcon';
import {UnvistedMarkerSmall} from '../../assets';

import {DistanceToSpotModalState} from '../../modal/recoil/modalStates';
import {useRecoilState} from 'recoil';
import DistanceToSpotModal from '../../modal/modals/Around/DistanceToSpotModal';
import {ArriveSpotModalState} from '../../modal/recoil/modalStates';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {PermissionsAndroid} from 'react-native';
import ArriveSpotModal from '../../modal/modals/Around/ArriveSpotModal';
import {MapRegionState} from '../../recoil/GlobalState';
import GrayMarker from '../../components/Around/maps/GrayMarker';
import OrangeMarker from '../../components/Around/maps/OrangeMarker';

const ARRIVEDSTANDARD = 0.5; //500m

export default function Map({
  places,
  navigation,
  sproutPlaces,
  setSproutPlace,
}) {
  const [placeDetailModalVisible, setPlaceDetailModalVisible] = useRecoilState(
    DistanceToSpotModalState,
  );
  const [mapRegionState, setMapRegionState] = useRecoilState(MapRegionState);

  const [ArriveSpotModalVisible, setArriveSpotModalVisible] =
    useRecoilState(ArriveSpotModalState);

  const [focusedSpot, setFocusedSpot] = useState({
    spotId: 628,
    name: '석부작박물관',
    location: '제주특별자치도 서귀포시 일주동로 8941',
    mapX: '126.5360193536',
    mapY: '33.2503192271',
    todayVisit: false,
  });
  const [distBetween, setDistBetween] = useState(0);

  // 위치 정보 승인 요청
  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('승인되었습니다');
      }
    }
  }

  const _onMarkerClick = place => {
    Geolocation.getCurrentPosition(
      position => {
        setFocusedSpot(place); //현재 포커스된 spot 변경

        // 내위치와 스팟간의 거리차이 계산 (단위 : km)
        const dist_between = haversine(position.coords, place);
        setDistBetween(dist_between);

        if (dist_between <= ARRIVEDSTANDARD) {
          setArriveSpotModalVisible(true); //도착 모달 on
        } else setPlaceDetailModalVisible(true); // 상세설명모달 on (도착x시)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          // 제주도 위치
          latitude: 33.38825,
          longitude: 126.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        followsUserLocation
        showsUserLocation
        onRegionChange={e => setMapRegionState(e)}>
        {places.map(place => {
          var MarkerSVG;
          var focused = focusedSpot
            ? focusedSpot.spotId == place.spotId
            : false;

          if (place.isVisited) {
            MarkerSVG = <GrayMarker size={focused ? 'big' : 'small'} />;
          } else {
            MarkerSVG = <OrangeMarker size={focused ? 'big' : 'small'} />;
          }

          return (
            <Marker
              key={place.spotId}
              onPress={() => _onMarkerClick(place)}
              coordinate={{
                // 제주도 위치
                latitude: place.latitude,
                longitude: place.longitude,
              }}>
              {MarkerSVG}
            </Marker>
          );
        })}
      </MapView>

      <DistanceToSpotModal
        spotInfo={focusedSpot}
        navigation={navigation}
        dist_between={distBetween}
      />

      <ArriveSpotModal
        spotInfo={focusedSpot}
        navigation={navigation}
        sproutPlaces={sproutPlaces}
        setSproutPlace={setSproutPlace}
      />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
