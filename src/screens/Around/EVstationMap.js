import {Text, View, StyleSheet} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
import {SvgIcon} from '../../components/common/SvgIcon';
import {useRecoilState} from 'recoil';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {PermissionsAndroid} from 'react-native';
import {MapRegionState} from '../../recoil/GlobalState';
import OrangeMarker from '../../components/Around/maps/OrangeMarker';
import EVMarker from '../../components/Around/maps/EVMarker';
import {DistanceToSpotModal} from '../../modal/modals/Around';
import {DistanceToSpotModalState} from '../../modal/recoil/modalStates';

export default function EVstationMap({places}) {
  const [mapRegionState, setMapRegionState] = useRecoilState(MapRegionState);
  const [placeDetailModalVisible, setPlaceDetailModalVisible] = useRecoilState(
    DistanceToSpotModalState,
  );
  const [focusedSpot, setFocusedSpot] = useState(null);
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
        setFocusedSpot(place);

        // 내위치와 스팟간의 거리차이 계산 (단위 : km)
        const dist_between = haversine(position.coords, place);
        setDistBetween(dist_between);

        setPlaceDetailModalVisible(true);
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

          MarkerSVG = <EVMarker size={focused ? 'big' : 'small'} />;

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
      <DistanceToSpotModal spotInfo={focusedSpot} dist_between={distBetween} />
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
